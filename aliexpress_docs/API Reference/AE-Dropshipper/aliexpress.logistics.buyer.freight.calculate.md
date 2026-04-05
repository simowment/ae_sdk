# Freight calculation interface provided for buyers

**Path:** `aliexpress.logistics.buyer.freight.calculate`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | Yes | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| param_aeop_freight_calculate_for_buyer_d_t_o | Object | Yes |  |
| └ sku_id | String | No |  |
| └ city_code | String | No |  |
| └ country_code | String | Yes |  |
| └ product_id | Number | Yes |  |
| └ product_num | Number | Yes |  |
| └ province_code | String | No |  |
| └ send_goods_country_code | String | Yes |  |
| └ price | String | No |  |
| └ price_currency | String | No |  |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 |  |
| └ aeop_freight_calculate_result_for_buyer_d_t_o_list | 9 |  |
| &nbsp;&nbsp;└ tracking_available | 1 |  |
| &nbsp;&nbsp;└ error_code | 2 |  |
| &nbsp;&nbsp;└ estimated_delivery_time | 1 |  |
| &nbsp;&nbsp;└ freight | 4 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ amount | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ cent | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency_code | 1 |  |
| &nbsp;&nbsp;└ service_name | 1 |  |
| └ error_desc | 1 |  |
| └ success | 3 |  |
