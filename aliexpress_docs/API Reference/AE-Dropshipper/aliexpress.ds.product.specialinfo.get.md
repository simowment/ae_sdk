# get products' special info like certification

**Path:** `aliexpress.ds.product.specialinfo.get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | No | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| itemId | Number | Yes | product id |
| countryCodes | String[] | Yes | country code |
| appKey | String | Yes | your appkey |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 | result |
| └ ret | 3 | bool to tag if it is success |
| └ code | 1 | error code  |
| └ data | 4 | data_demo |
| &nbsp;&nbsp;└ product_id | 1 | productId |
| &nbsp;&nbsp;└ item_qualification_list | 9 | item certification list |
| &nbsp;&nbsp;&nbsp;&nbsp;└ value_type | 1 | certification type |
| &nbsp;&nbsp;&nbsp;&nbsp;└ name | 1 | certification name |
| &nbsp;&nbsp;&nbsp;&nbsp;└ value | 1 | certification url |
| &nbsp;&nbsp;&nbsp;&nbsp;└ key | 1 | certification key |
| └ err_message | 1 | error message |
