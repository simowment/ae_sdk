# Get Product Shipping Info

**Path:** `aliexpress.affiliate.product.shipping.get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | No | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| product_id | Number | Yes | Product ID |
| sku_id | Number | Yes | SKU ID |
| ship_to_country | String | Yes | The Ship to country. Filter products that can be sent to that country; Returns the price according to the country’s tax rate policy. |
| target_currency | String | Yes | The target currency: USD, GBP, CAD, EUR, UAH, MXN, TRY, RUB, BRL, AUD, INR, JPY, IDR, SEK, KRW, ILS, THB, CLP, VND |
| target_sale_price | String | Yes | Non-App sale price in target currency |
| target_language | String | Yes | target language: EN,RU,PT,ES,FR,ID,IT,TH,JA,AR,VI,TR,DE,HE,KO,NL,PL,MX,CL,IN |
| tax_rate | String | Yes | Product tax rate |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| resp_result | 4 | Respond results |
| └ result | 4 | Details of response results |
| &nbsp;&nbsp;└ max_delivery_days | 1 | The maximum estimated number of days for delivery |
| &nbsp;&nbsp;└ ship_from_country | 1 | The country from which the product is shipped |
| &nbsp;&nbsp;└ shipping_fee | 1 | The shipping cost of the product delivery_days	String	The estimated number of days for delivery |
| &nbsp;&nbsp;└ min_delivery_days | 1 | The minimum estimated number of days for delivery |
| &nbsp;&nbsp;└ delivery_days | 1 | The estimated number of days for delivery |
| └ resp_msg | 1 | Status description of response result |
| └ resp_code | 2 | Respond status code |
