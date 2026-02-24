# AliExpress OAuth Guide (TypeScript/Node SDK)

This guide covers how to install a custom fork of the `ae_sdk` package and how to properly handle the AliExpress OAuth 2.0 flow in a Node.js/Express environment to authenticate users and obtain their session tokens.

## 1. Installation from a GitHub Fork

Instead of manually cloning the repository or relying on the official NPM package, you can instruct `npm` or `yarn` to install the SDK directly from your GitHub fork.

```bash
# Using NPM
npm install git+https://github.com/YourUsername/ae_sdk.git

# Using Yarn
yarn add git+https://github.com/YourUsername/ae_sdk.git

# Using PNPM
pnpm add git+https://github.com/YourUsername/ae_sdk.git
```

---

## 2. The OAuth 2.0 Callback Flow

AliExpress requires users to explicitly grant your application permission to act on their behalf. You do this by redirecting them to AliExpress, having them log in, and then capturing the temporary authorization `code` they send back.

### Step 1: Configure your App Console
Before writing code, ensure your `Callback URL` is registered in the AliExpress App Console.
1. Go to your App Console -> App Management -> App Overview
2. Set your **Callback URL** (e.g., `https://yourdomain.com/auth/aliexpress/callback`)
> *Note: If this address doesn't exactly match the `redirect_uri` in your code, the authorization will fail.*

### Step 2: Redirect the user to AliExpress
In your Node.js backend (e.g., Express.js), create a route that redirects the user's browser to the official AliExpress authorization URL.

```typescript
// Example using Express.js
import express from 'express';

const app = express();
const APP_KEY = process.env.ALIEXPRESS_APP_KEY;
const APP_SECRET = process.env.ALIEXPRESS_APP_SECRET;

// This must exactly match the callback URL registered in your App Console
const CALLBACK_URL = "https://yourdomain.com/auth/aliexpress/callback";

app.get('/auth/aliexpress', (req, res) => {
    // Construct the official OAuth URL
    const authUrl = `https://api-sg.aliexpress.com/oauth/authorize?response_type=code&force_auth=true&redirect_uri=${encodeURIComponent(CALLBACK_URL)}&client_id=${APP_KEY}`;
    
    // Redirect the user's browser to AliExpress
    res.redirect(authUrl);
});
```

### Step 3: Handle the Callback and Generate the Token
AliExpress will redirect the user back to your `CALLBACK_URL` with a temporary `?code=XYZ` attached to the URL. Use the `AESystemClient` from the SDK to exchange this code for a permanent access token (`session` token).

```typescript
import { AESystemClient } from "ae_sdk";

app.get('/auth/aliexpress/callback', async (req, res) => {
    // 1. Capture the code from the query string
    const authCode = req.query.code as string;
    
    if (!authCode) {
        return res.status(400).send("No authorization code provided");
    }

    // 2. Initialize the System Client (no session token needed yet)
    const systemClient = new AESystemClient({
        app_key: APP_KEY,
        app_secret: APP_SECRET
    });

    try {
        // 3. Exchange the code for the access token using the SDK
        const tokenResponse = await systemClient.generateToken({
            code: authCode
        });

        if (tokenResponse.ok) {
            // SUCCESS! Extract the permanent session token
            const sessionToken = tokenResponse.data.access_token;
            const refreshToken = tokenResponse.data.refresh_token;
            const userId = tokenResponse.data.user_id;

            // 4. Save these to your database associated with the user
            // await saveUserTokensToDatabase(userId, sessionToken, refreshToken);

            res.send("Successfully authorized! You can close this window.");
        } else {
            // Log the error message provided by AliExpress
            console.error("Token generation failed:", tokenResponse.message);
            res.status(500).send("Failed to get token: " + tokenResponse.message);
        }
    } catch (error) {
        console.error("Server error during token exchange:", error);
        res.status(500).send("Server error");
    }
});
```

### Step 4: Use the Token to Make Authenticated Requests
When you want to perform actions (like fetching dropshipping products or placing orders) on behalf of that user, you fetch their saved token and inject it into the `session` property of the `DropshipperClient` or `AffiliateClient`.

```typescript
import { DropshipperClient } from "ae_sdk";

async function fetchUserProducts(userId: string) {
    // Retrieve the saved token from your database
    const sessionToken = await getUserTokenFromDatabase(userId);
    
    // Initialize the client WITH the user's specific session token
    const dsClient = new DropshipperClient({
      app_key: APP_KEY,
      app_secret: APP_SECRET,
      session: sessionToken, // Inject the session token here!
    });
    
    // Now this request is authenticated as the user!
    const response = await dsClient.productDetails({
        product_id: 1005001234567890,
        ship_to_country: "US",
        target_currency: "USD"
    });
    
    if (response.ok) {
        return response.data;
    } else {
        throw new Error(response.message);
    }
}
```
