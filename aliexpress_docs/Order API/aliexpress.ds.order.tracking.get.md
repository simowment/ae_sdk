# aliexpress.ds.order.tracking.get

## API

`GET/POST:``aliexpress.ds.order.tracking.get`

**Description：Get DropShip Order Tracking info.**

# Request Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |
| ae\_order\_id | String | Yes | Order ID which you get from aliexpress.ds.order.create |
| language | String | Yes | Language |

# Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| **◉****result** | **Object** | **result** |
| ret | Boolean | true for success |
| code | String | error code |
| **◎****data** | **Object** | **tracking list dto** |
| **○****tracking\_detail\_line\_list** | **Object[]** | **tracking list** |
| mail\_no | String | mail number |
| **◎****detail\_node\_list** | **Object[]** | **tracking node** |
| tracking\_name | String | tracking node description |
| time\_stamp | Number | timestamp |
| tracking\_detail\_desc | String | tracking node description |
| carrier\_name | String | carrier name |
| eta\_time\_stamps | Number | timestamp |
| **◎****package\_item\_list** | **Object[]** | **package item** |
| item\_id | Number | item id |
| quantity | Number | count |
| item\_title | String | item title |
| sku\_desc | String | sku desc |
| msg | String | error message |

# Response

## Successful response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_ds\_order\_tracking\_get\_response": {

"result": {

"ret": true,

"msg": "",

"code": "",

"data": {

"tracking\_detail\_line\_list": {

"tracking\_detail": [

{

"detail\_node\_list": {

"detail\_node": [

{

"time\_stamp": 1739928180000,

"tracking\_detail\_desc": "Your package arrived at local Facility.",

"tracking\_name": "Delivery update"

}

]

},

"package\_item\_list": {

"package\_item": [

{

"sku\_desc": "Color:Silvery; Size:M",

"quantity": 1,

"item\_id": 1005008453688391,

"item\_title": "Elegant Flounce Mini Skirts Suits Women..."

}

]

},

"carrier\_name": "AliExpress standard shipping",

"mail\_no": "4209795192144903600008220012159992",

"eta\_time\_stamps": 1740273780000

}

]

}

}

},

"request\_id": "21411e5617409909645296164"

}

}

## Faild response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_ds\_order\_tracking\_get\_response": {

"result": {

"ret": false,

"msg": "TRACKING DATA NOT FOUND",

"code": "1001"

},

"request\_id": "2101243217409925448971244"

}

}

# Demo code

## Java demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

String url = "https://api-sg.aliexpress.com";

String appkey = "your\_appkey";

String appSecret = "your\_appSecret";

request.setApiName("aliexpress.ds.order.tracking.get");

request.addApiParameter("ae\_order\_id", "12345");

request.addApiParameter("language", "en\_US");

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

$request = new IopRequest('aliexpress.ds.order.tracking.get');

$request->addApiParam('ae\_order\_id','12345');

$request->addApiParam('language','en\_US');

var\_dump($c->execute($request, $accessToken));

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)
