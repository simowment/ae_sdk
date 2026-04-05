# AE DS Order Create and Pay API

**Path:** `aliexpress.ds.order.create`

## Request Parameters

| Name | Type | Required | Description |
|---|---|---|---|
| app_key | String | Yes | Unique app ID issued by AE Open Platform console when you apply for an app category (Common) |
| timestamp | String | Yes | The time stamp of the request e.g. 2022-04-28 10:46:37 (TOP Protocol) or 1651113997000 (GOP Protocol), with less than 7200s difference from UTC time (Common) |
| access_token | String | Yes | API interface call credentials (Common) |
| sign_method | String | Yes | The HMAC hash algorithm you are using to calculate your signature (Common) |
| sign | String | Yes | Part of the authentication process that is used for identifying and verifying who is sending a request (click <a target='_blank' href='https://developers.aliexpress.com/doc.htm?docId=107468&docType=1'>here</a> for details) (Common) |
| ds_extend_request | Object | No | DS ExtendParam |
| └ promotion | Object | No | promotionCode |
| &nbsp;&nbsp;└ promotion_channel_info | String | No | promotionChannelInfo |
| &nbsp;&nbsp;└ promotion_activity_id | String | No | promotion id from coupon query API's field "dsCouponId" |
| └ payment | Object | No | {"payment":{"pay_currency":"xxx"}} |
| &nbsp;&nbsp;└ pay_currency | String | No | USD |
| &nbsp;&nbsp;└ try_to_pay | String | No | Please auth your account as DS Before set it true |
| └ trade_extra_param | Object | No | whether it is wholesale |
| &nbsp;&nbsp;└ business_model | String | No | "wholesale" for wholesale model, "retail" for retail model, default for retail model |
| &nbsp;&nbsp;└ customize_sku_map | Object | No | key is sku_id, value is customize_id |
| &nbsp;&nbsp;└ nat_addr | String | No | SA natAddr |
| └ channel_strategy | String | No | channel_strategy |
| param_place_order_request4_open_api_d_t_o | Object | Yes | specific order parameters |
| └ out_order_id | String | No | outer order id, used for idempotent checkout |
| └ logistics_address | Object | Yes | logistic address information |
| &nbsp;&nbsp;└ address | String | Yes | address information |
| &nbsp;&nbsp;└ address2 | String | No | address extension information |
| &nbsp;&nbsp;└ city | String | Yes | city |
| &nbsp;&nbsp;└ contact_person | String | No | contact person |
| &nbsp;&nbsp;└ country | String | Yes | receiver country |
| &nbsp;&nbsp;└ cpf | String | No | taxpayer identification number |
| &nbsp;&nbsp;└ full_name | String | No | receiver full name |
| &nbsp;&nbsp;└ locale | String | No | internationalization locale |
| &nbsp;&nbsp;└ mobile_no | String | No | mobile phone number |
| &nbsp;&nbsp;└ passport_no | String | No | passport number |
| &nbsp;&nbsp;└ passport_no_date | String | No | passport expiry date |
| &nbsp;&nbsp;└ passport_organization | String | No | passport issuing agency |
| &nbsp;&nbsp;└ phone_country | String | No | country code of the phone |
| &nbsp;&nbsp;└ province | String | Yes | province |
| &nbsp;&nbsp;└ tax_number | String | No | tax number |
| &nbsp;&nbsp;└ zip | String | No | zip code |
| &nbsp;&nbsp;└ rut_no | String | No | Chile tax number (not used) |
| &nbsp;&nbsp;└ foreigner_passport_no | String | No | foreign tax number (registration card number or passport number is required for Korean foreigners) |
| &nbsp;&nbsp;└ is_foreigner | String | No | whether it is a foreigner |
| &nbsp;&nbsp;└ vat_no | String | No | vat tax number |
| &nbsp;&nbsp;└ tax_company | String | No | company name |
| &nbsp;&nbsp;└ location_tree_address_id | String | No | location tree address id |
| └ product_items | Object[] | Yes | product attributes |
| &nbsp;&nbsp;└ product_count | Number | Yes | product count |
| &nbsp;&nbsp;└ product_id | Number | Yes | product id |
| &nbsp;&nbsp;└ sku_attr | String | No | product sku |
| &nbsp;&nbsp;└ logistics_service_name | String | No | logistics service name |
| &nbsp;&nbsp;└ order_memo | String | No | user Comments |

## Response Parameters

| Name | Type | Description |
|---|---|---|
| result | 4 | result |
| └ error_code | 1 | errorCode |
| └ error_msg | 1 | errorMsg |
| └ order_list | 7 | orderList |
| └ is_success | 3 | success |

## Error Codes

| Error Code | Error Description | Solution |
|---|---|---|
| B_DROPSHIPPER_DELIVERY_ADDRESS_VALIDATE_FAIL | B_DROPSHIPPER_DELIVERY_ADDRESS_VALIDATE_FAIL | The address is wrong, please check the address |
| B_DROPSHIPPER_DELIVERY_ADDRESS_CPF_CN_INVALID | B_DROPSHIPPER_DELIVERY_ADDRESS_CPF_CN_INVALID | CPF error, please check CPF |
| B_DROPSHIPPER_DELIVERY_ADDRESS_CPF_NOT_MATCH | B_DROPSHIPPER_DELIVERY_ADDRESS_CPF_NOT_MATCH | CPF error, please check CPF |
| BLACKLIST_BUYER_IN_LIST | BLACKLIST_BUYER_IN_LIST | The user ID status is abnormal. Please try to change the user to place the order. |
| USER_ACCOUNT_DISABLED | USER_ACCOUNT_DISABLED | The user ID status is abnormal. Please try to change the user to place the order. |
| PRICE_PAY_CURRENCY_ERROR | PRICE_PAY_CURRENCY_ERROR | Products should declare as same currency. |
| DELIVERY_METHOD_NOT_EXIST | DELIVERY_METHOD_NOT_EXIST | Please fill valid delivery method (You can use se aliexpress.freight.query check it) |
| INVENTORY_HOLD_ERROR | INVENTORY_HOLD_ERROR | Inventory is insufficient or system error occured. |
| REPEATED_ORDER_ERROR | REPEATED_ORDER_ERROR | Duplicate order, please try again |
| ERROR_WHEN_BUILD_FOR_PLACE_ORDER | ERROR_WHEN_BUILD_FOR_PLACE_ORDER | Order cannot be placed,Need to contact technical support |
| A001_ORDER_CANNOT_BE_PLACED | A001_ORDER_CANNOT_BE_PLACED | Order cannot be placed,Need to contact technical support |
| A002_INVALID_ZONE | A002_INVALID_ZONE | Order cannot be placed,Need to contact technical support |
| A003_SUSPICIOUS_BUYER | A003_SUSPICIOUS_BUYER | Order cannot be placed,Need to contact technical support |
| A004_CANNOT_USER_COUPON | A004_CANNOT_USER_COUPON | Order cannot be placed,Need to contact technical support |
| A005_INVALID_COUNTRIES | A005_INVALID_COUNTRIES | Order cannot be placed,Need to contact technical support |
| A006_INVALID_ACCOUNT_INFO | A006_INVALID_ACCOUNT_INFO | Order cannot be placed,Need to contact technical support |
