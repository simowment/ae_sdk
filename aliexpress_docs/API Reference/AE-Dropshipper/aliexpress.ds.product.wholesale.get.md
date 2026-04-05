# product info for whole sale business

**Path:** `aliexpress.ds.product.wholesale.get`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | Yes | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| ship_to_country | String | Yes |  |
| product_id | Number | Yes |  |
| target_currency | String | No |  |
| target_language | String | No | hi de ru pt ko in en it fr zh es iw ar vi th uk ja id pl he nl tr (lowercase) or "en_US"、"ko_KR"... |
| remove_personal_benefit | Boolean | No | if true, you will not get any crowd type promotion |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 | Product search results |
| └ logistics_info_dto | 4 | Logistics information |
| &nbsp;&nbsp;└ ship_to_country | 1 | Goods lead time |
| &nbsp;&nbsp;└ delivery_time | 2 | Country |
| └ ae_item_base_info_dto | 4 | Basic commodity information |
| &nbsp;&nbsp;└ gmt_modified | 1 | Item Updated Time |
| &nbsp;&nbsp;└ product_id | 2 | Item ID |
| &nbsp;&nbsp;└ subject | 1 | The title of the product |
| &nbsp;&nbsp;└ product_status_type | 1 | Product status |
| &nbsp;&nbsp;└ gmt_create | 1 | Commodity creation time |
| &nbsp;&nbsp;└ mobile_detail | 1 | Mobile detailed description |
| &nbsp;&nbsp;└ avg_evaluation_rating | 1 | Average rating stars, 1-5 stars |
| &nbsp;&nbsp;└ ws_display | 1 | Reasons for removal of goods |
| &nbsp;&nbsp;└ evaluation_count | 1 | Evaluation number |
| &nbsp;&nbsp;└ ws_offline_date | 1 | The date the product was removed from the shelf |
| &nbsp;&nbsp;└ owner_member_seq_long | 2 | Seller's master account ID |
| &nbsp;&nbsp;└ detail | 1 | Commodity detailed description |
| &nbsp;&nbsp;└ currency_code | 1 | The currency unit of the commodity. U.S. Dollar: USD, Ruble: RUB |
| &nbsp;&nbsp;└ category_id | 2 | ID of the category of the product |
| &nbsp;&nbsp;└ sales_count | 1 | Sales volume of product |
| &nbsp;&nbsp;└ category_sequence | 1 | category sequence |
| └ ae_item_properties | 9 | Attribute information |
| &nbsp;&nbsp;└ attr_value_start | 1 | Interval attribute start value |
| &nbsp;&nbsp;└ attr_value_id | 2 | Attribute ID |
| &nbsp;&nbsp;└ attr_value_end | 1 | End value of interval attribute |
| &nbsp;&nbsp;└ attr_value | 1 | Attribute value |
| &nbsp;&nbsp;└ attr_value_unit | 1 | Attribute unit |
| &nbsp;&nbsp;└ attr_name | 1 | Attribute name |
| &nbsp;&nbsp;└ attr_name_id | 2 | Attribute ID |
| └ ae_item_sku_info_dtos | 9 | SKU information |
| &nbsp;&nbsp;└ ipm_sku_stock | 2 | The actual saleable inventory attribute of SKU is ipmSkuStock. The reasonable value range of this attribute value is 0~999999. If the product has SKU, please make sure that at least one SKU is in stock, that is, the value of ipmSkuStock is 1~999999. The range of the inventory value of the entire product latitude is 1~999999. If the skuStock attribute is set at the same time, the system will give priority to the ipmSkuStock attribute; if the ipmSkuStock attribute is not set, the system will set the inventory according to the skuStock attribute, true means 999, false means 0. |
| &nbsp;&nbsp;└ offer_bulk_sale_price | 1 | SKU bulk discount price |
| &nbsp;&nbsp;└ sku_available_stock | 2 | SKU inventory |
| &nbsp;&nbsp;└ sku_bulk_order | 2 | Minimum number of batches |
| &nbsp;&nbsp;└ sku_stock | 3 | SKU inventory, the data format is true if stock is available, false if no stock is available; at least one sku record is available. |
| &nbsp;&nbsp;└ sku_price | 1 | Origin SKU price. Value range: 0.01-100000; Unit: USD. Such as: 200.07, which means: 200 US dollars 7 points. Need to be in the correct price range. |
| &nbsp;&nbsp;└ offer_sale_price | 1 | SKU discount price |
| &nbsp;&nbsp;└ id | 1 | sku attribute  unique key |
| &nbsp;&nbsp;└ ae_sku_property_dtos | 9 | SKU attribute object |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sku_property_value | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ property_value_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sku_property_name | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sku_property_id | 2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ property_value_definition_name | 1 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;└ sku_image | 1 |  |
| &nbsp;&nbsp;└ barcode | 1 | Commodity barcode |
| &nbsp;&nbsp;└ currency_code | 1 | The currency unit of the product. U.S. Dollar: USD, Ruble: RUB |
| &nbsp;&nbsp;└ sku_code | 1 | SKU merchant code. Format: single-byte alphanumeric characters, length 20, excluding spaces greater than and less than signs. If the user only fills in the retail price (productprice) and product code, a complete SKU record needs to be generated and submitted, otherwise the product code cannot be saved. The system will think that only the retail price has been submitted, but there is no SKU, resulting in unsaved product editing. |
| &nbsp;&nbsp;└ sku_id | 1 | sku id, can be used for aliexpress.logistics.buyer.freight.calculate request |
| &nbsp;&nbsp;└ sku_attr | 1 | sku attribute  unique key in new field name |
| &nbsp;&nbsp;└ ean_code | 1 | eanCode |
| &nbsp;&nbsp;└ price_include_tax | 3 | if the price include tax |
| &nbsp;&nbsp;└ wholesale_price_tiers | 9 | display when the item has wholesale price |
| &nbsp;&nbsp;&nbsp;&nbsp;└ min_quantity | 1 | threshold quantity for wholesale |
| &nbsp;&nbsp;&nbsp;&nbsp;└ discount | 1 | discount rate |
| &nbsp;&nbsp;&nbsp;&nbsp;└ wholesale_price | 1 | whole price |
| &nbsp;&nbsp;└ buy_amount_limit_set_by_promotion | 1 | promotion buy limit |
| &nbsp;&nbsp;└ limit_strategy | 1 | the limit strategy after you reach promotion limit |
| └ ae_multimedia_info_dto | 4 | Multimedia information |
| &nbsp;&nbsp;└ ae_video_dtos | 9 | Video information |
| &nbsp;&nbsp;&nbsp;&nbsp;└ poster_url | 1 | The URL of the video cover image |
| &nbsp;&nbsp;&nbsp;&nbsp;└ media_status | 1 | Video status |
| &nbsp;&nbsp;&nbsp;&nbsp;└ ali_member_id | 2 | Seller's master account ID |
| &nbsp;&nbsp;&nbsp;&nbsp;└ media_type | 1 | Type of video |
| &nbsp;&nbsp;&nbsp;&nbsp;└ media_id | 2 | Video ID |
| &nbsp;&nbsp;&nbsp;&nbsp;└ media_url | 1 | media url |
| &nbsp;&nbsp;└ image_urls | 1 | List of main images of the product |
| └ package_info_dto | 4 | Package information |
| &nbsp;&nbsp;└ base_unit | 2 | Number of basic products for custom weighing |
| &nbsp;&nbsp;└ package_height | 2 | Product height |
| &nbsp;&nbsp;└ gross_weight | 1 | The gross weight of the product |
| &nbsp;&nbsp;└ package_length | 2 | The length of the product |
| &nbsp;&nbsp;└ package_width | 2 | Product width |
| &nbsp;&nbsp;└ product_unit | 2 | Unit of commodity |
| &nbsp;&nbsp;└ package_type | 3 | Type of packaging |
| └ ae_store_info | 4 | Store Information |
| &nbsp;&nbsp;└ item_as_described_rating | 1 | Product description, 1-5 stars |
| &nbsp;&nbsp;└ communication_rating | 1 | Seller service, 1-5 stars |
| &nbsp;&nbsp;└ shipping_speed_rating | 1 | Logistics, 1-5 stars |
| &nbsp;&nbsp;└ store_name | 1 | Shop name |
| &nbsp;&nbsp;└ store_id | 2 | Store ID |
| &nbsp;&nbsp;└ store_country_code | 1 | store country code, can be used as 'ship from' country of the sku |
| └ product_id_converter_result | 4 | product id converter result |
| &nbsp;&nbsp;└ main_product_id | 2 | main productId |
| &nbsp;&nbsp;└ sub_product_id | 4 | sub productId |
| └ has_whole_sale | 3 | has wholesale price |
| rsp_msg | 1 | result message |
| rsp_code | 2 | result code |

## Error Codes

| Error Code | Error Description | Solution |
|---|---|---|
| All SKU Unsaleable | All SKU Unsaleable | The item is not available for sale, please exchange it. |
| ITEM_ID_NOT_FOUND | ITEM_ID_NOT_FOUND | Product not found, please check product ID |
