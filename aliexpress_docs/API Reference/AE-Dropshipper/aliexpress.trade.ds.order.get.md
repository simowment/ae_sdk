# buyer query order details

**Path:** `aliexpress.trade.ds.order.get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | Yes | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| single_order_query | Object | Yes |  |
| └ order_id | Number | Yes |  |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 | order information |
| └ user_order_amount | 4 | order amount in user's pay currency |
| &nbsp;&nbsp;└ amount | 1 | amount |
| &nbsp;&nbsp;└ currency_code | 1 | currency |
| └ pay_timeout_second | 1 | seconds for pay expiration, from order created |
| └ order_paidtime_string | 1 | order paid time |
| └ gmt_create | 1 | order creation time |
| └ order_status | 1 | order status |
| └ logistics_status | 1 | logistics status |
| └ order_amount | 4 | order amount |
| &nbsp;&nbsp;└ amount | 1 | amount |
| &nbsp;&nbsp;└ currency_code | 1 | currency code |
| └ child_order_list | 9 | child order list |
| &nbsp;&nbsp;└ actual_tax_fee | 4 | tax amount in user's pay currency |
| &nbsp;&nbsp;&nbsp;&nbsp;└ amount | 1 | amount |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency_code | 1 | USD |
| &nbsp;&nbsp;└ actual_shipping_fee | 4 | actual shipping fee = shippingfee - shippingdiscount |
| &nbsp;&nbsp;&nbsp;&nbsp;└ amount | 1 | fee amount  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency_code | 1 | currency |
| &nbsp;&nbsp;└ already_include_tax | 1 | does the product fee already include tax |
| &nbsp;&nbsp;└ shipping_fee | 4 | shipping fee  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ amount | 1 | amount |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency_code | 1 | currency |
| &nbsp;&nbsp;└ sale_discount_fee | 4 | sale discount  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ amount | 1 | amount |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency_code | 1 | currency |
| &nbsp;&nbsp;└ sale_fee | 4 | sale fee  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ amount | 1 | amount |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency_code | 1 | currency |
| &nbsp;&nbsp;└ actual_fee | 4 | actual fee = sale fee - sale discount + actual shipping |
| &nbsp;&nbsp;&nbsp;&nbsp;└ amount | 1 | amount |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency_code | 1 | currency |
| &nbsp;&nbsp;└ shipping_discount_fee | 4 | shipping discount |
| &nbsp;&nbsp;&nbsp;&nbsp;└ amount | 1 | amount |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency_code | 1 | currency |
| &nbsp;&nbsp;└ end_reason | 1 | order's end reason CANCELED |
| &nbsp;&nbsp;└ sku_id | 1 | SKU id |
| &nbsp;&nbsp;└ price_include_tax | 1 | if price include tax |
| &nbsp;&nbsp;└ product_id | 2 | product id |
| &nbsp;&nbsp;└ product_price | 4 | product price |
| &nbsp;&nbsp;&nbsp;&nbsp;└ amount | 1 | amount |
| &nbsp;&nbsp;&nbsp;&nbsp;└ currency_code | 1 | currency code |
| &nbsp;&nbsp;└ product_name | 1 | product name |
| &nbsp;&nbsp;└ product_count | 2 | number of products |
| └ logistics_info_list | 9 | order logistics information list |
| &nbsp;&nbsp;└ logistics_no | 1 |  |
| &nbsp;&nbsp;└ logistics_service | 1 |  |
| └ store_info | 4 | store Information |
| &nbsp;&nbsp;└ store_id | 2 |  |
| &nbsp;&nbsp;└ store_name | 1 |  |
| &nbsp;&nbsp;└ store_url | 1 |  |

## Error Codes

| Error Code | Error Description | Solution |
|---|---|---|
| isv.insufficient-permission | isv.insufficient-permission | Insufficient permissions，please check the parameters |
| isp.service-unavailable | isp.service-unavailable | Service timed out, please try again |
| isv.invalid-authorization | isv.invalid-authorization | Accessing data not belonging to you，please check the parameters |
| InternalError | InternalError | System error,Need to contact technical support |
