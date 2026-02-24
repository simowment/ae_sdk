# Place order error

# Applicable APIs

`aliexpress.trade.buy.placeorder`

`aliexpress.ds.order.create`

# Applicable error code

`"error_code": "B_DROPSHIPPER_DELIVERY_ADDRESS_VALIDATE_FAIL"`


```json
"error\_msg": "Please select a State/Province/County",

"error\_msg": "Please enter a City",

```
# Check steps

1. Check that your `"country"` field is correct. It should be a two-letter country code. Please refer to: [Country Code Documentation](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1604)
2. Demo：`"country": "US",`
3. Check that your `"zip"` field is legal. It should be the corresponding zipcode of the country.
4. Demo：`"zip": "08360",`
5. Check if your `"province"` & `"city"` are correct. You can use the API: aliexpress.ds.address.get to get all available province/city information for a given country. Please refer to: [API Document](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.456459b2MAmd59&nodeId=27493&docId=118729#/?docId=1599)
6. Demo：`"province": "New Jersey","city": "Vineland",`

# Verify Address

You can use the address filling form on the AliExpress order page to verify whether your address is correct. If you can confirm, it means your address is available and can be used as an input parameter. [Link](https://www.aliexpress.com/p/trade/confirm.html?objectId=1005006454451334&from=aliexpress&countryCode=US&shippingCompany=CAINIAO_STANDARD&provinceCode=922865760000000000&cityCode=922865765760000000&aeOrderFrom=main_detail&skuAttr=200000795%3A193%23no%20switch%3B249%3A200006305%234w%28max100w%29&skuId=12000037255569170&skucustomAttr=&quantity=1&spm=a2g0o.detail.0.0&curPageLogUid=1738898297502_0sA2qR&pdpBuyParams=%7B%22pdpBusinessMode%22%3A%22wholesale%22%7D&addressId=4100198298419&gatewayAdapt=4itemAdapt)

Step1:Select your country

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/35656464/1738910811122-fd26300f-5a28-42ff-a476-f33d92c5a380.png)

Step2:Enter your address or zipcode.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/35656464/1738911055809-fe3405bf-7fee-4101-881b-c86bb7c81143.png)

Step3:Compare the correct address of the page automatically loaded

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/35656464/1738911224329-4339b396-63da-4745-88bb-f7645e0dd94e.png)

Step4:Finish your address parameter


```json
"country": "US",

"zip": "08360",

"province": "New Jersey",

"city": "Vineland",

```
# Develop

You can also use browser tools to capture elements on the page to ensure the accuracy of the province & city results you input. Please refer to the image below.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/35656464/1739241129201-08d8d9db-500d-4526-9d4e-b467dc2a4b50.png)
