# ds member benefit get

**Path:** `aliexpress.ds.member.benefit.get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | No | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| rsp_msg | 1 | rsp_msg |
| rsp_code | 1 | rsp_code |
| result | 9 | result |
| └ code | 1 | benefit code |
| └ title | 1 | benefit title |
| └ canApply | 1 | flag if can apply the benefit |
| └ canBenefit | 1 | flag if already own the benefit |
