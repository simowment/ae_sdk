# How to use Webhook

**STEP1. webhook setting**

Go to the appKey manage page, and switch to the notification tab.

﻿﻿﻿﻿﻿﻿﻿﻿![](https://ae-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_截屏2024-08-27 17.32.53_1724751251356__xfR1.png)

In the notification setting page, you should input your callBack url and check the DROPSHIPPER\_ORDER\_STATUS\_UPDATE box to subscribe this topic.

﻿﻿﻿![](https://ae-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_截屏2024-09-26 16.33.17_1727339703860__tqxm.png)

**STEP2. testing**

Once above setting steps done, you can test the webhook process by creating an order, pushing the order to go through whole live status, and reviewing if your callback api can receive all the related message.

**Return message body**

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"data": {

"buyerId": 1861703697,

"orderId": 1105933950463697,

"orderStatus": "paymentFailedEvent"

},

"message\_type": 53,

"seller\_id": "1234",

"site": "ae\_global",

"timestamp": 1719389200

}

**"orderStatus" enumerate**

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

"paymentFailedEvent"

"OrderCreated"

"OrderClosed"

"PaymentAuthorized"

"OrderShipped"

"OrderConfirmed"

**Please note! The above "message\_type" is "53". If there are any updates in the future, the return value of "message\_type" may be different.**

You can switch to the API Push Log tab, and select the topic you have subscribed, filter by the time range and check if you can receive webhook message as you expect. 

![](https://ae-open-platform-public.oss-ap-southeast-1.aliyuncs.com/online/oss_截屏2024-09-30 17.07.49_1727687405562__7Wqb.png)
