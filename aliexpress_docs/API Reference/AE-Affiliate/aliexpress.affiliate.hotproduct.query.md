# get hotproducts

**Path:** `aliexpress.affiliate.hotproduct.query`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | No | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| app_signature | String | No |  |
| category_ids | String | No |  |
| fields | String | No |  |
| keywords | String | No |  |
| max_sale_price | Number | No |  |
| min_sale_price | Number | No |  |
| page_no | Number | No |  |
| page_size | Number | No |  |
| platform_product_type | String | No |  |
| sort | String | No |  |
| target_currency | String | No |  |
| target_language | String | No |  |
| tracking_id | String | No |  |
| delivery_days | String | No |  |
| ship_to_country | String | No |  |
| promotion_name | String | No |  |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| resp_result | 4 |  |
| └ resp_code | 2 |  |
| └ resp_msg | 1 |  |
| └ result | 4 |  |
| &nbsp;&nbsp;└ current_page_no | 2 |  |
| &nbsp;&nbsp;└ current_record_count | 2 |  |
| &nbsp;&nbsp;└ products | 9 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sku_id | 2 | SKU ID |
| &nbsp;&nbsp;&nbsp;&nbsp;└ tax_rate | 1 | Product tax rate, required when querying delivery. |
| &nbsp;&nbsp;&nbsp;&nbsp;└ app_sale_price | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ app_sale_price_currency | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ commission_rate | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ discount | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ evaluate_rate | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ first_level_category_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ first_level_category_name | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ lastest_volume | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ hot_product_commission_rate | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ original_price | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ original_price_currency | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ platform_product_type | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_detail_url | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_main_image_url | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_small_image_urls | 6 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_title | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_video_url | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ promotion_link | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sale_price | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sale_price_currency | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ second_level_category_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ second_level_category_name | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ shop_name | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ shop_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ shop_url | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ target_app_sale_price | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ target_app_sale_price_currency | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ target_original_price | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ target_original_price_currency | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ target_sale_price | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ target_sale_price_currency | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ relevant_market_commission_rate | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ promo_code_info | 4 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ promo_code | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ code_campaigntype | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ code_value | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ code_availabletime_start | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ code_availabletime_end | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ code_mini_spend | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ code_quantity | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ code_promotionurl | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ ship_to_days | 1 |  |
| &nbsp;&nbsp;└ total_page_no | 2 |  |
| &nbsp;&nbsp;└ total_record_count | 2 |  |
