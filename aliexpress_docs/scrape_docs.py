import os
import re
import json
import time
import requests
import sys
import io
from markdownify import markdownify as md

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

BASE_URL = "https://openservice.aliexpress.com"
OUTPUT_DIR = "aliexpress_docs"
TARGET_CATEGORY = "DropShipper"

SESSION_HEADERS = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "application/json",
    "Referer": "https://openservice.aliexpress.com/doc/doc.htm",
}

session = requests.Session()
session.headers.update(SESSION_HEADERS)

def process_nested_params(node_list, level=0, is_input=True):
    rows = []
    for node in node_list:
        prefix = ""
        if level > 0:
            prefix = ("&nbsp;&nbsp;" * (level - 1)) + "└ "
            
        name = prefix + node.get('paramName', '')
        type_ = node.get('paramType', '')
        required = "Yes" if node.get('required') else "No"
        
        desc_raw = node.get('desc', '[]')
        desc = ""
        try:
            desc_parsed = json.loads(desc_raw)
            for d in desc_parsed:
                if 'en_US' in d:
                    desc = d['en_US']
                    break
        except:
            desc = desc_raw
            
        # Clean up description
        desc = desc.replace('\n', ' ').replace('\r', '').replace('|', '&#124;')
            
        if is_input:
            rows.append(f"| {name} | {type_} | {required} | {desc} |")
        else:
            rows.append(f"| {name} | {type_} | {desc} |")
            
        children = node.get('children', [])
        if children:
            rows.extend(process_nested_params(children, level + 1, is_input))
    return rows

def generate_api_markdown():
    print("[+] Fetching API categories...")
    url_cat = f"{BASE_URL}/handler/share/apidoc/getApiCategoryMixed.json"
    r_cat = session.get(url_cat, params={'lang': 'en_US', 'categoryType': 'api'})
    r_cat.raise_for_status()
    categories = r_cat.json().get('data', [])
    
    out_dir = os.path.join(OUTPUT_DIR, "API Reference")
    os.makedirs(out_dir, exist_ok=True)
    
    for cat in categories:
        if cat.get('name') in ['AE-Dropshipper', 'AE-Affiliate', 'System Tool']:
            cat_name = cat.get('name')
            print(f"[*] Processing API category: {cat_name}")
            
            cat_dir = os.path.join(out_dir, cat_name)
            os.makedirs(cat_dir, exist_ok=True)
            
            for api in cat.get('apiList', []):
                path = api.get('path')
                if not path:
                    continue
                    
                print(f"  [+] Fetching API details: {path}")
                url_api = f"{BASE_URL}/handler/share/apidoc/getApi.json"
                try:
                    r_api = session.get(url_api, params={'path': path, 'lang': 'en_US'})
                    res_json = r_api.json()
                    
                    data = res_json.get('data', {})
                    api_list = data.get('apiList', [])
                    if not api_list:
                        continue
                        
                    api_data = api_list[0]
                    title = api_data.get('title', path)
                    
                    # Generate Markdown content
                    md_lines = [f"# {title}", "", f"**Path:** `{path}`", ""]
                    
                    examples = api_data.get('examples', {}).get('data', [])
                    if examples:
                        # Inputs
                        inputs = examples[0].get('input', [])
                        md_lines.extend([
                            "## Request Parameters",
                            "",
                            "| Name | Type | Required | Description |",
                            "|---|---|---|---|"
                        ])
                        
                        # Add common parameters too if they exist
                        common_params = api_data.get('commonParameters', {}).get('data', [])
                        if common_params:
                            for cp in common_params:
                                md_lines.append(f"| {cp.get('name')} | {cp.get('type')} | {'Yes' if cp.get('required') else 'No'} | {cp.get('desc').replace('|', '&#124;')} (Common) |")
                                
                        if inputs:
                            md_lines.extend(process_nested_params(inputs, 0, True))
                            
                        md_lines.append("")
                            
                        # Outputs
                        outputs = examples[0].get('output', [])
                        md_lines.extend([
                            "## Response Parameters",
                            "",
                            "| Name | Type | Description |",
                            "|---|---|---|"
                        ])
                        if outputs:
                            md_lines.extend(process_nested_params(outputs, 0, False))
                            
                        md_lines.append("")
                        
                    # Error codes
                    error_codes = api_data.get('errorCodes', {}).get('data', [])
                    if error_codes:
                        md_lines.extend([
                            "## Error Codes",
                            "",
                            "| Error Code | Error Description | Solution |",
                            "|---|---|---|"
                        ])
                        for err in error_codes:
                            code = err.get('code', '')
                            desc = err.get('codeDesc', '').replace('\n', ' ').replace('|', '&#124;')
                            sol = err.get('solution', '').replace('\n', ' ').replace('|', '&#124;')
                            md_lines.append(f"| {code} | {desc} | {sol} |")
                        
                        md_lines.append("")
                        
                    file_name = path.replace('/', '_')
                    if file_name.startswith('_'):
                        file_name = file_name[1:]
                        
                    out_file = os.path.join(cat_dir, f"{file_name}.md")
                    with open(out_file, 'w', encoding='utf-8') as f:
                        f.write('\n'.join(md_lines))
                        
                    time.sleep(0.1)
                except Exception as e:
                    print(f"  [!] Failed fetching {path}: {e}")
                    
    print(f"[✓] Finished generating API Markdown!")

if __name__ == "__main__":
    generate_api_markdown()
