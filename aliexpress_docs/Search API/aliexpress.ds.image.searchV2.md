# aliexpress.ds.image.searchV2

## API

`GET/POST:``aliexpress.ds.image.searchV2`

**Description：The API for querying member benefit detail.**

# Request Parameter

|  |  |  |  |
| --- | --- | --- | --- |
| Name | Type | Required or not | Description |
| **◉****param0** | **Object** | **No** | **param0** |
| search\_type | String | No | image search type(same/similar) |
| image\_base64 | String | No | image encoded using base64 |
| currency | String | No | currency |
| lang | String | No | language |
| sort\_type | String | No | sort type(price/orders/best) |
| sort\_order | String | No | sort order(asc/desc) |
| ship\_to | String | No | ship to country |

# Response Struct

|  |  |  |
| --- | --- | --- |
| Name | Type | Description |
| **◉****result** | **Object** | **Result** |
| ret | Boolean | Ret |
| code | String | Code |
| **◎****data** | **List[Object]** | **Data** |
| first\_level\_category\_id | String | First level category id |
| product\_id | String | product\_id |
| target\_sale\_price\_currency | String | Sale price target currency |
| discount | String | Discount rate |
| second\_level\_category\_id | String | Second level category id |
| latest\_volume | String | Recent sale volume |
| product\_title | String | Product title |
| product\_detail\_url | String | Product detail page url |
| first\_level\_category\_title | String | First level category name |
| target\_sale\_price | String | Sale price amount using target currency |
| product\_main\_image\_url | String | Product main image URL |
| target\_original\_price\_currency | String | Original price target currency |
| evaluate\_rate | String | Evaluate rate |
| target\_original\_price | String | Target original price |
| shop\_id | Number | ShopID |
| second\_level\_category\_title | String | Second level category name |
| similarity\_score | String | Similarity score |
| ship\_from | String | Ship country code |
| messages | String | Message |
| empty | Boolean | Empty |

# Response

## Successful response


```json
{
  "aliexpress_ds_image_searchV2_response": {
    "result": {
      "ret": true,
      "next_start_row_key": "522ee3d0-7a55-424d-a3ab-a347039921fe",
      "data": {
        "products": [
          {
            "volume": "700+",
            "category": {
              "first_level": {
                "name": "Home & Garden",
                "id": "15"
              },
              "second_level": {
                "name": "Pet Products",
                "id": "100006664"
              }
            },
            "product_detail_url": "https://www.aliexpress.com/item/1005007857219128.html?skuId=12000042560576073&pdp_ext_f=%7B%22sku_id%22%3A%2212000042560576073%22%7D",
            "price": {
              "sale": {
                "value": "99",
                "currency": "USD"
              },
              "original": {
                "value": "795",
                "currency": "USD"
              }
            },
            "discount": "87",
            "image_url": "https://ae-pic-a1.aliexpress-media.com/kf/Sd012ee6a192442ccb2d324a6de1cc9d5p/Scratcher-Sisal-Hemp-Board-Wall-Pad-Furniture-Protective-Scratching-Post-For-Cat-Paw-Training.jpg_350x350xz.jpg",
            "evaluate_rate": "4.9",
            "title": "Scratcher Sisal Hemp Board Wall Pad Furniture Protective Scratching Post For Cat Paw Training",
            "shop_id": 1103576287,
            "product_id": "1005007857219128",
            "similarity_score": "0.967"
          },
          {
            "volume": "6",
            "category": {
              "first_level": {
                "name": "Home & Garden",
                "id": "15"
              },
              "second_level": {
                "name": "Pet Products",
                "id": "100006664"
              }
            },
            "product_detail_url": "https://www.aliexpress.com/item/1005007889439386.html?skuId=12000042734519538&pdp_ext_f=%7B%22sku_id%22%3A%2212000042734519538%22%7D",
            "price": {
              "sale": {
                "value": "111",
                "currency": "USD"
              },
              "original": {
                "value": "1148",
                "currency": "USD"
              }
            },
            "discount": "90",
            "image_url": "https://ae-pic-a1.aliexpress-media.com/kf/Sd012ee6a192442ccb2d324a6de1cc9d5p/Scratcher-Sisal-Hemp-Board-Wall-Pad-Furniture-Protective-Scratching-Post-For-Cat-Paw-Training.jpg_350x350xz.jpg",
            "evaluate_rate": "",
            "title": "Scratcher Sisal Hemp Board Wall Pad Furniture Protective Scratching Post For Cat Paw Training",
            "shop_id": 1103847117,
            "product_id": "1005007889439386",
            "similarity_score": "0.967"
          },
          {
            "volume": "1500+",
            "category": {
              "first_level": {
                "name": "Home & Garden",
                "id": "15"
              },
              "second_level": {
                "name": "Pet Products",
                "id": "100006664"
              }
            },
            "product_detail_url": "https://www.aliexpress.com/item/1005007386625802.html?skuId=12000040667060586&pdp_ext_f=%7B%22sku_id%22%3A%2212000040667060586%22%7D",
            "price": {
              "sale": {
                "value": "148",
                "currency": "USD"
              },
              "original": {
                "value": "1303",
                "currency": "USD"
              }
            },
            "discount": "88",
            "image_url": "https://ae-pic-a1.aliexpress-media.com/kf/S6ebadd4fa7464ffb86fbc13742ed053ez/Natural-Sisal-Cat-Scratcher-Mat-Cat-Scratch-Mats-Horizontal-Cat-Floor-Scratching-Pad-Rug-Protect-Couch.jpg_350x350xz.jpg",
            "evaluate_rate": "4.4",
            "title": "Natural Sisal Cat Scratcher Mat Cat Scratch Mats Horizontal Cat Floor Scratching Pad Rug Protect Couch and Carpets",
            "shop_id": 1102524801,
            "product_id": "1005007386625802",
            "similarity_score": "0.967"
          }
        ]
      },
      "total_count": 89,
      "pagination": {
        "has_next": true,
        "page_no": 1,
        "page_count": 9,
        "page_size": 10
      },
      "empty": false
    },
    "request_id": "2102e72c17333673131128897"
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

request.setApiName("aliexpress.ds.image.searchV2");

request.addApiParameter("param0", "{\"sort\_type\":\"price\",\"image\_base64\":\"imageBase64\",\"currency\":\"USD\",\"lang\":\"en\",\"sort\_order\":\"asc\",\"ship\_to\":\"US\"}");

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

$request = new IopRequest('aliexpress.ds.image.searchV2');

$request->addApiParam('param0','{\"sort_type\":\"price\",\"image_base64\":\"imageBase64\",\"currency\":\"USD\",\"lang\":\"en\",\"sort_order\":\"asc\",\"ship_to\":\"US\"}');

var_dump($c->execute($request, $accessToken));
```
# ERROR CODE

# Common errors

# [ChangeLog](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1669)
