# aliexpress.ds.order.create

# API

`GET/POST：``aliexpress.ds.order.create`

**Description:** **Used to create AliExpress orders (support automatic payment)**

# Request Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |
| **◉****ds\_extend\_request** | **Object** | **No** | **DS ExtendParam** |
| ◎**promotion** | **List[Object]** | No | PromotionCode |
| promotion\_code | String | No | PromotionCode |
| promotion\_channel\_info | String | Yes | PromotionChannelInfo |
| **◎****payment** | **List[Object]** | **No** | **payment** |
| pay\_currency | String | No | Used to pass in the specified currency.{"pay\_currency":"XXX"} |
| try\_to\_pay | String | No | Please auth your account as DS Before set it true (true or false) |
| **◎****trade\_extra\_param** | **List[Object]** | **No** | **Whether it is wholesale** |
| business\_model | String | No | Chose to place the order in wholesale or retail model |
| **◉****param\_place\_order\_request4\_open\_api\_d\_t\_o** | **Object** | **Yes** | **Specific order parameters** |
| out\_order\_id | String | No | This field is recommended to be marked as a required field; it is used to input the order number from your system. The system uses `out\_order\_id` as an idempotent ID to prevent duplicate orders. The validity period of this idempotent ID is 24 hours. |
| **◎****logistics\_address** | **List[Object]** | **Yes** | **Logistic address information** |
| address | String | Yes | Address information |
| address2 | String | No | Address extension information |
| city | String | Yes | City |
| contact\_person | String | No | Contact person（The CPF validation for Brazil requires this parameter to be passed in as a name check.） |
| country | String | Yes | Receiver country (It should be a two-letter code) |
| cpf | String | No | Taxpayer identification number (If the country is BR, then this parameter needs to be passed.） |
| full\_name | String | No | Receiver full name |
| locale | String | No | Internationalization locale |
| mobile\_no | String | No | Mobile phone number |
| passport\_no | String | No | Passport number(MX needs to fill in) |
| passport\_no\_date | String | No | passport expiry date |
| passport\_organization | String | No | Passport issuing agency |
| phone\_country | String | No | Country code of the phone |
| province | String | Yes | Province |
| tax\_number | String | No | TAX number |
| zip | String | No | ZIP code |
| rut\_no | String | No | Chile tax number (not used) |
| foreigner\_passport\_no | String | No | Foreign tax number (registration card number or passport number is required for Korean foreigners) |
| is\_foreigner | String | No | Whether it is a foreigner |
| vat\_no | String | No | VAT tax number |
| tax\_company | String | No | Company name |
| location\_tree\_address\_id | String | No | Location tree address id |
| **◎****product\_items** | **List[Object]** | **Yes** | **product attributes** |
| product\_count | Number | Yes | Product count |
| product\_id | Number | Yes | Product id |
| sku\_attr | String | No | Product sku(From aliexpress.ds.product.get;If only one sku exists, it will be "") |
| logistics\_service\_name | String | No | Logistics service name(From aliexpress.ds.freight.query) |
| order\_memo | String | No | User Comments |

**If you want create AutoPayment order, Please refer to the autopay document** **[HERE](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193495.0.0.67546ec6KWK4un&nodeId=27493&docId=118729#/?docId=1640)****.**

# Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| **◉**result | Object | result |
| error\_code | String | errorCode |
| error\_msg | String | errorMsg |
| order\_list | Number[] | orderList |
| is\_success | Boolean | success |

# Response

## Successful Response


```json
{
  "aliexpress_ds_order_create_response": {
    "result": {
      "is_success": true,
      "order_list": {
        "number": [
          8198352049851315
        ]
      }
    },
    "request_id": "212a790f17395203524904964"
  }
}
```
## Failed Response


```json
{
  "aliexpress_ds_order_create_response": {
    "result": {
      "error_msg": "Please enter a city",
      "error_code": "B_DROPSHIPPER_DELIVERY_ADDRESS_VALIDATE_FAIL",
      "is_success": false
    },
    "request_id": "2140eeb817405385212422871"
  }
}
```
# ERROR CODE

|  |  |  |
| --- | --- | --- |
| Error code | Error message | Explanation |
| B\_DROPSHIPPER\_DELIVERY\_ADDRESS\_VALIDATE\_FAIL  **([Resolve document](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1775))** | address does not match the rules | Modify buyer address. |
| Please enter a City | The address does not meet the requirements.Please check your City |
| Please enter the country code and phone number without any spaces or special characters | The address does not meet the requirements.Please check your country\_code & phone number. |
| Please select a State/Province/County | The address does not meet the requirements.Check your State & Province & Country. |
| Please enter between 2 - 32 characters | Check"contact\_person" |
| B\_DROPSHIPPER\_DELIVERY\_ADDRESS\_CPF\_CN\_INVALID |  | CPF invalid or wrong;"contact\_person" does not match CPF. |
| B\_DROPSHIPPER\_DELIVERY\_ADDRESS\_CPF\_NOT\_MATCH |
| BLACKLIST\_BUYER\_IN\_LIST | Blacklist buyers | This user is temporarily unable to place an order. |
| USER\_ACCOUNT\_DISABLED | Buyer account has been disabled | Contact customer service for further information. |
| PRICE\_PAY\_CURRENCY\_ERROR | Products in the place order request should not be declared in different currencies | Products should declare as same currency. |
| DELIVERY\_METHOD\_NOT\_EXIST | Delivery method is not exist | Please fill valid delivery method (You can use se aliexpress.freight.query check it) |
| INVENTORY\_HOLD\_ERROR | Hold inventory error | Maybe inventory is insufficient or system error occured. |
| REPEATED\_ORDER\_ERROR | Repeated placed order | Please check buyer order list, request already been handled successfully. |
| ERROR\_WHEN\_BUILD\_FOR\_PLACE\_ORDER | System error. | System error,Please connect tech support. |
| A001\_ORDER\_CANNOT\_BE\_PLACED | A001\_ORDER\_CANNOT\_BE\_PLACED | A001\_ORDER\_CANNOT\_BE\_PLACED |
| A002\_INVALID\_ZONE | A002\_INVALID\_ZONE | A002\_INVALID\_ZONE |
| A003\_SUSPICIOUS\_BUYER | A003\_SUSPICIOUS\_BUYER | A003\_SUSPICIOUS\_BUYER |
| A004\_CANNOT\_USER\_COUPON | A004\_CANNOT\_USER\_COUPON | A004\_CANNOT\_USER\_COUPON |
| A005\_INVALID\_COUNTRIES | A005\_INVALID\_COUNTRIES | A005\_INVALID\_COUNTRIES |
| A006\_INVALID\_ACCOUNT\_INFO | A006\_INVALID\_ACCOUNT\_INFO | A006\_INVALID\_ACCOUNT\_INFO |

# Common Issues

## Q: How to place an order for multiple products at once.

**A:** You can refer the JSON.


```json
{
  "logistics_address": {
    "address": "Enter_your_address",
    "city": "Vineland",
    "contact_person": "Malik Jack",
    "country": "US",
    "mobile_no": "23450000",
    "phone_country": "+",
    "phone_number": "5593600000",
    "province": "New Jersey",
    "zip": "08360"
  },
  "product_items": [
    {
      "product_id": 1005004638293060,
      "product_count": 1,
      "sku_attr": "14:365458#Brown",
      "logistics_service_name": "",
      "order_memo": " "
    },
    {
      "product_id": 1005004638293060,
      "product_count": 1,
      "sku_attr": "14:365458#Brown",
      "logistics_service_name": "",
      "order_memo": " "
    }
  ]
}
```
## Q: "B\_DROPSHIPPER\_DELIVERY\_ADDRESS\_VALIDATE\_FAIL"

**A:**You can use the address filling form on the AliExpress order page to verify whether your address is correct. If you can confirm, it means your address is available and can be used as an input parameter. [Link](https://www.aliexpress.com/p/trade/confirm.html?objectId=1005006454451334&from=aliexpress&countryCode=US&shippingCompany=CAINIAO_STANDARD&provinceCode=922865760000000000&cityCode=922865765760000000&aeOrderFrom=main_detail&skuAttr=200000795%3A193%23no%20switch%3B249%3A200006305%234w%28max100w%29&skuId=12000037255569170&skucustomAttr=&quantity=1&spm=a2g0o.detail.0.0&curPageLogUid=1738898297502_0sA2qR&pdpBuyParams=%7B%22pdpBusinessMode%22%3A%22wholesale%22%7D&addressId=4100198298419&gatewayAdapt=4itemAdapt)

1. Select your country
2. ![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/35656464/1738910811122-fd26300f-5a28-42ff-a476-f33d92c5a380.png)
3. Enter your address or zipcode.![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/35656464/1738911055809-fe3405bf-7fee-4101-881b-c86bb7c81143.png)
4. Compare the correct address of the page automatically loaded![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/35656464/1738911224329-4339b396-63da-4745-88bb-f7645e0dd94e.png)
5. Finish your parameter


```json
"country": "US",

"zip": "08360",

"province": "New Jersey",

"city": "Vineland",

**Develop**

You can also use browser tools to capture elements on the page to ensure the accuracy of the province & city results you input. Please refer to the image below.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/35656464/1739241129201-08d8d9db-500d-4526-9d4e-b467dc2a4b50.png)

```
## Q: "DELIVERY\_METHOD\_NOT\_EXIST"

**A:**Use [aliexpress.ds.freight.query](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1597) to check whether the logistics can be delivered.

If the following error occurs, the product cannot be delivered.


```json
{
  "aliexpress_ds_freight_query_response": {
    "result": {
      "msg": "DELIVERY_NOT_AVAILABLE_TO_YOUR_ADDRESS",
      "code": 505,
      "success": false
    },
    "request_id": "21015f2417397598951022443"
  }
}
```
## Q: The created Order was cancelled. How can I know the reason for the failure?

**A:**Due to relevant requirements, we cannot disclose the failure reason to you. You can use the webhook function to track the order status to determine the failure step.

## Q: How to cancel an already created order?

**A:**You need to log in to the AliExpress website with the account corresponding to the order token you created, click View Order Page and cancel.

## Q: US create order fail Err\_Msg:Please enter between 2 - 32 characters.

**A:**US address validation rules.

"contact\_person" will be automatically intercepted by the system according to the spaces. There must be 2-32 characters before and after the spaces.

# Demo code

## Java Demo


```java
String url = "https://api-sg.aliexpress.com";

String appkey = "your_appkey";

String appSecret = "your_appSecret";

IopClient client = new IopClient(url, appkey, appSecret);

IopRequest request = new IopRequest();

request.setApiName("aliexpress.ds.order.create");

request.addApiParameter('ds_extend_request','{"payment":{"pay_currency":"USD"},"promotion":{"promotion_code":""}}');

request.addApiParameter(

'param_place_order_request4_open_api_d_t_o','

{

"out_order_id": "",

"logistics_address": {

"address": "WWEPerformance Center,",

"address2": "STE 100",

"birthday": "",

"city": "Orlando",

"contact_person": "person name",

"country": "US",

"cpf": "",

"fax_area": "",

"fax_country": "",

"fax_number": "",

"full_name": "full_name",

"locale": "local",

"mobile_no": "11231231231",

"passport_no": "",

"passport_no_date": "",

"passport_organization": "",

"phone_area": "",

"phone_country": "+",

"phone_number": "11231231231",

"province": "Florida",

"tax_number": "",

"zip": "32807",

"rut_no": "",

"foreigner_passport_no": "",

"is_foreigner": false,

"vat_no": "",

"tax_company": "",

"location_tree_address_id": ""

},

"product_items": [

{

"product_id": 1005002704149141,

"product_count": 1,

"sku_attr": "14:175;5:200003528#Length -26cm",

"logistics_service_name": "CAINIAO_FULFILLMENT_STD"

}

]

}

);

IopResponse response = client.execute(request, accessToken, Protocol.TOP);

System.out.println(response.getBody());
```
## PHP Demo


```php
<?php

$url = "https://api-sg.aliexpress.com/sync";

//The request address for system-level APIs (such as php) is different, and you need to use the URL below.

$appkey = "Your-appkey";

$appSecret = "Your-appSecret";

$accessToken = "Your-accessToken";

$c = new IopClient($url, $appkey, $appSecret);

$request = new IopRequest('aliexpress.ds.order.create');

$request->addApiParam('ds_extend_request','{"payment":{"pay_currency":"USD"},"promotion":{"promotion_code":""}}');

$request->addApiParam(

'param_place_order_request4_open_api_d_t_o','

{

"out_order_id": "",

"logistics_address": {

"address": "WWEPerformance Center,",

"address2": "STE 100",

"birthday": "",

"city": "Orlando",

"contact_person": "person name",

"country": "US",

"cpf": "",

"fax_area": "",

"fax_country": "",

"fax_number": "",

"full_name": "full_name",

"locale": "local",

"mobile_no": "11231231231",

"passport_no": "",

"passport_no_date": "",

"passport_organization": "",

"phone_area": "",

"phone_country": "+",

"phone_number": "11231231231",

"province": "Florida",

"tax_number": "",

"zip": "32807",

"rut_no": "",

"foreigner_passport_no": "",

"is_foreigner": false,

"vat_no": "",

"tax_company": "",

"location_tree_address_id": ""

},

"product_items": [

{

"product_id": 1005002704149141,

"product_count": 1,

"sku_attr": "14:175;5:200003528#Length -26cm",

"logistics_service_name": "CAINIAO_FULFILLMENT_STD"

}

]

}

);

var_dump($c->execute($request, $accessToken));
```
# 

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)
