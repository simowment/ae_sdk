// import { AESystemClient } from "./utils/system_client";

const APP_KEY = "518448";
const APP_SECRET = "o1bnfYAOvpIBqLJyU1HIaTJGww76sCBo";
const REDIRECT_URI = "https://gohae-store.duckdns.org/admin/aliexpress/callback";

// 1. Generate Auth URL
const authUrl = `https://api-sg.aliexpress.com/oauth/authorize?response_type=code&force_auth=true&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&client_id=${APP_KEY}`;

console.log("---------------------------------------------------");
console.log("Please visit the following URL to authorize the app:");
console.log(authUrl);
console.log("---------------------------------------------------");

// 2. Exchange Code for Token
// Uncomment the following lines and replace 'YOUR_CODE_HERE' with the code you received.

/*
const client = new AESystemClient({
  app_key: APP_KEY,
  app_secret: APP_SECRET,
});

async function getToken(code: string) {
  try {
    const response = await client.generateToken({
      code: code,
    });
    
    if (response.ok) {
        console.log("SUCCESS! Access Token Generated:");
        console.log(JSON.stringify(response.data, null, 2));
    } else {
        console.error("ERROR Generating Token:", response.message);
        if (response.error_response) {
            console.error(response.error_response);
        }
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

// const CODE = "YOUR_CODE_HERE";
// getToken(CODE);
*/
