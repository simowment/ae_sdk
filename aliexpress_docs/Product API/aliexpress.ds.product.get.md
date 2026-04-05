# aliexpress.ds.product.get

## API

`GET/POST:``aliexpress.ds.product.get`

**Description：This API is used to retrieve product details, such as SKU information, product descriptions, pricing, and inventory stock levels.**

**The price calculation logic depends on the user’s account data. Authentication via a valid access token is mandatory to ensure price consistency.**

# Request Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| **Name** | **Type** | **Required or not** | **Description** |
| ship\_to\_country | String | Yes | Country |
|  |  |  |  |
| product\_id | Number | Yes | Item ID |  |  |  |  |
| target\_currency | String | No | Target currency |
| remove\_personal\_benefit | Boolean | No | If true, you will not get any crowd-type promotion |
| target\_language | String | No | hi\_IN(India)  de\_DE(Germany)  en\_US(UnitedStates)  zh\_CN(China)  es\_MX(Mexico)  ru\_RU(Russia)  pt\_PT(Portugal)  pt\_BR(Brazil)  ko\_KR(South Korea)  id\_ID(Indonesia)  en\_GB(United Kingdom)  it\_IT(Italy)  fr\_FR(France)  es\_ES(Spain)  iw\_IL(Israel)  ar\_SA(Saudi Arabia)  ar\_EG(Egypt)  vi\_VN(Vietnam)  th\_TH(Thailand)  uk\_UA(Ukraine)  ja\_JP(Japan)  pl\_PL(Poland)  he\_IL(Israel)  nl\_NL(Netherlands)  tr\_TR(Turkey) |

# 

Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| rsp\_msg | String | Result message |
| rsp\_code | Number | Result code |
| **◉****result** | **Object** | **Product search results** |
| **◎****ae\_item\_properties** | **List[Object]** | **Attribute information** |
| attr\_name\_id | Number | Attribute ID |
| attr\_value\_id | Number | Attribute ID |
| attr\_value\_unit | String | Attribute unit |
| attr\_name | String | Attribute name |
| attr\_value\_start | String | Interval attribute start value |
| attr\_value\_end | String | The end value of the interval attribute |
| attr\_value | String | Attribute value |
| **◎****ae\_item\_sku\_info\_dtos** | **List[Object]** | **SKU information** |
| sku\_available\_stock | Number | SKU inventory |
| sku\_bulk\_order | Number | Minimum number of batches |
| sku\_price | String | Origin SKU price. Value range: 0.01-100000; Unit: USD. Such as: 200.07, which means: 200 US dollars 7 points. Need to be in the correct price range. |
| offer\_sale\_price | String | SKU discount price |
| id | String | SKU attribute unique key(Duplicate with "sku\_attr")**[Will be offline on (28/02/25)]** |
| **○****ae\_sku\_property\_dtos** | **List[Object]** | **SKU attribute object** |
| sku\_property\_value | String | Attribute value |
| property\_value\_id | Number | Custom id |
| sku\_property\_name | String | The system will first display the "property\_value\_definition\_name". If this field is empty, the "sku\_property\_value" will be shown instead |
| sku\_property\_id | Number | Attribute ID |
| property\_value\_definition\_name | String | Custom name |
| sku\_image | String | SKU pictures |
| barcode | String | Commodity barcode |
| currency\_code | String | The currency unit of the product. U.S. Dollar: USD, Ruble: RUB |
| sku\_code | String | Ready to offline |
| sku\_id | String | SKU id (Can be used in aliexpress.ds.freight.query API.) |
| sku\_attr | String | SKU attribute unique key in new field name.(Can be used in aliexpress.ds.freight.query API.) |
| ean\_code | String | EAN Code(European Article Number) |
| price\_include\_tax | Boolean | If the price includes tax |
| **◎****wholesale\_price\_tiers** | **List[Object]** | **Display when the item has wholesale price** |
| min\_quantity | String | Threshold quantity for wholesale |
| discount | String | Discount rate |
| wholesale\_price | String | Whole price |
| tax\_currency\_code | String | Currency code of tax |
| buy\_amount\_limit\_set\_by\_promotion | String | Promotion buy limit |
| estimated\_import\_charges | String | Products from the People's Republic of China (which include products from Hong Kong) entering the U.S. for consumption will be subject to all applicable import charges (duties, taxes, fees, exactions, etc.) according to the currently effective regulatory requirements in the U.S. To ensure compliance with such requriements, these applicable import charges may be remitted to U.S. regulatory authorities on your behalf. |
| limit\_strategy | String | The limit strategy after you reach the promotion limit |
| **◎****ae\_multimedia\_info\_dto** | **List[Object]** | **Multimedia information** |
| **○****ae\_video\_dtos** | **List[Object]** | **Video information** |
| poster\_url | String | The URL of the video cover image |
| media\_status | String | Video status |
| ali\_member\_id | Number | Seller's master account ID |
| media\_type | String | Type of video |
| media\_id | Number | Video ID |
| media\_url | String | Media URL |
| image\_urls | String | List of main images of the product |
| **◎****package\_info\_dto** | **List[Object]** | **Package information** |
| base\_unit | Number | Number of basic products for custom weighing |
| package\_height | Number | Product height |
| gross\_weight | String | The gross weight of the product |
| package\_length | Number | The length of the product |
| package\_width | Number | Product width |
| product\_unit | Number | Unit of commodity |
| package\_type | Boolean | Type of packaging(Set by the seller, this is the package type.) |
| **◎****ae\_store\_info** | **List[Object]** | **Store Information** |
| item\_as\_described\_rating | String | Product Description, 1-5 stars |
| communication\_rating | String | Seller Service, 1-5 stars |
| shipping\_speed\_rating | String | Logistics, 1-5 stars |
| store\_name | String | Shop name |
| store\_id | Number | Store ID |
| store\_country\_code | String | Store country code, can be used as 'ship from' country of the sku |
| **◎****product\_id\_converter\_result** | **List[Object]** | **product id converter result** |
| main\_product\_id | Number | Main productId |
| sub\_product\_id | Object | Sub productId |
| has\_whole\_sale | Boolean | Has wholesale price |
| **◎****logistics\_info\_dto** | **List[Object]** | **Logistics information** |
| ship\_to\_country | String | Country |
| delivery\_time | Number | Goods lead time |
| **◎****ae\_item\_base\_info\_dto** | **List[Object]** | **Basic commodity information** |
| product\_status\_type | String | Product status |
| mobile\_detail | String | Mobile detailed description(Product details) |
| avg\_evaluation\_rating | String | Average rating stars, 1-5 stars |
| evaluation\_count | String | Evaluation number(Customer Reviews ) |
| detail | String | Commodity detailed description(Product details) |
| currency\_code | String | The currency unit of the commodity. U.S. Dollar: USD, Ruble: RUB |
| category\_id | Number | ID of the category of the product |
| sales\_count | String | Sales volume of product("1000+"/ "13") |
| category\_sequence | String | Category sequence |
| product\_id | Number | Item ID |
| subject | String | The title of the product |

### 

### Response in JSON

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"result": {

"ae\_item\_sku\_info\_dtos": [

{

"sku\_attr": "73:175#Black Green;71:193#Polarized",

"offer\_sale\_price": "3.94",

"sku\_id": "12000027158136202",

"wholesale\_price\_tiers": [

{

"min\_quantity": "1",

"wholesale\_price": "\"5.78\"",

"discount": "0.52"

}

],

"ean\_code": "eanCode",

"limit\_strategy": "create\_order\_fail",

"price\_include\_tax": "true",

"currency\_code": "USD",

"sku\_price": "3.94",

"buy\_amount\_limit\_set\_by\_promotion": "3",

"sku\_available\_stock": "57",

"id": "73:175#Black Green;71:193#Polarized",

"sku\_bulk\_order": "10",

"barcode": "320325455",

"sku\_code": "S96470",

"ae\_sku\_property\_dtos": [

{

"sku\_property\_value": "green",

"sku\_image": "https://ae04.alicdn.com/kf/Hba46f8222fdf4440a271134f8ce2ca2aB.jpg",

"sku\_property\_name": "Lenses Color",

"property\_value\_definition\_name": "Black Green",

"property\_value\_id": "175",

"sku\_property\_id": "73"

}

]

}

],

"ae\_multimedia\_info\_dto": {

"ae\_video\_dtos": [

{

"media\_status": "approved",

"media\_type": "MAIN\_IMAGE\_VIDEO",

"poster\_url": "https://img.alicdn.com/imgextra/i4/6000000004252/O1CN01R1TCD21hHSjEOLpKT\_!!6000000004252-0-tbvideo.jpg",

"ali\_member\_id": "227887939",

"media\_id": "296195919792",

"media\_url": "media url"

}

],

"image\_urls": "https://ae04.alicdn.com/kf/H551494696f2342edbeee5d2f288f4d1cv.jpg;https://ae04.alicdn.com/kf/H847c9c1b04614adfa20f042cc4490df6S.jpg;https://ae04.alicdn.com/kf/H1936d341e4bf4773ace153b527070a07C.jpg;https://ae04.alicdn.com/kf/Hf0cc14d4cc5741dc91b6dcf90bf5553cu.jpg;https://ae04.alicdn.com/kf/H80cb5bc712984795a850e9fc3a156d9fV.jpg;https://ae04.alicdn.com/kf/H71d81f9898af4d72b3bd18f7fffeb557j.jpg"

},

"package\_info\_dto": {

"package\_width": "8",

"package\_height": "6",

"package\_length": "18",

"gross\_weight": "0.050",

"package\_type": "false",

"product\_unit": "100000015",

"base\_unit": "2"

},

"product\_id\_converter\_result": {

"main\_product\_id": "32982857990",

"sub\_product\_id": {

"US": 2251832796543238

}

},

"logistics\_info\_dto": {

"delivery\_time": "5",

"ship\_to\_country": "CA"

},

"ae\_item\_base\_info\_dto": {

"gmt\_create": "0",

"mobile\_detail": "\u003cdiv\u003eThis is a product\u003c/div\u003e",

"category\_sequence": "(Beta Release) Only open to whitelist appkey",

"subject": "FUQIAN 2022 Fashion Square Polarized Sunglasses Men Vintage Plastic Male Sun Glasses Women Stylish Black Sport Shades UV400",

"evaluation\_count": "1004",

"ws\_display": "expire\_offline",

"sales\_count": "1000+",

"product\_status\_type": "onSelling",

"avg\_evaluation\_rating": "4.8",

"gmt\_modified": "0",

"currency\_code": "CNY",

"owner\_member\_seq\_long": "227887939",

"category\_id": "33902",

"product\_id": "4000903675543",

"detail": "\u003cdiv\u003eThis is a product\u003c/div\u003e",

"ws\_offline\_date": "0"

},

"has\_whole\_sale": "true",

"ae\_item\_properties": [

{

"attr\_name\_id": "2",

"attr\_value\_id": "110567917",

"attr\_value\_unit": "piece",

"attr\_name": "Brand Name",

"attr\_value\_start": "1",

"attr\_value\_end": "10",

"attr\_value": "FUQIAN"

}

],

"ae\_store\_info": {

"store\_id": "4874072",

"shipping\_speed\_rating": "4.7",

"communication\_rating": "4.7",

"store\_name": "FUQIAN Eyewear Store",

"store\_country\_code": "CN",

"item\_as\_described\_rating": "4.7"

}

},

"code": "0",

"rsp\_code": "200",

"rsp\_msg": "Call succeeds",

"request\_id": "0ba2887315178178017221014"

}

# 

# ERROR CODE

|  |  |  |
| --- | --- | --- |
| Error\_code | Error Message | explanation |
| 602 | Item is not allowed to this country | Not available for sale for legal reasons;(Not available for sale. Use aliexpress.ds.image.searchV2 or aliexpress.ds.text.search to find similar products.) |
| 605 | ITEM\_ID\_NOT\_FOUND | Product does not exist (Maybe the merchant has removed the product from the shelves) |
| 404 | System Error | System error. Please connect tech support. |

# 

# Common Issues

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/35656464/1740043916322-86334baf-42e6-4c80-8e78-6b1f4f3324ae.png)

## Q: Api access frequency exceeds the limit. this ban will last 1 seconds ?

**A:** The overall API QPS for this connection is 500. The overall current limiting error rate is 1-2%. It is recommended to sleep for 1-2 seconds and request again.

## Q: Which one should I use, "main\_product\_id" or "sub\_product\_id"?

**A:** According to privacy data compliance requirements, if your target is the US market, you need to use "sub\_product\_id".

## Q: Why the "sku\_attr" I got is empty ?

**A:** When there is only one sku under the product, this parameter may be empty.（For this case, please pass "" when placing an order）

## Q: The obtained sku price is inconsistent with the web price?

**A:** First, please confirm that the account you logged in to the web is consistent with the token account. If the price is still different, please check whether there is a page discount (according to AE's policy, page discounts cannot take effect in the API).

## Q: When a product has a tiered price, which one should I refer to?

Please refer to the return parameters below.

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

{

"wholesale\_price\_tiers": [

{

"min\_quantity": "1",

"wholesale\_price": "\"5.78\"",

"discount": "0.52"

}

]

}

# Demo code

## 

## Java demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

String url = "https://api-sg.aliexpress.com";

String appkey = "your\_appkey";

String appSecret = "your\_appSecret";

IopClient client = new IopClient(url, appkey, appSecret);

IopRequest request = new IopRequest();

request.setApiName("aliexpress.ds.product.get");

request.addApiParameter("ship\_to\_country", "US");

request.addApiParameter("product\_id", "1005003784285827");

request.addApiParameter("target\_currency", "USD");

request.addApiParameter("target\_language", "en");

request.addApiParameter("remove\_personal\_benefit", "false");

IopResponse response = client.execute(request, accessToken, Protocol.TOP);

System.out.println(response.getBody());

## 

## PHP demo

PlainBashC++C#CSSDiffHTML/XMLJavaJavascriptMarkdownPHPPythonRubySQL

<?php

$url = "https://api-sg.aliexpress.com/sync";

//The request address for system-level APIs (such as php) is different, and you need to use the URL below.

$appkey = "Your-appkey";

$appSecret = "Your-appSecret";

$accessToken = "Your-accessToken";

$c = new IopClient(url,appkey,appSecret);

$request = new IopRequest('aliexpress.ds.product.get');

$request->addApiParam('ship\_to\_country','US');

$request->addApiParam('product\_id','1005003784285827');

$request->addApiParam('target\_currency','USD');

$request->addApiParam('target\_language','en');

$request->addApiParam('remove\_personal\_benefit','false');

var\_dump($c->execute($request, $accessToken))

# 

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)
