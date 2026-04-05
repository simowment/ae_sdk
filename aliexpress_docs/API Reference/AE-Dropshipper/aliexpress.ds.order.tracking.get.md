# Ds Order Tracking

**Path:** `aliexpress.ds.order.tracking.get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | Yes | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| ae_order_id | String | Yes | Order ID which you get from order.create |
| language | String | Yes | language |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 | result |
| └ msg | 1 | error message |
| └ ret | 3 | true for success |
| └ code | 1 | error code |
| └ data | 4 | tracking list dto |
| &nbsp;&nbsp;└ tracking_detail_line_list | 9 | tracking list |
| &nbsp;&nbsp;&nbsp;&nbsp;└ carrier_name | 1 | carrier name |
| &nbsp;&nbsp;&nbsp;&nbsp;└ eta_time_stamps | 2 | timestamp |
| &nbsp;&nbsp;&nbsp;&nbsp;└ package_item_list | 9 | package item |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ item_id | 2 | item id |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ quantity | 2 | count |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ item_title | 1 | item title |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ sku_desc | 1 | sku desc |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ sku_id | 2 | sku id |
| &nbsp;&nbsp;&nbsp;&nbsp;└ mail_no | 1 | mail number |
| &nbsp;&nbsp;&nbsp;&nbsp;└ detail_node_list | 9 | tracking node |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ tracking_detail_desc | 1 | tracking node description |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ tracking_name | 1 | tracking node description |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└ time_stamp | 2 | timestamp |

## Error Codes

| Error Code | Error Description | Solution |
|---|---|---|
| UnsupportedParamMapping | UnsupportedParamMapping | Parameter error, please check the parameters |
| TRACKING DATA NOT FOUND | TRACKING DATA NOT FOUND | The logistics number is wrong, please check the logistics number |
