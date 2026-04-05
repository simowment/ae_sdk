# ae dropshiper image search v2

**Path:** `aliexpress.ds.image.searchV2`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | Yes | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| param0 | Object | No | param0 |
| └ search_type | String | No | image search type(same/similar) |
| └ image_base64 | String | No | image encoded using base64 |
| └ currency | String | No | currency |
| └ lang | String | No | language |
| └ sort_type | String | No | sort type(price/orders) |
| └ sort_order | String | No | sort order(asc/desc) |
| └ ship_to | String | No | ship to country |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 | result |
| └ messages | 1 | message |
| └ empty | 3 | empty |
| └ ret | 3 | ret |
| └ code | 1 | code |
| └ data | 9 | data |
| &nbsp;&nbsp;└ product_main_image_url | 1 | product_main_image_url |
| &nbsp;&nbsp;└ target_original_price_currency | 1 | target_original_price_currency |
| &nbsp;&nbsp;└ evaluate_rate | 1 | evaluate_rate |
| &nbsp;&nbsp;└ target_original_price | 1 | target_original_price |
| &nbsp;&nbsp;└ shop_id | 2 | shop_id |
| &nbsp;&nbsp;└ second_level_category_title | 1 | second_level_category_title |
| &nbsp;&nbsp;└ ship_from | 1 | US |
| &nbsp;&nbsp;└ similarity_score | 1 | similarity score |
| &nbsp;&nbsp;└ first_level_category_id | 1 | first_level_category_id |
| &nbsp;&nbsp;└ product_id | 1 | product_id |
| &nbsp;&nbsp;└ target_sale_price_currency | 1 | target_sale_price_currency |
| &nbsp;&nbsp;└ discount | 1 | discount |
| &nbsp;&nbsp;└ second_level_category_id | 1 | second_level_category_id |
| &nbsp;&nbsp;└ latest_volume | 1 | latest_volume |
| &nbsp;&nbsp;└ product_title | 1 | product_title |
| &nbsp;&nbsp;└ product_detail_url | 1 | product_detail_url |
| &nbsp;&nbsp;└ first_level_category_title | 1 | first_level_category_title |
| &nbsp;&nbsp;└ target_sale_price | 1 | target_sale_price |
