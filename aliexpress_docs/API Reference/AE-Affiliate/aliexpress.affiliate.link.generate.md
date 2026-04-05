# generate affiliate links

**Path:** `aliexpress.affiliate.link.generate`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | No | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| ship_to_country | String | No |  |
| app_signature | String | No |  |
| promotion_link_type | Number | Yes |  |
| source_values | String | Yes |  |
| tracking_id | String | Yes |  |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| resp_result | 4 |  |
| └ resp_code | 2 |  |
| └ resp_msg | 1 |  |
| └ result | 4 |  |
| &nbsp;&nbsp;└ promotion_links | 9 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ message | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ promotion_link | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ source_value | 1 |  |
| &nbsp;&nbsp;└ total_result_count | 2 |  |
| &nbsp;&nbsp;└ tracking_id | 1 |  |
