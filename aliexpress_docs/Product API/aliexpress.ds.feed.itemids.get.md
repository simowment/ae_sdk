# aliexpress.ds.feed.itemids.get

## API

`GET/POST:``aliexpress.ds.feed.itemids.get`

**Description：fetch item id list by feedname.**

# Request Parameter

# 

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |
| page\_size | Number | No | Number of each page(customized page\_size should be in range between 0 and 200, or default page size 200 would overrides) |
| feed\_name | String | Yes | Query api ‘aliexpress.ds.feedname.get’ |
| search\_id | String | No | Page turning parameters, passed when page turning is required.(Use the search\_id returned last time and add it to the incoming parameters) |

# Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| **◉****result** | **Object** | **Result object** |
| products | Number[] | Item id list |
| search\_id | String | Search id, put it in the next request. Only valid in 1 minutes |
| total | Number | Total item id left |
| rsp\_msg | String | Result msg |
| rsp\_code | Number | Result code |
| ret | Boolean | True is success, false for fail |

# Response

## Successful response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_ds\_feed\_itemids\_get\_response": {

"result": {

"total": 4549,

"products": {

"number": [

1005007821712176,

1005007610894533

]

},

"search\_id": "eJw1j8FOxCAQhp8GLntZoJT2wKG6NjExamI8E0KHXZSWCjRxfXqnbkzITGbmn29+TLSlGrflkrJmTHYt70TTyb5pqCkuRwPfq6lhBs2U6JXqmWwFU9RDdRfjA8Sp6FBhNmGiPuXZVu23GD9KWujXBvmqXVp8OBNxuoRKxMA44fc3JVb/WuxlyHb5JHIs4QdwxI9Hwlt8fxjcX3OaUw0olmO9rruGcDU83GH9/obhKTkbMb9GW/cLLysiK0yP6K+g9DA8nw4OO+eEQDmG6YZgEgMtgE4ns5swO17j1zOUggd/AYU1Yk0="

},

"ret": true,

"rsp\_msg": "",

"request\_id": "21413a6d17397790949651163"

}

}

## Faild response

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_ds\_feed\_itemids\_get\_response": {

"result": {

"total": 0,

"products": {},

"search\_id": "eJw1j9FuwzAIRb/GeU6cNFUf/DBt6m+gyMErnWOnQLZ1X1/SqRIPcDn3IiBPohA3lsohEYtSKcgSueZMcwPWZcDfFZQWDN1xaMfBd2N/OvkmocYLJMI8SyDFBcyRKi+ThrTlfJVamtuGfA+xlkSfrv+4kLr+rfPOv/+TNr1Y0xh5Kl/ucBb6Q1v5tnV+tHrGmH/lulQlgw9nva874/xRf+h7EswYFefW+6EzsRG0szPsibCzwf5gFDH3A0sPV6U="

},

"ret": true,

"rsp\_msg": "",

"request\_id": "21413a6d17406421028141001"

}

}

# Demo code

## Java demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

String url = "https://api-sg.aliexpress.com";

String appkey = "your\_appkey";

String appSecret = "your\_appSecret";

request.setApiName("aliexpress.ds.feed.itemids.get");

request.addApiParameter("page\_size", "200");

request.addApiParameter("category\_id", "21");

request.addApiParameter("feed\_name", "DS bestseller");

request.addApiParameter("search\_id", "abc123");

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

$request = new IopRequest('aliexpress.ds.feed.itemids.get');

$request->addApiParam('page\_size','200');

$request->addApiParam('category\_id','21');

$request->addApiParam('feed\_name','DS bestseller');

$request->addApiParam('search\_id','abc123');

var\_dump($c->execute($request, $accessToken));

# ERROR CODE

# Common Issues

## How should I turn the page?

When you call the API for the first time, "search\_id" will be returned to you. You only need to re-pass in the "search\_id" you get the next time you call the API.

## How do I filter my items？

1. Ask our business team to help you select a basic pool of items.

2. Sync the whole item pool to your DB.

3. Get item detail for each product, in the product detail there is field to show the category detailed info.

4. Re-group the data in your DB by category info.

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)
