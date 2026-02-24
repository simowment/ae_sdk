# aliexpress.ds.address.get

## API

`GET/POST:``aliexpress.ds.address.get`

**Description：Get restrict names which are same to names in web page form.**

# Request Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |
| language | String | No | Language |
| countryCode | String | Yes | CountryCode |
| isMultiLanguage | String | No | Support multi language |

# Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| **◉****result** | **Object** | **result** |
| ret | Boolean | is response successful |
| code | String | error code |
| **◎****data** | **List[Object]** | **address data** |
| country | String | country code |
| type | String | address type |
| children | String | json format children address data |
| msg | String | error message |

# Response

## Successful response


```json
{
  "aliexpress_ds_address_get_response": {
    "result": {
      "ret": "true",
      "msg": "error message",
      "code": "code",
      "data": {
        "country": "US",
        "children": "childrenStr",
        "type": "country"
      }
    },
    "code": "0",
    "request_id": "0ba2887315178178017221014"
  }
}
```
## Faild response

# Demo code

## Java demo


```java
String url = "https://api-sg.aliexpress.com";

String appkey = "your\_appkey";

String appSecret = "your\_appSecret";

request.setApiName("aliexpress.ds.address.get");

request.addApiParameter("language", "JA");

request.addApiParameter("countryCode", "JP");

request.addApiParameter("isMultiLanguage", "true");

IopResponse response = client.execute(request, accessToken, Protocol.TOP);

System.out.println(response.getBody());

```
## PHP demo


```php
<?php

$url = "https://api-sg.aliexpress.com/sync";

//The request address for system-level APIs (such as php) is different, and you need to use the URL below.

$appkey = "Your-appkey";

$appSecret = "Your-appSecret";

$accessToken = "Your-accessToken";

$c = new IopClient(url,appkey,appSecret);

$request = new IopRequest('aliexpress.ds.address.get');

$request->addApiParam('language','JA');

$request->addApiParam('countryCode','JP');

$request->addApiParam('isMultiLanguage','true');

var_dump($c->execute($request, $accessToken));
```
# ERROR CODE

# Common errors

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)

##
