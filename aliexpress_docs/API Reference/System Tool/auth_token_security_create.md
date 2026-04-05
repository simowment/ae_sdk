# generateSecurityToken

**Path:** `/auth/token/security/create`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | No | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| code | String | Yes |  |
| uuid | String | No |  |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| expires_in | 2 |  |
| account_id | 1 |  |
| user_id | 1 |  |
| seller_id | 1 |  |
| access_token | 1 |  |
| refresh_token | 1 |  |
| refresh_expires_in | 2 |  |
| expire_time | 2 |  |
| refresh_token_valid_time | 2 |  |
| sp | 1 |  |
| locale | 1 |  |

## Error Codes

| Error Code | Error Description | Solution |
|---|---|---|
| isv.402 | Creation failed | Parameter error, please check the parameters |
