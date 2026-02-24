# aliexpress.ds.freight.query

## API

`GET/POST:``aliexpress.ds.freight.query`

**Description: Enter the destination, product, SKU, and currency information, and return available delivery options and delivery fees for each shipping option.**

# Request Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |
| ◉queryDeliveryReq | Object | Yes | Delivery query request |
| quantity | Number | Yes | Quantity for your request |
| shipToCountry | String | Yes | Country that ships to |
| productId | String | Yes | Product\_id(From aliexpres.product.get) |
| provinceCode | String | No | Provice |
| cityCode | String | No | City |
| language | String | Yes | Language |
| locale | String | Yes | Locale |
| selectedSkuId | String | Yes | Selected sku(From aliexpres.product.get) |
| currency | String | Yes | Currency for calculate the freight fee |

# Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| ◉result | Object | Result |
| msg | String | Error msg |
| **◎****delivery\_options** | **List[Object]** | **List of deliveryOptions** |
| shipping\_fee\_format | String | Format String shipping fee to make it understandable |
| delivery\_date\_desc | String | Format delivery date estimation |
| code | String | Delivery service code, which is used for place order |
| free\_shipping | Boolean | True means free, false means not free |
| max\_delivery\_days | Number | Estimated delivery days, max days |
| estimated\_delivery\_time | String | Delivery estimation |
| min\_delivery\_days | Number | Estimated delivery days, main days |
| shipping\_fee\_currency | String | Shipping fee currency |
| ship\_from\_country | String | Where your sku will ship from |
| company | String | Shipping service company name which you can use to display |
| shipping\_fee\_cent | String | Shipping fee amount in cent |
| tracking | Boolean | Is this shipping option can be tracking |
| mayHavePFS | Boolean | If it can be platFormFreeShipping |
| available\_stock | String | Available stock for sku |
| guaranteed\_delivery\_days | String | It is a guaranteed days |
| ddpIncludeVATTax | String | If price include ddp vat tax |
| free\_shipping\_threshold | String | Dree shipping threshold |
| code | Number | Status of this request: 200 means success |
| success | Boolean | True means it is success |

# Response

## Successful response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_ds\_freight\_query\_response": {

"result": {

"msg": "Call succeeds",

"code": 200,

"success": true,

"delivery\_options": {

"delivery\_option\_d\_t\_o": [

{

"code": "CAINIAO\_STANDARD",

"shipping\_fee\_currency": "USD",

"free\_shipping": false,

"mayHavePFS": false,

"guaranteed\_delivery\_days": "75",

"max\_delivery\_days": 34,

"tracking": true,

"shipping\_fee\_format": "US $172.71",

"delivery\_date\_desc": "Mar 08 - 25",

"company": "AliExpress standard shipping",

"ship\_from\_country": "CN",

"min\_delivery\_days": 17,

"available\_stock": "182",

"ddpIncludeVATTax": "true",

"shipping\_fee\_cent": "172.71"

}

]

}

},

"request\_id": "2140d58917400193503907772"

}

}

## Faild response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_ds\_freight\_query\_response": {

"result": {

"msg": "DELIVERY\_NOT\_AVAILABLE\_TO\_YOUR\_ADDRESS",

"code": 505,

"success": false

},

"request\_id": "2101243217409851599735016"

}

}

# Demo code

## Java demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

String url = "https://api-sg.aliexpress.com";

String appkey = "your\_appkey";

String appSecret = "your\_appSecret";

IopClient client = new IopClient(url, appkey, appSecret);

IopRequest request = new IopRequest();

request.setApiName("aliexpress.ds.freight.query");

request.addApiParameter("queryDeliveryReq", "{\"quantity\":\"1\",\"shipToCountry\":\"US\",\"productId\":\"3256802900954148\",\"provinceCode\":\"California\",\"cityCode\":\"Mill Valley\",\"selectedSkuId\":\"12000023999200390\",\"language\":\"en\_US\",\"currency\":\"USD\",\"locale\":\"zh\_CN\"}");

IopResponse response = client.execute(request, accessToken, Protocol.TOP);

System.out.println(response.getBody());

## PHP demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

<?php

$url = "https://api-sg.aliexpress.com/sync";

//The request address for system-level APIs (such as php) is different, and you need to use the URL below.

$appkey = "Your-appkey";

$appSecret = "Your-appSecret";

$accessToken = "Your-accessToken";

$c = new IopClient(url,appkey,appSecret);

$request = new IopRequest('aliexpress.ds.freight.query');

$request->addApiParam('queryDeliveryReq','{\"quantity\":\"1\",\"shipToCountry\":\"US\",\"productId\":\"3256802900954148\",\"provinceCode\":\"California\",\"cityCode\":\"Mill Valley\",\"selectedSkuId\":\"12000023999200390\",\"language\":\"en\_US\",\"currency\":\"USD\",\"locale\":\"zh\_CN\"}');

var\_dump($c->execute($request, $accessToken));

# ERROR CODE

# Common errors

## **Q:**How to determine whether the product is free shipping

**A:**If 'free\_shipping' is 'true', shipping is free. If 'free\_shipping' is 'false', check 'mayHavePFS'. If 'mayHavePFS' is 'true' and 'free\_shipping\_threshold' is 0, shipping is free. If 'mayHavePFS' is 'true' and 'free\_shipping\_threshold' is not 0, shipping is free when the order total meets or exceeds 'free\_shipping\_threshold'. Otherwise, shipping is not free.

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)
