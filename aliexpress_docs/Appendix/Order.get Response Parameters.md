# Order.get Response Parameters

# order\_status

|  |  |
| --- | --- |
| status | code |
| Order placed successfully | PLACE\_ORDER\_SUCCESS |
| Payment processing | PAYMENT\_PROCESSING |
| Waiting for seller to confirm amount | WAIT\_SELLER\_EXAMINE\_MONEY |
| Risk control in progress | RISK\_CONTROL |
| Ongoing risk control | RISK\_CONTROL\_HOLD |
| Waiting for seller to ship | WAIT\_SELLER\_SEND\_GOODS |
| Partial shipment | SELLER\_PART\_SEND\_GOODS |
| Waiting for buyer to receive goods | WAIT\_BUYER\_ACCEPT\_GOODS |
| Order completed (confirm receipt/close order) | FINISH |
| Cancel order | IN\_CANCEL |
| Waiting for group formation | WAIT\_GROUP |
| Waiting to supplement shipping address | WAIT\_COMPLETE\_ADDRESS |

# logistics\_status

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

DEFAULT,

WAIT\_SELLER\_SEND\_GOODS,

SELLER\_SEND\_PART\_GOODS,

SELLER\_SEND\_GOODS,

BUYER\_ACCEPT\_GOODS,

NO\_LOGISTICS;
