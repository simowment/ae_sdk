# Fetch items with feedname in simple model

**Path:** `aliexpress.ds.feed.itemids.get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | Yes | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| page_size | Number | No | number of each page |
| category_id | String | No | first level category id, you can get from category query |
| feed_name | String | Yes | query api ‘aliexpress.ds.feedname.get’ |
| search_id | String | No |  |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 | result object |
| └ products | 7 | item id list |
| └ search_id | 1 | search id, put it in the next request. Only valid in 1 minutes |
| └ total | 2 | total item id left  |
| rsp_msg | 1 | result msg |
| rsp_code | 2 | result code |
| ret | 3 | true is success, false for fail |
