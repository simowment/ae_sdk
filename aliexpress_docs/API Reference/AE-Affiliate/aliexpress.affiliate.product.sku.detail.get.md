# Get SKU Product Detail Info

**Path:** `aliexpress.affiliate.product.sku.detail.get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | No | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| ship_to_country | String | Yes | The Ship to country. Filter products that can be sent to that country |
| product_id | String | Yes | Product ID |
| target_currency | String | Yes | The target currency: USD, GBP, CAD, EUR, UAH, MXN, TRY, BRL, AUD, INR, JPY, IDR, SEK, KRW, ILS, THB, CLP, VND |
| target_language | String | Yes | target language: EN,PT,ES,FR,ID,IT,TH,JA,AR,VI,TR,DE,HE,KO,NL,PL,MX,CL,IN |
| need_deliver_info | String | No | Yes / No. No by default. If delivery information is needed, the query speed will be appropriately slowed down. |
| sku_ids | String | No | The SKU IDs are optional, separated by comma. If not provided, the query will return all SKU information under the product ID (limited to a maximum of 20 SKUs). |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 | result |
| └ result | 4 | result |
| &nbsp;&nbsp;└ ae_item_info | 4 | Attribute information |
| &nbsp;&nbsp;&nbsp;&nbsp;└ order_number | 1 | Number of sales |
| &nbsp;&nbsp;&nbsp;&nbsp;└ image_white | 1 | White-background image link |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_id | 1 | Product ID |
| &nbsp;&nbsp;&nbsp;&nbsp;└ display_category_name_l3 | 1 | Level 3 display category name |
| &nbsp;&nbsp;&nbsp;&nbsp;└ display_category_name_l1 | 1 | Level 1 display category name |
| &nbsp;&nbsp;&nbsp;&nbsp;└ display_category_name_l2 | 1 | Level 2 display category name |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_score | 1 | Score of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;└ title | 1 | product title in target language |
| &nbsp;&nbsp;&nbsp;&nbsp;└ original_link | 1 | Original item link without tracking parameters |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_category | 1 | Product category |
| &nbsp;&nbsp;&nbsp;&nbsp;└ image_link | 1 | Image link of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;└ en_title | 1 | product title in English |
| &nbsp;&nbsp;&nbsp;&nbsp;└ display_category_id_l3 | 2 | Level 3 display category ID |
| &nbsp;&nbsp;&nbsp;&nbsp;└ additional_image_links | 6 | Additional image links |
| &nbsp;&nbsp;&nbsp;&nbsp;└ review_number | 1 | Number of reviews |
| &nbsp;&nbsp;&nbsp;&nbsp;└ display_category_id_l2 | 2 | Level 2 display category ID |
| &nbsp;&nbsp;&nbsp;&nbsp;└ display_category_id_l1 | 2 | Level 1 display category ID |
| &nbsp;&nbsp;&nbsp;&nbsp;└ brand | 1 | Brand of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;└ age_group | 1 | Applicable age group |
| &nbsp;&nbsp;&nbsp;&nbsp;└ gender | 1 | Applicable gender |
| &nbsp;&nbsp;&nbsp;&nbsp;└ condition | 1 | Condition of the product (New/Used) |
| &nbsp;&nbsp;&nbsp;&nbsp;└ store_name | 1 | Name of the store |
| &nbsp;&nbsp;&nbsp;&nbsp;└ display_category_id_l4 | 2 | Level 4 display category ID |
| &nbsp;&nbsp;&nbsp;&nbsp;└ display_category_name_l4 | 1 | Level 4 display category name |
| &nbsp;&nbsp;└ ae_item_sku_info | 9 | SKU information |
| &nbsp;&nbsp;&nbsp;&nbsp;└ discount_rate | 1 | Discount rate applied to the product |
| &nbsp;&nbsp;&nbsp;&nbsp;└ link | 1 | Promotional link |
| &nbsp;&nbsp;&nbsp;&nbsp;└ shipping_fees | 1 | The shipping cost of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;└ color | 1 | Color of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;└ max_delivery_days | 1 | The maximum estimated number of days for delivery |
| &nbsp;&nbsp;&nbsp;&nbsp;└ price_with_tax | 1 | Original price of the product including tax |
| &nbsp;&nbsp;&nbsp;&nbsp;└ min_delivery_days | 1 | The minimum estimated number of days for delivery |
| &nbsp;&nbsp;&nbsp;&nbsp;└ ship_from_country | 1 | The country from which the product is shipped |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sale_price_with_tax | 1 | Sale price of the product including tax |
| &nbsp;&nbsp;&nbsp;&nbsp;└ tax_rate | 1 | Tax rate applicable to the product |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sku_image_link | 1 | Image link for the SKU |
| &nbsp;&nbsp;&nbsp;&nbsp;└ size | 1 | Size of the product |
| &nbsp;&nbsp;&nbsp;&nbsp;└ delivery_days | 1 | The estimated number of days for delivery |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency | 1 | Currency of the target country |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sku_id | 2 | SKU ID |
| &nbsp;&nbsp;&nbsp;&nbsp;└ ean_code | 1 | European Article Number code |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sku_properties | 1 | Attribute information |
| └ code | 2 | code |
| └ success | 3 | Is Success |

## Error Codes

| Error Code | Error Description | Solution |
|---|---|---|
| 405 | No query results were found for the input parameter | Please adjust query parameters |
