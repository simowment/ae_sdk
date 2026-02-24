# Refresh token /auth/token/refresh

# Refresh/token

## JAVA Demo


```java
public class MainClass {

public static void main(String[] args) {

// Initialize the client with the API URL, app key, and app secretString url = "https://api-sg.aliexpress.com";

String appkey = "your_appkey";

String appSecret = "your_appSecret";

IopClient client = new IopClient(url, appkey, appSecret);

// Create a new request and set the API name and parameters

IopRequest request = new IopRequest();

request.setApiName("/auth/token/refresh");

request.addApiParameter("refresh_token", "Your-Refresh_Token");

// The "Your-refreshToken" refers to the private token that you should only obtain from the login service when exchanging the access token.

// Please make sure that you have obtained your own "Your-refreshToken" through the provided procedures to ensure the security and efficiency of your application.

try {

// Execute the request using the GOP protocol

IopResponse response = client.execute(request, Protocol.GOP);

// Print the response body

System.out.println(response.getBody());

} catch (Exception e) {

// Handle any exceptions that may occur during the request execution

e.printStackTrace();

}

}

}
```
## PHP Demo

**！ATTENTION！：**

For system-level APIs (such as PHP), the request URL is different and the following URL should be used.

`https://api-sg.aliexpress.com/rest`


```php
<?php

include "Your/SDK/";

$url = "https://api-sg.aliexpress.com/rest";

$appkey = "Your-APPKEY";

$appSecret = "Your-APPSECRET";

$c = new IopClient($url, $appkey, $appSecret);

$request = new IopRequest('/auth/token/refresh');

$request->addApiParam('refresh_token', 'Your-refreshToken');

//The "Your-refreshToken" refers to the private token that you should only obtain from the login service when exchanging the access token. Please make sure that you have obtained your own "Your-refreshToken" through the provided procedures to ensure the security and efficiency of your application.

var_dump($c->execute($request));

**Response**
```
```json
{
  "refresh_token_valid_time": 1716784148000,
  "havana_id": "3000020000814",
  "expire_time": 1714192160000,
  "locale": "zh_CN",
  "user_nick": "kr1000005815atrae",
  "access_token": null,
  "refresh_token": null,
  "user_id": "YourUserID",
  "account_platform": "buyerApp",
  "refresh_expires_in": 5183988,
  "expires_in": 2592000,
  "sp": "ae",
  "seller_id": "Your-sellerID",
  "account": "Your-account",
  "code": "0",
  "request_id": "212a69f317116001605067741"
}
```
## Returns the status of a Field object

|  |  |  |
| --- | --- | --- |
| Field Name | Description | Example Value |
| refresh\_token\_valid\_time | The valid timestamp of the refresh token, in milliseconds | "1716784148000" |
| havana\_id | The user's Havana ID, a unique numeric string identifying the user | "3000021188814" |
| expire\_time | The expiration timestamp of the access\_token, in milliseconds | "1714192160000" |
| locale | The user's locale settings. | "zh\_CN" |
| user\_nick | The user's nickname | "kr1000495815atr0e" |
| access\_token | The access token used for API call authentication |  |
| refresh\_token | The refresh token used to obtain a new access token after the current one expires |  |
| user\_id | The user's ID | "2637908814" |
| account\_platform | Indicates the user's account platform, the value here is "buyerApp" | "buyerApp" |
| refresh\_expires\_in | The remaining valid time of the refresh token (seconds) | "5183988" |
| expires\_in | The remaining valid time of the access token (seconds) | "2592000" |
| seller\_id | The seller's ID | "2637908814" |
| account | The user's account email ID |  |
| code | The status code of the API call, "0" usually indicates a successful call | "0" |
