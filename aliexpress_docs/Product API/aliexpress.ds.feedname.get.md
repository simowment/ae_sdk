# aliexpress.ds.feedname.get

## API

`GET/POST:``aliexpress.ds.feedname.get`

**Description：Fetch feedname for DS business. Feedname refers to a list of itemId.**

**Please ensure that the feedname you entered is correct. You can obtain the feedname by using the aliexpress.ds.recommend.feed.get API.**

# Request Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |
| app\_signature | String | No | API signature |

# Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| ◉resp\_result | Object | Respond results |
| resp\_code | Number | Status code of Response results |
| resp\_msg | String | Status description of response result |
| **◎****result** | **List[Object]** | **Details of response results** |
| current\_record\_count | Number | Current record count of return |
| **○****promos** | **List[Object]** | **Returned list of featured promotion** |
| promo\_desc | String | Product number of featured promotion |
| promo\_name | String | The description of featured promotion |
| product\_num | Number | The name of featured promotion |

# Response

## Successful response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_ds\_feedname\_get\_response": {

"resp\_result": {

"result": {

"current\_record\_count": 176,

"promos": {

"promo": [

{

"promo\_name": "AEB\_ ComputerAccessories\_EG",

"promo\_desc": "AEB\_ ComputerAccessories\_EG",

"product\_num": 35018

},

{

"promo\_name": "toys\_ZA topsellers\_ 20240423",

"promo\_desc": "toys\_ZA topsellers\_ 20240423",

"product\_num": 50955

}

]

}

},

"resp\_code": 200,

"resp\_msg": "Call succeeds"

},

"request\_id": "2141154c17397829835025878"

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

request.setApiName("aliexpress.ds.feedname.get");

request.addApiParameter("app\_signature", "your\_feedname");

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

$request = new IopRequest('aliexpress.ds.feedname.get');

$request->addApiParam('app\_signature','your\_feedname');

var\_dump($c->execute($request, $accessToken));

# ERROR CODE

# Common Issues

## Q:The feedname searched does not meet my requirements. What should I do?

**A:**You can contact the business team to customize the feedname product collection that meets your needs.

## Q:Unable to find results using categoryid

**A:**What we get in aliexpress.ds.product.get is the subcategory id. Through this interface, we can only find the subcategory name corresponding to the subcategory.

## Q:Why can't I get any results using the feedname given to me by the business team?

**A:**The feedname takes longer to take effect. You can check again later to see if the feedname is effective.

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL
