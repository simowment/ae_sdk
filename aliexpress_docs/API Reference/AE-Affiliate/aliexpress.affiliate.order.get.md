# get order info

**Path:** `aliexpress.affiliate.order.get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | No | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| app_signature | String | No |  |
| fields | String | No |  |
| order_ids | String | No |  |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| resp_result | 4 |  |
| └ resp_code | 2 |  |
| └ resp_msg | 1 |  |
| └ result | 4 |  |
| &nbsp;&nbsp;└ current_record_count | 2 |  |
| &nbsp;&nbsp;└ orders | 9 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ completed_settlement_time | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ order_platform | 1 | You can check the parameter "order_platform": to identify the order attribution.  influencer_platform: The order is attributed to influencer platform. affiliate_platform: The order is attributed to Portals or non-influencer platform. |
| &nbsp;&nbsp;&nbsp;&nbsp;└ commission_rate | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ created_time | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ customer_parameters | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ order_status | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ estimated_finished_commission | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ estimated_paid_commission | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ finished_amount | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ finished_time | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ is_new_buyer | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_count | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_detail_url | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_main_image_url | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ product_title | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ new_buyer_bonus_commission | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ order_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ order_number | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ paid_amount | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ paid_time | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ parent_order_number | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ settled_currency | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ ship_to_country | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sub_order_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ tracking_id | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ is_hot_product | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ category_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ effect_detail_status | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ estimated_incentive_finished_commission | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ estimated_incentive_paid_commission | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ incentive_commission_rate | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ is_affiliate_product | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ order_type | 1 |  |
