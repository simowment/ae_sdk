# aliexpress.trade.ds.order.get

# API

`GET/POST：``aliexpress.trade.ds.order.get`

**Description: Used to query AliExpress orders under the corresponding account.**

# Request Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |
| **◉****single\_order\_query** | **Object[]** | **Yes** | **Order query conditions** |
| order\_id | Number | Yes | Your AliExpress order id.() |

# Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| **◉****result** | **Object** | **order information** |
| **◎****user\_order\_amount** | **List[Object]** | **Order amount in user's pay currency** |
| pay\_timeout\_second | String | Seconds for pay expiration, from order created |
| order\_paidtime\_string | String | Order paid time |
| gmt\_create | String | Order creation time |
| order\_status | String | Order status |
| logistics\_status | String | Logistics status |
| amount | String | Amount |
| currency\_code | String | Currency |
| **◎****order\_amount** | **List[Object]** | **Order amount** |
| amount | String | Amount |
| currency\_code | String | Currency code |
| **◎****child\_order\_list** | **List[Object]** | **Child order list** |
| **○****actual\_tax\_fee** | **List[Object]** | **TAX amount in user's pay currency** |
| amount | String | Amount |
| currency\_code | String | Currency |
| **○****actual\_shipping\_fee** | **List[Object]** | **Actual shipping fee = shippingfee - shippingdiscount** |
| amount | String | Fee amount |
| currency\_code | String | Currency |
| already\_include\_tax | String | Does the product fee already include tax |
| **○****shipping\_fee** | **List[Object]** | **Shipping fee** |
| amount | String | Amount |
| currency\_code | String | Currency |
| **○****sale\_discount\_fee** | **List[Object]** | **Sale discount** |
| amount | String | Amount |
| currency\_code | String | Currency |
| **○****sale\_fee** | **List[Object]** | **sale fee** |
| amount | String | Amount |
| currency\_code | String | Currency |
| **○****actual\_fee** | **List[Object]** | **Actual fee = sale fee - sale discount + actual shipping** |
| amount | String | Amount |
| currency\_code | String | Currency |
| **○****shipping\_discount\_fee** | **List[Object]** | **Shipping discount** |
| amount | String | Amount |
| currency\_code | String | Currency |
| end\_reason | String | Order's end reason CANCELED |
| sku\_id | String | SKU id |
| product\_id | Number | Product id |
| **○****product\_price** | **List[Object]** | **Product price** |
| amount | String | Amount |
| currency\_code | String | Currency code |
| product\_name | String | Product name |
| product\_count | Number | Number of products |
| **◎****logistics\_info\_list** | **List[Object]** | **Order logistics information list** |
| logistics\_no | String | Logistics tracking number**(****No more maintenance, expected to be offline.****You can query the order logistics track through [aliexpress.ds.order.tracking.get](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1660) API.****)** |
| logistics\_service | String | Logistics service name**(****No more maintenance, expected to be offline.****You can query the order logistics track through [aliexpress.ds.order.tracking.get](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1660) API.****)** |
| **◎****store\_info** | **List[Object]** | **store Information** |
| store\_id | Number | Store id |
| store\_name | String | Store name |
| store\_url | String | Store URL |

# 

# Response

## Successful response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_trade\_ds\_order\_get\_response": {

"result": {

"gmt\_create": "2024-09-09 21:00:03",

"order\_status": "FINISH",

"logistics\_info\_list": {

"aeop\_order\_logistics\_info": [

{

"logistics\_service": "CAINIAO\_FULFILLMENT\_STD",

"logistics\_no": "LP00675700340000"

}

]

},

"store\_info": {

"store\_id": 1103800006,

"store\_name": "Kedi Bottles Store"

},

"user\_order\_amount": {

"amount": "8.34",

"currency\_code": "USD"

},

"child\_order\_list": {

"aeop\_child\_order\_info": [

{

"product\_count": 1,

"sku\_id": "1200003702000037",

"product\_name": "500ML Insulated Water Bottle",

"shipping\_fee": {

"amount": "0.93",

"currency\_code": "USD"

},

"actual\_fee": {

"amount": "8.12",

"currency\_code": "USD"

}

}

]

},

"logistics\_status": "BUYER\_ACCEPT\_GOODS"

},

"request\_id": "2102e76417290680900002444"

}

}

## Faild response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"error\_response": {

"code": "15",

"type": "ISP",

"sub\_code": "isv.insufficient-permission",

"sub\_msg": "Insufficient permission.",

"msg": "Remote service error",

"request\_id": "210126da17406391015547789"

}

}

# 

# ERROR CODE

# Common Issues

## Q:Why did I query immediately after the order was created and the result was failed?

**A:**After the order is created, it needs to be synchronized to the server in the region, so it usually takes a few seconds. You can query it 10 seconds after creating the order.

# Status

## "order\_status" enumeration

|  |  |
| --- | --- |
| **Sstus** | **CODE** |
| Order placed successfully | PLACE\_ORDER\_SUCCESS |
| Payment processing | PAYMENT\_PROCESSING |
| Waiting for seller to confirm amount | WAIT\_SELLER\_EXAMINE\_MONEY |
| Risk control in progress | RISK\_CONTROL |
| Ongoing risk control | RISK\_CONTROL\_HOLD |
| Waiting for seller to ship | WAIT\_SELLER\_SEND\_GOODS |
| Partial shipment | SELLER\_PART\_SEND\_GOODS |
| Waiting for buyer to receive goods | WAIT\_BUYER\_ACCEPT\_GOODS |
| Order completed (confirm receipt/close order) | FINISH |
| Cancel order | IN\_CANCEL |
| Waiting for group formation | WAIT\_GROUP |
| Waiting to supplement shipping address | WAIT\_COMPLETE\_ADDRESS |

## "logistics\_status" enumeration

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

DEFAULT,

WAIT\_SELLER\_SEND\_GOODS,

SELLER\_SEND\_PART\_GOODS,

SELLER\_SEND\_GOODS,

BUYER\_ACCEPT\_GOODS,

NO\_LOGISTICS;

# Demo code

## Java Demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

String url = "https://api-sg.aliexpress.com";

String appkey = "your\_appkey";

String appSecret = "your\_appSecret";

IopClient client = new IopClient(url, appkey, appSecret);

IopRequest request = new IopRequest();

request.setApiName("aliexpress.trade.ds.order.get");

request.addApiParameter("single\_order\_query", "{\"order\_id\":\"10000001\"}");

IopResponse response = client.execute(request, accessToken, Protocol.TOP);

System.out.println(response.getBody());

## PHP Demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

<?php

$url = "https://api-sg.aliexpress.com/sync";

//The request address for system-level APIs (such as php) is different, and you need to use the URL below.

$appkey = "Your-appkey";

$appSecret = "Your-appSecret";

$accessToken = "Your-accessToken";

$c = new IopClient($url, $appkey, $appSecret);

$request = new IopRequest('aliexpress.trade.ds.order.get');

$request->addApiParam('single\_order\_query','{\"order\_id\":\"10000001\"}');

var\_dump($c->execute($request, $accessToken));

# 

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL
