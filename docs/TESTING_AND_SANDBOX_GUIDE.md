# AliExpress Open Platform Integrator Guide

This document combines essential documentation for developing, testing, and getting support for AliExpress Open Platform integrations (specifically Dropshipping/Affiliates). 

---

## Part 1: How to get support
*(Sourced from AliExpress Official Docs - DocId: 1591)*

Our service hours Working days in Mainland China: 10:00AM-22:00PM (UTC+8)

### 1. DingTalk
**Download DingTalk:** Please download the client you need from the official DingTalk site.

- Ask your DS business contact to help you register for DingTalk and set up a DS technical customer service group, where customer robots can be summoned to provide technical Q&A and manual support.
- You can directly submit a technical support ticket to us through Links-Ticket. 

If it is a technical problem, please be sure to fill in the following information and send it to us:
```
Description: 
RequestID for your request: 
API path: 
RequestBody: 
```

### 2. Tec support team Ticket
You can submit a ticket to the Dropshipper technical team for technical inquiries through the AliExpress Open Platform (Only tech issues).

### 3. Email
If you have any needs or questions regarding DS business (Register Account / Business Consulting / Business Requirements), please consult the following email address:
`ds-api@aliexpress.com`

If you have any **technical questions**, please send an email to the following address:
`ae_ds_supporter_team@aliexpress.com`

*Please note that we will not respond to business questions through the tech email. This email address only handles technical issues.*

When you send an email for technical support, please fill out the form below and attach it:
```text
Your AppKey: 
Description: 
RequestID for your request: 
API path: 
RequestBody: 
```

---

## Part 2: Testing & Sandbox Environment Guide

When integrating with the AliExpress Open Platform, especially for dropshipping where you are programmatically creating orders, testing your integration *without* spending real money is critical.

Unlike standard REST APIs that provide a dedicated `sandbox.api.aliexpress.com` endpoint, AliExpress handles testing directly within the production environment using specialized **Loan Test Accounts** and **Order Testing** tools.

This guide explains how to properly test your application using the AliExpress App Console.

### 1. The "Loan Test Account"

To test placing orders, you must use a "Loan Test Account". These are fake buyer accounts provided by AliExpress specifically for developers to use during integration.

#### How to get a Loan Test Account:
1. Go to your **App Console** -> **Common Tools** -> **Loan Test Account**.
2. Click **"Loan New Account"**.
3. You will be provided with a **Test Buyer Account** (e.g., `ae_open_test_buyer@...`) and a **Test Seller Account**.
4. Make sure the account status is "Active".

#### How to use the Test Account in your App:
When you need to test the OAuth flow or API endpoints that require a user session:
1. Start your application's OAuth flow.
2. When redirected to the AliExpress login page, **log in using the credentials of the "Test Buyer Account"** you just created.
3. Your application will now receive an `access_token` (session) tied specifically to this test account.
4. Any API calls made using this session will be executed under the context of the test buyer.

### 2. Order Testing (Simulating Orders)

Once you have a session token for your Test Buyer Account, you can test the dropshipping flow. However, you cannot just place random orders on AliExpress. You must create specific "Test Cases" for the items you want to test.

#### How to create an Order Test Case:
1. Go to your **App Console** -> **Common Tools** -> **Order Testing**.
2. Click **"Create Order Testing"**.
3. Fill out the form:
   - **Test Case Name**: Give it a descriptive name (e.g., "Standard T-Shirt Order").
   - **Loan Account Email**: Select the Test Buyer Account you generated in the previous step.
   - **Item ID**: Provide the real AliExpress Product ID you want to test ordering.
   - **Quantity**: Set the test quantity.
   - **Receiving countries/ Region**: Select the destination country you want to test shipping to.
   - **Reason for Application**: Briefly state "API Integration Testing".
4. Click **"Ok"**.

#### Placing the Test Order via API:
Once the test case is created, you can now execute your code!

1. In your application, use the SDK to call the `createOrder` endpoint.
2. Ensure the parameters match the test case you created exactly:
   - The `session` token must belong to the **Loan Account Email**.
   - The `product_id` must match the **Item ID**.
   - The destination country in `logistics_address` must match the **Receiving countries/ Region**.
3. Execute the API call.

Because the request matches an active Order Test Case tied to a Loan Test Account, AliExpress will process the order creation but **will not actually charge money or ship the item**.

### 3. Best Practices for Developers

- **Mock Data First**: Before using the Loan Test Accounts, use the **API Explorer** in the console to manually trigger requests. Copy the raw JSON responses and use them to write automated unit tests (using tools like `vitest` and `msw`) for your application logic.
- **Isolate Testing Logic**: Add a configuration flag in your application (e.g., `USE_TEST_ACCOUNTS=true`) so you don't accidentally mix test tokens and real tokens in your database.
- **Check Error Codes**: If a test order fails, check the **API Access Log** in the sidebar. It will show exactly what payload AliExpress received and why it was rejected.
