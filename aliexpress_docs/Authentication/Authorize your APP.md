# Authorize your APP

# Let users authorize your APP

Let users authorize your APP. Your users can use their AE accounts to authorize your APP. After successful authorization, your APP will be able to access the user's data.

The authorization process is shown in the figure below:

## 

## **Step 1.Confirm authorization success callback address**

﻿

The callback URL is the address you use to receive the authorization code after the user successfully authorizes your application on the open platform. You can configure it in the following location:

Click APP Console-APP-Console on the homepage to configure: Callback\_URL, as shown in the figure below.

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/35656464/1710127100670-6a90f04d-8ff3-4e8c-9d97-22b927f2664e.png)

Please confirm that your address is available, otherwise you will not receive the authorization code

## **Step2.User authorization page**

#### **1.Link authorization URL**

Examples are as follows

**Note that "client\_id" and "redirect\_uri" should be replaced with the content of your own application.**


```json
//An example of a collage authorization URL is:

https://api-sg.aliexpress.com/oauth/authorize?response\_type=code&force\_auth=true&redirect\_uri=${callback-url}&client\_id=${appkey}

```
#### **2.Guide User to authorize**

Authorization Page Example

Guide the User to open the above authorized URL through a web browser. The following window with the login panel will appear. The left side lists the permissions that should be granted to the application after authorization. The User selects the country, enters the User's account number and password, and clicks the "Access Now（Login and Authorize）" button to complete the application for authorization.

Please follow the steps below to complete authorization:

1. Authorize to use the User account and password of our site.

2. Obtain the access token using the code returned by the callback URL.

Please see the screenshot below.

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/35656464/1712115022167-6fc8b1ab-ee3c-4302-8a3f-49b8528d5f28.png)

## **Step3.Get access\_token**

After authorization, the user will jump to the redirect\_uri (callback address) set by the developer and attach a temporary token code. The app then uses the code to exchange for access\_token from the open platform backend interface. This interface must be submitted using the POST method and uses the https protocol.

### JAVA implementation example


```java
public static void main(String[] args) {

// Appkey of the application.

String url = "https://api-sg.aliexpress.com";

String appkey = "your_appkey";

// AppSecret of the application.

String appSecret = "your_appSecret";

// Requested API interface name.

String action = "/auth/token/create";

// Create an IopClient object and pass in the API address, appkey and appSecret

IopClient client = new IopClientImpl(url, appkey, appSecret);

// Create an IopRequest object and pass in the API interface name and parameters

IopRequest request = new IopRequest();

request.setApiName(action);

request.addApiParameter("code", "your_code");

try {

// Perform API requests, using the GOP protocol

IopResponse response = client.execute(request, Protocol.GOP);

// Output the JSON string of the request response result

System.out.println(JSON.toJSON(response));

// Output the GOP format string of the request response result

System.out.println(response.getGopResponseBody());

} catch (Exception e) {

// Catch exception and print stack information

e.printStackTrace();

}

}
```
### PHP implementation example

**！ATTENTION！：**

**The request address for system-level APIs (such as php) is different, and you need to use the URL below.**

`https://api-sg.aliexpress.com/rest`


```php
<?php

// API request address

$url = "https://api-sg.aliexpress.com/rest";

// For system-level request addresses, you need to use the above URL

// appkey of the application

$appkey = "your_appkey";

// appSecret of the application

$appSecret = "your_appSecret";

// Requested API interface name

$action = "/auth/token/create";

// Create an IopClient object and pass in the API address, appkey and appSecret

$client = new IopClientImpl($url, $appkey, $appSecret);

// Create an IopRequest object and pass in the API interface name and parameters

$request = new IopRequest();

$request->setApiName($action);

$request->addApiParameter("code", "your_code");

try {

// Execute API request, using GOP protocol

$response = $client->execute($request, Protocol::GOP);

// Output the JSON string of the request response result

echo json_encode($response);

// Output the GOP format string of the request response result

echo $response->getGopResponseBody();

} catch (Exception $e) {

// Catch exception and print stack information

echo $e->getMessage();

}

**Request**
```
```json
{

"gopErrorCode": "0",

"gopRequestId": "2141244f17116066265020000",

"gopResponseBody": "{\"refresh_token_valid_time\":1711779426000,

\"havana_id\":\"300002118000\",

\"expire_time\":1711693026000,

\"locale\":\"zh_CN\",

\"user_nick\":\"kr10400008150000\",

\"access_token\":\"Your-accesstoken\",

\"refresh_token\":\"Your-refreshtoken\",

\"user_id\":\"Your-UserID\",

\"account_platform\":\"buyerApp\",

\"refresh_expires_in\":172800,

\"expires_in\":86400,

\"sp\":\"ae\",

\"seller_id\":\"Your-sellerID\",

\"account\":\"Your-accont\",

\"code\":\"0\",

\"request_id\":\"2141244f17116066265020000\"}",

"success": true

}
```
### 

### **Return field description**

|  |  |  |
| --- | --- | --- |
| Field Name | Description | Example Value |
| gopErrorCode | The error code of the API call, "0" usually means no error and the call is successful | "0" |
| gopRequestId | The unique identifier for the API request, used for tracking and debugging | "2141244f17116066265020000" |
| gopResponseBody | The main body content of the API response, usually a JSON string | "{"refresh\_token\_valid\_time":1711779426000, ...}" |
| success | Whether the API call is successful or not | TRUE |
| refresh\_token\_valid\_time | The valid timestamp of the refresh token, in milliseconds | "1711779426000" |
| havana\_id | The user's Havana ID, a unique numeric string identifying the user | "3000021188000" |
| expire\_time | The expiration timestamp of the access token, in milliseconds. It indicates when the accesstoken will expire. | "1711693026000" |
| locale | The language setting | "zh\_CN" |
| user\_nick | The user's nickname | "kr1040495815a0000" |
| access\_token | The access token used for API call authentication |  |
| refresh\_token | The refresh token used to obtain a new access token after the current one expires | token\_refresh |
| user\_id | The user's ID |  |
| account\_platform | The platform of the user's account | "buyerApp" |
| refresh\_expires\_in | The remaining valid time of the refresh token, in seconds | 172800 - app status is test |
| expires\_in | The remaining valid time of the access token, in seconds | 86400 - app status is test |

### 

OpenServer documentation address：

<https://openservice.aliexpress.com/doc/doc.htm#/?docId=1364>

### Overall process of token maintenance

This picture will show you an overview of all the token process, including user's grand, callback with code, create token and refresh token

## 

**Step4.token timeliness description**

### 

### ﻿How to check token aging settings

After the user authorizes it, the refresh\_token can be obtained and is valid for 30 days. The maximum validity period of refresh\_token is 60 days. If the refresh\_token obtained is valid and the access\_token has expired, you can use the refresh\_token in exchange for the access\_token without re-authorization. If the 60day validity period has expired, you need to reauthorize or access\_token. (This interface must be submitted using the HOST method and use the https protocol.

For specific timeliness, please refer to the figure below.

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/jpeg/35656464/1712455619250-d5185196-d502-4b8f-80f1-cd8caa00f90e.jpeg)

## **token refresh method**

Refresh access token using "/auth/token/refresh"

**Please obtain the refresh\_token you use from the access\_token above.**

The data structure returned by "/auth/token/refresh" is the same as that returned by obtaining the access token through the authorization code. You will get a new "access\_token" and "refresh\_token". You must save the latest "refresh\_token" to obtain a new "access\_token". Please note that the duration of the access token will be reset, but the duration of the refresh token will not be reset. After the refresh token expires, the User needs to reauthorize your application to generate a new access token and refresh token.

1. Users do not need to reauthorize before the token expires.
2. If "refresh\_expires\_in" = 0, the access token cannot be refreshed. Only when "refresh\_expires\_in" > 0, can the /auth/token/refresh interface be called to refresh the access token.
3. If you need to refresh the token, it is recommended to refresh it 30 minutes before the token expires.

The following is the demonstration code for Java refresh token


```java
public class MainClass {

public static void main(String[] args) {

// Initialize the client with the API URL, app key, and app secret

String url = "https://api-sg.aliexpress.com";

String appkey = "your_appkey";

String appSecret = "your_appSecret";

IopClient client = new IopClient(url, appkey, appSecret);

// Create a new request and set the API name and parameters

IopRequest request = new IopRequest();

request.setApiName("/auth/token/refresh");

request.addApiParameter("refresh_token", "Your-Refresh_token");

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

PHP
```
```php
<?php

$url = "https://api-sg.aliexpress.com/rest";

$appkey = "Your-APPKEY";

$appSecret = "Your-APPSECRET";

$c = new IopClient($url, $appkey, $appSecret);

$request = new IopRequest('/auth/token/refresh');

$request->addApiParam('refresh_token', 'Your-refreshtoken');//Please obtain Your-refreshtoken from the create/token response.

var_dump($c->execute($request));

**return value**
```
```json
{
  "refresh_token_valid_time": 1716784148000,
  "havana_id": "3000021188814",
  "expire_time": 1714192160000,
  "locale": "zh_CN",
  "user_nick": "kr10404958150000",
  "access_token": "",
  "refresh_token": " ",
  "user_id": "2637908814",
  "account_platform": "buyerApp",
  "refresh_expires_in": 5183988,
  "expires_in": 2592000,
  "sp": "ae",
  "seller_id": "2637908814",
  "account": "ae_test_u0000@163.com",
  "code": "0",
  "request_id": "212a69f317116001605067741"
}
```
### 

### Return field explanation

|  |  |  |
| --- | --- | --- |
| Field Name | Description | Example Value |
| refresh\_token\_valid\_time | The valid timestamp of the refresh token, in milliseconds | "1716784148000" |
| havana\_id | The user's Havana ID, a unique numeric string identifying the user | "3000021180000" |
| expire\_time | The expiration timestamp of the access token, in milliseconds | "1714192160000" |
| locale | The user's language setting | "zh\_CN" |
| user\_nick | The user's nickname | "kr1040495815a0000" |
| access\_token | The access token used for API call authentication |  |
| refresh\_token | The refresh token used to obtain a new access token after the current one expires | refresh-token |
| user\_id | The user's ID | "2637908800" |
| account\_platform | Indicates the user's account platform, here the value is "buyerApp" | "buyerApp" |
| refresh\_expires\_in | The remaining valid time of the refresh token, in seconds | 5183988 |
| expires\_in | The remaining valid time of the access token, in seconds | 2592000 |
| seller\_id | The seller's ID | "2637900000" |
| account | The user's account email ID |  |
| code | The status code of the API call, "0" usually indicates a successful call | "0" |
| request\_id | The unique identifier for the API request, used for tracking and debugging | "212a69f317116001605060000" |

# About App launch

If your app is in testing status, the access\_token is only valid for 1 day, and the refresh\_token is valid for 2 days. After the application is launched, the validity period of access\_token will be extended to 30 days, and the validity period of refresh\_token will be extended to 60 days.

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/35656464/1712115840232-62ef2c38-b99f-4fc5-8442-83458f3c9e4f.png)

#
