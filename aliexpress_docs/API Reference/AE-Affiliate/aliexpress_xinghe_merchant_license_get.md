# Inquire Business License

**Path:** `/aliexpress/xinghe/merchant/license/get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | No | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| param0 | Object | Yes |  |
| └ sellerAdminSeq | String | Yes |  |
| └ channel | String | No |  |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 |  |
| └ retry_able | 3 |  |
| └ data | 4 |  |
| &nbsp;&nbsp;└ file_name | 1 |  |
| &nbsp;&nbsp;└ content | 1 |  |
| └ success | 3 |  |
| └ result_code | 1 |  |
| └ result_message | 1 |  |
