# Changelog For DropShip API

November 26，2025

**﻿****【New Field Validation Rules for Saudi Arabia】**

This update is scheduled for release on December 4, 2025. Please make the necessary changes promptly. When the shipping country of an order is Saudi Arabia, the "nat\_addr" field must be added.

**APIs Affected: [aliexpress.ds.order.create] and [aliexpress.trade.buy.placeorder]**

[aliexpress.ds.order.create]

Path: ds\_extend\_request > trade\_extra\_param > nat\_addr

[aliexpress.trade.buy.placeorder]

Path: param\_place\_order\_request4\_open\_api\_d\_t\_o.ds\_extend\_request > trade\_extra\_param > nat\_addr

Validation Rules:

• New Field: [nat\_addr]

ꔷ Validation: 8 characters, 4 uppercase letters + 4 digits

ꔷ Characters 1–4: A–Z (province/city/district + random letters). Any lowercase input will be converted to uppercase.

ꔷ Characters 5–8: 0000–9999 (building number)

Example of [nat\_addr]: RAHA3443

## 

## Aug 27, 2025

**【Updated Field Validation Rules for Israel/Argentina -September 4th】**

**<Key Details>**

**APIs Affected: [aliexpress.ds.order.create] and [aliexpress.trade.buy.placeorder]**

Validation Rule for the following Key Fields :

**1.Validation Rules for Israel**

• Field:

[is\_foreigner]: For local customers, input "false" to [is\_foreigner]

[passport\_no]: Submit the tax ID number

[foreigner\_passport\_no]: Submit the tax ID number

ꔷ Validation: Israeli ID Number (9 digits)

**2.Validation Rules for Argentina**

• Field:

[is\_foreigner]: For local customers, input "false" to [is\_foreigner]

[passport\_no]: Submit the tax ID number

[foreigner\_passport\_no]: Submit the tax ID number

ꔷ Validation: Requires 11 numeric digits with hyphens "-". Format example: 20-12345678-6

## 

## Aug 5th 2025

**【Updated Field Validation Rules for US/MX/Algeria/South Africa/Argentina - Effective August 7th】**

APIs Affected: [aliexpress.ds.order.create] and [aliexpress.trade.buy.placeorder]

Validation Rule for the following Key Fields :

1.Validation Rules for US

• Field: [province]

ꔷ Validation: For the [province] field, please do not enter "Other".

2.Validation Rules for MX

• Field: [address2]

ꔷ Validation: Optional. Up to 60 characters allowed.

3.Validation Rules for Algeria/South Africa

• Field: [full\_name]

ꔷ Validation: The [full\_name] must include a space between the first name and last name.

4.Validation Rules for Argentina

• Field: [mobile\_no]

ꔷ Validation: Numeric only. 10-digit character validation.

## 

## Apr 27th 2025

Dear Partners,

AliExpress has updated the Estimated Import Charges. You can retrieve the latest estimates via the AliExpress Dropshipping API > **[aliexpress.ds.product.get]** starting from April 27, 2025, at 20:00 (GMT+8:00).

Below are the key rules:

ꔷ If the **[Estimated import charges]** field is empty, the product price from **[aliexpress.ds.product.get]** already includes the Estimated Import Charges.

ꔷ If the [**Estimated import charges]**field shows a specific amount, the product price from **[aliexpress.ds.product.get]** does not include Import Charges.

Important Notes:

ꔷ The Dropshipping API does not calculate Estimated Sales Tax, which you will need to estimate independently.

ꔷ The final Import Charges will be based on the actual charges displayed at the time of order placement.

**Please ensure you retrieve and review the updated data to provide accurate pricing to your customers.**

## Apr 10th 2025

**【Notification of Updated Order Creation Rules for Arabic Languages Support in Saudi Arabia】**

We will soon support order placement with recipients' information in Arabic in Saudi Arabia through the Dropshipping API, effective on April 15th. Below are the detailed rules:

<Key Details>

APIs Affected: **[aliexpress.ds.order.create]**and**[aliexpress.trade.buy.placeorder]**

Validation Rule for the following Key Fields : 

1. **[full\_name]** &**[contact\_person]**

ꔷ Ensure fields contain at least one English space. The part before the space will be treated as the First Name, and the part after as the Last Name.

ꔷ Allowed Characters: ASCII (0-127), Arabic characters (0600-06FF, 0750-077F, FB50-FDFF, FE70-FEFF), numbers, and other characters.

ꔷ Length: 2–128 characters

2. **[phone\_country]**

ꔷ Allowed Characters: Numbers (0-9), spaces, plus sign (+), parentheses (( )), hyphens (-), and forward slashes (/).

ꔷ Length: 1–8 characters.

3.**[mobile\_no]**

ꔷ Format: Numbers (0-9) and hyphens (-).

ꔷ Validation: Must be a 9-digit number starting with 5.

4. **[province] & [city]**

ꔷ Allowed Characters: ASCII (0-127), Arabic characters (0600-06FF, 0750-077F, FB50-FDFF, FE70-FEFF), numbers, and other characters.

ꔷ Length: 2–64 characters.

5. **[zip]**

ꔷ Allowed Characters: Numbers (0-9), spaces, and hyphens (-).

ꔷ Length: 1–10 characters.

6. **[address]**

ꔷ Allowed Characters: ASCII (0-127), Arabic characters (0600-06FF, 0750-077F, FB50-FDFF, FE70-FEFF), numbers, and other characters.

ꔷ Length: 5–256 characters.

7. **[address2]**

ꔷ Allowed Characters: ASCII (0-127), Arabic characters (0600-06FF, 0750-077F, FB50-FDFF, FE70-FEFF), numbers, and other characters.

## Apr 07th 2025

**【Stricter Validation Rules for [city] Field in Brazil】**

Starting April 10, 2025, the platform will enforce **[zip]** field validation for Brazil-bound orders, as required by Brazilian customs. Orders with incorrect information will fail.

<Key Details>

1. APIs Affected: **[aliexpress.ds.order.create]** and **[aliexpress.trade.buy.placeorder]**

2. Fields Affected: **[city]**

3. Validation Rule: The **[city]**field must contain the actual delivery city of the order, passing the value **[Other]** in the**[city]**field will result in order placement failure.

## Mar 19th 2025

**【Stricter Validation Rules for Order Address Fields in Brazil】**

Dear Partners,

Starting March 25, 2025, the platform will enforce [zip] and [province] validation for Brazil-bound orders, as required by Brazilian customs. Orders with incorrect information will fail.

<Key Details>

1. APIs Affected: [aliexpress.ds.order.create]

2. Fields Affected: [zip] and [province]

## Feb 11th 2025

**【Mandatory CPF & Full Name Validation for Brazil Orders】**

Effective Date: February 12, 2025

To comply with Brazilian customs requirements, the platform will enforce strict validation of the recipient's **[full\_name]** and **[cpf]** for orders shipped to **Brazil**. Orders with inaccurate information will fail.

1. **APIs Affected:**

• [aliexpress.ds.order.create]

• [aliexpress.trade.buy.placeorder]

2. **Validation Rules:**

• The platform's validation rules for **[full\_name]** and **[cpf]** will align with the Brazilian government's official standards.

• Reference: https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/ConsultaPublica.asp

## Jan 02th 2025

To enhance the order placement experience for users on our platform, we are implementing revisions to the validation rules for orders shipped to the United States, specifically for the fields of **[Name]** and **[Address]**. Please ensure that all necessary adjustments are completed by January 15, 2025, to avoid order placement disruptions.

The affected APIs are: **[aliexpress.trade.buy.placeorder]** and **[aliexpress.ds.order.create]**.

The specific validation rules are as follows:

1. 1.1When invoking the aforementioned APIs, ensure that the fields **[contact\_person]** and **[full\_name]** contain at least one English space. The system will utilize this space to identify the first name and last name.
2. 1.2 The length of the **[contact\_person]** and [full\_name] fields must be between 2 and 32 characters.
3. 1.3 When invoking the aforementioned APIs, ensure the **[address]** field has a length of 5 to 35 characters.

We appreciate your prompt attention to these changes to ensure a smooth transition.

## Dec 31th 2024

1. We have switched search engine which supports aliexpress.ds.text.search and aliexpress.ds.feed.itemids.get endpoints. After the switch, the effective delay of itemids.get API would be reduced to one day. However, the search filters for key ship\_line、nday\_profit、comments、score would be no longer available.Happy new year ：）

## Dec 26th 2024

1. Add "selectionName" in aliexpress.ds.text.search API param, which can specify particular selection you want to search within.

## Dec 5th,2024

To improve customs clearance success rates for shipments to **Australia** and **New Zealand**, we are updating the validation rules for the [full\_name] field in orders destined for these countries. These changes will take effect on December 5th. Non-compliant orders will be blocked, leading to order placement failure.

1. Validation Field: When using the **[aliexpress.trade.buy.placeorder]** or **[aliexpress.ds.order.create]** interfaces, ensure the [full\_name] field is properly formatted.

The [full\_name] field must contain an English space separating the first name and last name.

1. The [full\_name] field must not be empty.

1. The length must be between 2 and 128 characters.

1. Only English letters (A-Z) are allowed.

## Nov 18th,2024

**Choice item Free Shipping:** Choice item Free Shipping is now available when placing orders via the API.

When the products in the order meet the conditions for free shipping, it will be automatically applied without manual selection. After a successful order, you can get the specific discount amount through the **[shipping\_discount\_fee]** field in **[aliexpress.trade.ds.order.get]**

Before placing an order, you can use [aliexpress.ds.freight.query] to check whether the current product can qualify for the free shipping promotion and the threshold amount for free shipping. When the value of [mayHavePFS] is Y, it indicates that the product can qualify for the free shipping promotion on the current route. You can check the specific free shipping threshold for the product on that route through the [free\_shipping\_threshold] field, for example, if the product price exceeds $10, it can enjoy free shipping.

**Business dropshipping price：**

The dropshipping pricing for business has been fully upgraded for business customers, offering dropshipping prices that are cheaper than retail prices. If you would like to obtain a detailed product list for Category B tiered pricing, please contact our business operations team at: [ae\_ds\_supporter\_team@aliexpress.com](mailto:ae_ds_supporter_team@aliexpress.com).

here are details for get the price:

**Product Query**: **aliexpress.ds.product.get**

Customers do not need to understand the promotion logic and can still use [offer\_sale\_price] as the purchase price for a single item. If multiple items are purchased at once and reach the [min\_quantity] in the [wholesale price], you can refer to the [wholesale\_price] as the purchase price.

**Order Interface**: **aliexpress.ds.order.create**

No changes have been made. After placing an order, the applicable marketing activities will be calculated, and the final transaction price returned by the order interface will be used.

## Nov 15th,2024

1. Fixed the issue of not being able to obtain product videos "media\_url" [aliexpress.ds.product.get].

## Oct 17th,2024

1. Starting October 22, 2024, for orders with a Spanish delivery address, the recipient's phone number must be exactly 9 digits. Orders with phone numbers not exactly 9 digits long will fail.Therefore, we kindly request that your platform implement the corresponding validation mechanism for phone number digit count before the aforementioned date, ensuring that all orders with a Spanish delivery address adhere strictly to the requirement of a 9-digit recipient phone number. (aliexpress.ds.order.create & aliexpress.trade.buy.placeorder)

## Oct 09th,2024

1. Add "remove\_personal\_benefit", in aliexpress.ds.product.get API param. If you carry this param and set it to true, you would get price without any crowd type promotion.

## Sep 19th, 2024

1. Add "limit\_strategy", in aliexpress.ds.product.get API, which indicates the product promotion limit strategy. "create\_order\_fail" means if your account have reached the promotion amount limit, you can not place order anymore. Meanwhile, "back\_to\_normal\_price" or null means you can still place order with normal price after that.
2. Add "pay\_timeout\_second" in aliexpress.ds.trade.order.get, which means how long the order will be expired and canceled after the order is created. The number is in seconds. For example, if you get the value of 86400, it means that the order will be canceled in 1 day if you don't pay it

## Sep 18th, 2024

1. Add "buy\_amount\_limit\_set\_by\_promotion", in aliexpress.ds.product.get API. Which indicates the max limit amount of promotion.

## Agu 30th, 2024

1. Release text search API to support keyword searching of products
2. Release membership benefit query API for getting your membership benefit profile

## 

## Agu 27th, 2024

1. Fixed Order WebHook, document for order webhook: https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.43c059b2yAL3XN&nodeId=27493&docId=118729#/?docId=1679
2. Release API to query if a buyer can pay through API
3. Fixed some inventory bug in aliexpress.ds.product.get

## Agu 13th, 2024

1. Add "price\_include\_tax", in aliexpress.ds.product.get API. Which indicates if the current price has include the tax.
2. Add "wholesale\_price\_tiers" to present price tiers:
3. min\_quantity: for the threshold
4. wholesale\_price: for the price if you can meet the threshold
5. discount

## 

## Aug 8th, 2024

1. Fix bugs in aliexpress.ds.freight.query, to return accurate available delivery method, freight fee, freight days, and available stock
