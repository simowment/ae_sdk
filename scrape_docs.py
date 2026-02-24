import requests
import json
import time
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

BASE_URL = "https://openservice.aliexpress.com"

SESSION_HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "application/json",
    "Referer": "https://openservice.aliexpress.com/doc/doc.htm",
}

session = requests.Session()
session.headers.update(SESSION_HEADERS)

def get_term_categories(nodeId: int) -> dict:
    # Let's try to get the actual tree that shows all articles under nodeId=27493
    # Wait, earlier getDocTree failed with 404. Let's look at getDocTree url again.
    url = f"{BASE_URL}/handler/share/doc/getTermCategories.json"
    params = {"nodeId": nodeId, "lang": "en_US"}
    r = session.get(url, params=params)
    r.raise_for_status()
    data = r.json()
    return data.get("data", {})

def get_categories(nodeId: int) -> list:
    url = f"{BASE_URL}/handler/share/doc/getCategories.json"
    params = {"nodeId": nodeId, "lang": "en_US"}
    r = session.get(url, params=params)
    r.raise_for_status()
    data = r.json()
    return data.get("data", [])

def get_doc_detail(docId: int, nodeId: int) -> dict:
    url = f"{BASE_URL}/handler/share/doc/getDocDetail.json"
    params = {"docId": docId, "nodeId": nodeId, "lang": "en_US"}
    r = session.get(url, params=params)
    r.raise_for_status()
    data = r.json()
    if not data.get("success"):
        return None
    return data.get("data", {})

def dump_docs(nodeId: int, name: str):
    print(f"[+] Fetching term categories for nodeId={nodeId}")
    try:
        categories = get_term_categories(nodeId)
    except Exception as e:
        print(f"  [!] Failed to get categories: {e}")
        return

    doc_ids = []
    
    def traverse(node):
        if not isinstance(node, dict):
            return
            
        # Check currentDocList
        for doc in node.get("currentDocList", []):
            if "id" in doc:
                doc_ids.append((doc["id"], doc.get("enTitle") or doc.get("cnTitle") or str(doc["id"])))
                
        # Traverse children
        for child in node.get("children", []):
            traverse(child)
            
    traverse(categories)
    
    print(f"[*] Found {len(doc_ids)} documents to fetch.")
    
    results = []
    for i, (docId, title) in enumerate(doc_ids, 1):
        print(f"  [{i}/{len(doc_ids)}] Fetching docId={docId} ({title})")
        try:
            detail = get_doc_detail(docId, nodeId)
            if detail:
                results.append(detail)
            time.sleep(0.1)
        except Exception as e:
            print(f"  [!] Failed: {e}")

    with open(f"{name}.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"[✓] Saved {name}.json ({len(results)} docs)")

if __name__ == "__main__":
    dump_docs(27493, "aliexpress_docs_27493")

