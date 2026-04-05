# Create token /auth/token/create

# Create token

After the user authorizes, they will be redirected to the redirect\_uri (callback URL) set by the developer in Step 1, along with the temporary token code. The app then uses the code to exchange for an access\_token from the open platform backend interface. This interface must be submitted using the POST method and the https protocol.

## JAVA Demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

public class MainClass {

public static void main(String[] args) {

String url = "https://api-sg.aliexpress.com";

String appkey = "your\_appkey";

String appSecret = "your\_appSecret";

String action = "/auth/token/create";

IopClient client = new IopClientImpl(url, appkey, appSecret);

IopRequest request = new IopRequest();

request.setApiName(action);

request.addApiParameter("code", "your\_code");

try {

IopResponse response = client.execute(request, Protocol.GOP);

System.out.println(JSON.toJSON(response));

System.out.println(response.getGopResponseBody());

} catch (Exception e) {

e.printStackTrace();

}

}

}

## PHP Demo

**！ATTENTION！：**

For system-level API requests (such as those in PHP), a different URL is required, which should be used as follows.

`https://api-sg.aliexpress.com/rest`

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

<?php

$url = "https://api-sg.aliexpress.com/rest";

// For system-level request addresses, you need to use the above URL

$appkey = "your\_appkey";

$appSecret = "your\_appSecret";

$action = "/auth/token/create";

$client = new IopClientImpl($url, $appkey, $appSecret);

$request = new IopRequest();

$request->setApiName($action);

$request->addApiParameter("code", "your\_code");

try {

$response = $client->execute($request, Protocol::GOP);

echo json\_encode($response);

echo $response->getGopResponseBody();

} catch (Exception $e) {

echo $e->getMessage();

## Request

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"refresh\_token\_valid\_time": "1500",

"havana\_id": "10000",

"code": "0",

"expire\_time": "1500",

"locale": "zh\_CN",

"user\_nick": "cn1001",

"access\_token": "50000601c30atpedfgu3LVvik87Ixlsvle3mSoB7701ceb156fPunYZ43GBg",

"refresh\_token": "500016000300bwa2WteaQyfwBMnPxurcA0mXGhQdTt18356663CfcDTYpWoi",

"account\_id": "7063844",

"user\_id": "10101",

"account\_platform": "seller\_center",

"refresh\_expires\_in": "60",

"expires\_in": "10",

"sp": "global",

"request\_id": "0ba2887315178178017221014",

"seller\_id": "1001",

"account": "xxx@126.com"

}

## The captured return field explanation

|  |  |  |
| --- | --- | --- |
| gopErrorCode | Error code for the API call, "0" usually indicates no error, call successful | "0" |
| gopRequestId | Unique identifier for the API request, used for tracking and debugging | "2141244f17116066265025345" |
| gopResponseBody | Body content of the API response | "{"refresh\_token\_valid\_time":1711779426000, ...}" |
| success | Whether the API call was successful | TRUE |
| refresh\_token\_valid\_time | Timestamp for the validity of the refresh token, in milliseconds | "1711779426000" |
| havana\_id | User's Havana ID | "3000021188814" |
| expire\_time | Expiry timestamp for the access token, in milliseconds. Used to prompt the user about the expiration time of the accessToken. | "1711693026000" |
| locale | Language | "zh\_CN" |
| user\_nick | User's nickname | "kr1040495815atrae" |
| access\_token | Access token, used for authentication in API calls |  |
| refresh\_token | Refresh token, used to obtain a new access token after the current one expires |  |
| user\_id | User's ID |  |
| account\_platform |  | "buyerApp" |
| refresh\_expires\_in | Remaining validity time for the refresh token (seconds) | 172800 - app status is test |
| expires\_in | Remaining validity time for the access token (seconds) | 86400 - app status is test |
