import os
import re
import json
import time
import requests
import sys
import io
from markdownify import markdownify as md

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# --- CONFIGURATION ---
BASE_URL = "https://openservice.aliexpress.com"
OUTPUT_DIR = "aliexpress_docs"

# If you only want DropShipper docs, set TARGET_CATEGORY = "DropShipper"
# To download EVERYTHING in the Open Platform, set TARGET_CATEGORY = None
TARGET_CATEGORY = "DropShipper"

SESSION_HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "application/json",
    "Referer": "https://openservice.aliexpress.com/doc/doc.htm",
}

session = requests.Session()
session.headers.update(SESSION_HEADERS)

def sanitize_filename(name):
    # Remove characters that are invalid in Windows/Linux filenames
    s = re.sub(r'[\/*?:"<>|]', "", name)
    # Remove newlines and trim
    return s.replace('\n', ' ').strip()

def get_doc_tree(typeId: int = 9) -> dict:
    url = f"{BASE_URL}/handler/share/doc/getCategories.json"
    params = {"typeId": typeId, "lang": "en_US"}
    r = session.get(url, params=params)
    r.raise_for_status()
    data = r.json()
    return data.get("data", {})

def get_doc_detail(docId: int) -> dict:
    url = f"{BASE_URL}/handler/share/doc/getDocDetail.json"
    params = {"docId": docId, "lang": "en_US"}
    r = session.get(url, params=params)
    r.raise_for_status()
    data = r.json()
    if not data.get("success"):
        return None
    return data.get("data", {})

def dump_docs_as_markdown(typeId: int):
    print(f"[+] Fetching full document tree for typeId={typeId}")
    try:
        tree = get_doc_tree(typeId)
    except Exception as e:
        print(f"  [!] Failed to get tree: {e}")
        return

    docs_to_fetch = []
    
    # Recursively traverse the nested folder structure
    def traverse(node, current_path):
        category_title = node.get("enTitle") or node.get("cnTitle") or ""
        path = current_path
        if category_title:
            path = current_path + [category_title]
            
        # Collect docs sitting inside this specific folder
        for doc in node.get("currentDocList", []):
            if "id" in doc:
                title = doc.get("enTitle") or doc.get("cnTitle") or str(doc["id"])
                docs_to_fetch.append({
                    "id": doc["id"],
                    "title": title,
                    "path": path
                })
                
        # Dig deeper into sub-folders
        for child in node.get("children", []):
            traverse(child, path)
            
    traverse(tree, [])
    
    print(f"[*] Found {len(docs_to_fetch)} total documents in the tree.")
    
    # Filter by TARGET_CATEGORY if specified
    filtered_docs = []
    for item in docs_to_fetch:
        path_str = " > ".join(item["path"])
        if TARGET_CATEGORY:
            if TARGET_CATEGORY.lower() in path_str.lower() or TARGET_CATEGORY.lower() in item["title"].lower():
                filtered_docs.append(item)
        else:
            filtered_docs.append(item)
            
    if TARGET_CATEGORY:
        print(f"[*] Filtered down to {len(filtered_docs)} documents matching '{TARGET_CATEGORY}'.")

    # Fetch and write files
    for i, item in enumerate(filtered_docs, 1):
        docId = item["id"]
        title = item["title"]
        safe_title = sanitize_filename(title)
        
        # Build a safe directory path
        clean_path = [sanitize_filename(p) for p in item["path"]]
        
        # Remove top level generics ("Open Platform", "Overseas Developers") to reduce deep nesting
        if len(clean_path) >= 2 and clean_path[0] == "Open Platform":
            clean_path = clean_path[2:]
            
        dir_path = os.path.join(OUTPUT_DIR, *clean_path)
        os.makedirs(dir_path, exist_ok=True)
        
        file_path = os.path.join(dir_path, f"{safe_title}.md")
        
        print(f"  [{i}/{len(filtered_docs)}] Writing: {file_path}")
        
        try:
            detail = get_doc_detail(docId)
            if detail:
                html_content = detail.get("enContent") or detail.get("cnContent") or ""
                
                # Convert HTML to Markdown
                markdown_text = md(html_content, heading_style="ATX").strip()
                
                # Assemble final document
                final_content = f"# {title}\n\n{markdown_text}\n"
                
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(final_content)
                    
            time.sleep(0.1) # polite delay to avoid rate limits
        except Exception as e:
            print(f"  [!] Failed fetching docId {docId}: {e}")

    print(f"\n[✓] Done! Files saved in ./{OUTPUT_DIR}/")

if __name__ == "__main__":
    dump_docs_as_markdown(9)
