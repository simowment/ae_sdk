# How to use API Pay

# Active you PayPal account to AE

## whitelist your appKey

If you need to enable the automatic payment function, please provide the following information and send it to the DS business team. We will review and enable the automatic payment whitelist for you.

**ds-api@aliexpress.com**

account:

1. Your Key Markets
2. Your AliExpress BuyerAccount used for API payment；
3. Your PayPal Account used for API payment（bind to AliExpress）；
4. Your User ID (AliExpress)
5. Your Login ID (AliExpress)

**After you have activated the automatic payment whitelist, please visit here to activate it. [[Link]]( https://inbusiness.aliexpress.com/app/super-buyer/want-shop/autoPay)**

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/321763/1719491644250-046335a6-9f6c-44da-8f09-5f6a2c4d0458.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1500%2Climit_0)

Click on "Apply"

# Agreement

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/321763/1719491667918-81e1117c-3edd-4e86-be84-f5f086435e5a.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1500%2Climit_0)

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/321763/1719491683108-eca1333f-fecd-4bab-ba21-18d84f11fe4f.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1500%2Climit_0)

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/321763/1719491692828-7bfb2f37-b76d-46df-b365-a5b3ac07c79e.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1500%2Climit_0)

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/321763/1719491700782-ef0416be-86c9-4286-91d2-d3059554b818.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1500%2Climit_0)

After you active it, the status will be displayed as:

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/321763/1719491729020-ac3104ba-3e6b-4db3-bde7-9b624126e854.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1500%2Climit_0)

# Supported Currency

"USD"

## Supported Countries

|  |  |
| --- | --- |
| Country | CountryName |
| NO | Norway |
| DE | Germany |
| BE | Belgium |
| PT | Portugal |
| JP | Japan |
| DK | Denmark |
| LT | Lithuania |
| LU | Luxembourg |
| LV | Latvia |
| FR | France |
| NZ | New Zealand |
| HU | Hungary |
| BR | Brazil |
| SE | Sweden |
| UK | United Kingdom |
| IE | Ireland |
| CA | Canada |
| US | United States of America |
| EE | Estonia |
| IL | Israel |
| AE | United Arab Emirates |
| CH | Switzerland |
| IS | Iceland |
| IT | Italy |
| MX | Mexico |
| ES | Spain |
| AT | Austria |
| AU | Australia |
| NL | Netherlands |
| GB | United Kingdom of Great Britain and Northern Ireland |

# 

# Place Order and Pay in DS API

API document:

<https://openservice.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.order.create&methodType=GET/POST>

Set ds\_extend\_request as:

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{ "payment": { "pay\_currency": "USD", "try\_to\_pay": true } }

1. if try\_to\_pay == false, we will not try to pay your orders.
2. please leave pay\_currency as USD, in the future, we will try to support all currency that can be used in PayPal

# Error

There are 2 steps in our API, step 1 to create order for you, step 2 pay those orders that newly created.

If create order fail, you will get original faild info

if order create successfully, but pay faild. You will get status: success, orderId list, but error msg that tell you payment faild reasons.

Example of order created but payment fail:

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"aliexpress\_ds \_order\_create \_response": {

"result": {

"error\_msg": "OrderCreated, autoPay fail:APIPayFail",

"is\_ success": true,

"order\_list": {

"number": [8190439416163295]

}

}

}

}
