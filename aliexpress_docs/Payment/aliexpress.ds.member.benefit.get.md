# aliexpress.ds.member.benefit.get

## API

`GET/POST:``aliexpress.ds.member.benegit.get`

**Description：The API for querying member benefit detail.**

# Request Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |

# Response Struct

|  |  |  |
| --- | --- | --- |
| **Name** | **Type** | **Description** |
| rsp\_msg | String | Rsp\_msg |
| rsp\_code | String | Rsp\_code |
| **◉****result** | **Object[]** | **Result** |
| code | String | Benefit code |
| title | String | Benefit title |
| canApply | String | Flag if can apply the benefit |
| canBenefit | String | Flag if already own the benefit |

# Response

## Successful response


```json
{
  "aliexpress_ds_member_benefit_get": {
    "result": [
      {
        "canApply": "true",
        "code": "auto-pay",
        "title": "auto-pay",
        "canBenefit": "true"
      }
    ],
    "code": "0",
    "rsp_code": "rsp_code",
    "rsp_msg": "rsp_msg",
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

request.setApiName("aliexpress.ds.member.benefit.get");

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

$request = new IopRequest('aliexpress.ds.member.benefit.get');

var_dump($c->execute($request, $accessToken));
```
# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)
