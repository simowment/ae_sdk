# aliexpress.ds.text.search

## API

`GET/POST:``aliexpress.ds.text.search`

**Description：Search products by keyword.**

# Request Parameter

## Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |
| keyWord | String | Yes | Search keywords you need |
| local | String | Yes | Local (en\_US/zh\_CN...) |
| countryCode | String | Yes | Ship to country |
| categoryId | Number | No | CategoryId |
| sortBy | String | No | SortBy(min\_price/orders/comments,desc/asc) |
| pageSize | Number | No | Pagesize |
| pageIndex | Number | No | Page index |
| currency | String | Yes | Currency(USD / BRL...) |
| **◉****searchExtend** | **List[Object]** | **No** | **searchExtend** |
| searchKey | String | No | SearchKey |
| searchValue | String | No | SearchValue |
| max | String | No | Max |
| min | String | No | Min |
| selectionName | String | No | Text search within specific selection |

# Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| code | String | Code |
| msg | String | Message |
| **◉****data** | **Object** | **data** |
| totalCount | Number | Result total count |
| pageIndex | Number | Result page index |
| pageSize | Number | Result page size |
| **◎****products** | **List[Object]** | **products** |
| salePriceFormat | String | Formatted sale price |
| itemUrl | String | Product detail page URL |
| orders | String | Recent order amount |
| score | String | Average customer evaluation score(5 point scale) |
| title | String | Product title |
| itemMainPic | String | Product main picture |
| cateId | String | Category ID |
| originalPriceFormat | String | Formatted original price |
| originMinPrice | String | Origin min price |
| itemId | String | ItemID/Product\_ID |
| originalPrice | String | Original price |
| originalPriceCurrency | String | Original price currency |
| salePrice | String | Sale price |
| salePriceCurrency | String | Sale price currency |
| targetOriginalPrice | String | Original price using target disignated currency |
| targetOriginalPriceCurrency | String | Target disignated currency |
| targetSalePrice | String | Sale price using target disignated currency |
| discount | String | Discount rate |
| productVideoUrl | String | Product video URL |
| evaluateRate | String | Average customer evaluation score(100 point scale) |

# Response

## Successful response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_ds\_text\_search":{

"msg": "message",

"code": "0",

"data": {

"pageIndex": "pageIndex",

"pageSize": "pageSize",

"totalCount": "totalCount",

"products": [

{

"productVideoUrl": "productVideoUrl",

"originalPrice": "12.73",

"originalPriceCurrency": "USD",

"salePrice": "6.62",

"discount": "48%",

"itemMainPic": "itemMainPic",

"title": "title",

"originalPriceFormat": "originalPriceFormat",

"score": "score",

"itemId": "itemId",

"targetSalePrice": "6.62",

"cateId": "cateId",

"targetOriginalPriceCurrency": "USD",

"originMinPrice": "originMinPrice",

"evaluateRate": "97.8%",

"salePriceFormat": "salePriceFormat",

"orders": "orders",

"targetOriginalPrice": "12.73",

"itemUrl": "itemUrl",

"salePriceCurrency": "USD"

}

]

},

"request\_id": "0ba2887315178178017221014"

}

}

## Faild response

# Demo code

## Java demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

String url = "https://api-sg.aliexpress.com";

String appkey = "your\_appkey";

String appSecret = "your\_appSecret";

request.setApiName("aliexpress.ds.text.search");

request.addApiParameter("keyWord", "\u88D9\u5B50");

request.addApiParameter("local", "zh\_CN");

request.addApiParameter("countryCode", "US");

request.addApiParameter("categoryId", "349");

request.addApiParameter("sortBy", "min\_price,asc");

request.addApiParameter("pageSize", "20");

request.addApiParameter("pageIndex", "1");

request.addApiParameter("currency", "USD");

request.addApiParameter("searchExtend", "[{\"min\":\"min\",\"max\":\"max\",\"searchKey\":\"searchKey\",\"searchValue\":\"searchValue\"}]");

request.addApiParameter("selectionName", "selection name");

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

$request = new IopRequest('aliexpress.ds.text.search');

$request->addApiParam('keyWord','\u88D9\u5B50');

$request->addApiParam('local','zh\_CN');

$request->addApiParam('countryCode','US');

$request->addApiParam('categoryId','349');

$request->addApiParam('sortBy','min\_price,asc');

$request->addApiParam('pageSize','20');

$request->addApiParam('pageIndex','1');

$request->addApiParam('currency','USD');

$request->addApiParam('searchExtend','[{\"min\":\"min\",\"max\":\"max\",\"searchKey\":\"searchKey\",\"searchValue\":\"searchValue\"}]');

$request->addApiParam('selectionName','selection name');

var\_dump($c->execute($request, $accessToken));

# ERROR CODE

# Common errors

## Q:User Case Example

**A:** You can bring these two selection name in text search to search within your specific selected product collection.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/146656654/1735799363245-bb77247a-2328-4431-8d5d-452db29cbe14.png)

As shown above, you can for example search "eye lashes" within your target selection "Evernet\_B\_NG\_Selection".

What's more, you can use searchExtend param to add more search filter to better satisfying your particular search need. For example, you can bring searchExtend like follow, which means you want to search product whose seller is online within latest 48 hour.

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

[

{

"min": "",

"max": "",

"searchKey": "seller\_online",

"class": "com.aidc.supersupplier.model.SearchExtend",

"searchValue": "48"

}

]

**following is the search extend key we now support:**

|  |  |  |
| --- | --- | --- |
| Name | SearchKey | SearchValue |
| free shiping | free\_ship\_to | country code |
| choice product | item\_tag | choice |
| seller type | seller\_level | GOLD  SILVER |
| ship from | ship\_from | country code |
| seller online within the latest 72 hour | seller\_online | 48  72 |
| product hot area | hot\_area | BR  US  UK/GB  FR  AU |

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)
