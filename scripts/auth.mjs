#!/usr/bin/env node
/**
 * AliExpress OAuth helper — self-contained, no local backend needed.
 *
 * Flow:
 *   1. Opens your browser to the AliExpress auth URL.
 *   2. You authorize — AliExpress redirects to the registered callback on your
 *      production backend, which saves the token automatically.
 *   3. This script polls the production backend admin API until the token appears.
 *   4. Saves ALIEXPRESS_ACCESS_TOKEN + ALIEXPRESS_REFRESH_TOKEN to .env.local.
 *
 * Reads from .env.local:
 *   ALIEXPRESS_APP_KEY, ALIEXPRESS_APP_SECRET, ALIEXPRESS_CALLBACK_URL,
 *   MEDUSA_SECRET_API_KEY
 *
 * Usage:
 *   node scripts/auth.mjs
 */

import { createHmac } from "crypto"
import { exec } from "child_process"
import { readFileSync, writeFileSync, existsSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const SDK_ENV = join(__dirname, "..", ".env.local")
// Also try reading from the backend env files if they exist alongside this repo
const BACKEND_ENV = join(__dirname, "..", "..", "igottamakeit", "backend", ".env")
const BACKEND_ENV_LOCAL = join(__dirname, "..", "..", "igottamakeit", "backend", ".env.local")

const AE_AUTH_URL = "https://api-sg.aliexpress.com/oauth/authorize"
const AE_REFRESH_URL = "https://api-sg.aliexpress.com/rest/auth/token/refresh"

// ─── env ──────────────────────────────────────────────────────────────────────

function loadEnv(file) {
  if (!existsSync(file)) return {}
  return Object.fromEntries(
    readFileSync(file, "utf8")
      .split("\n")
      .filter(l => l.trim() && !l.startsWith("#") && l.includes("="))
      .map(l => { const idx = l.indexOf("="); return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()] })
  )
}

function writeEnv(file, updates) {
  let lines = existsSync(file) ? readFileSync(file, "utf8").split("\n") : []
  for (const [key, value] of Object.entries(updates)) {
    const idx = lines.findIndex(l => l.startsWith(`${key}=`))
    if (idx >= 0) lines[idx] = `${key}=${value}`
    else lines.push(`${key}=${value}`)
  }
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop()
  writeFileSync(file, lines.join("\n") + "\n")
}

// ─── AliExpress refresh signing ────────────────────────────────────────────────

function sign(secret, params) {
  const p = { ...params }
  let base = ""
  if (typeof p.method === "string" && p.method.includes("/")) { base = p.method; delete p.method }
  base += Object.entries(p).filter(([, v]) => v != null && v !== "").sort(([a], [b]) => a.localeCompare(b)).reduce((acc, [k, v]) => acc + k + String(v), "")
  return createHmac("sha256", secret).update(base).digest("hex").toUpperCase()
}

async function doRefresh(appKey, appSecret, refreshToken) {
  const params = { app_key: appKey, refresh_token: refreshToken, sign_method: "sha256", simplify: "true", timestamp: Date.now() }
  params.sign = sign(appSecret, params)
  const query = Object.entries(params).map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`).join("&")
  const res = await fetch(`${AE_REFRESH_URL}?${query}`, { method: "POST" })
  const data = await res.json()
  return data.aliexpress_system_oauth_token_refresh_response ?? data
}

// ─── helpers ──────────────────────────────────────────────────────────────────

function formatExpiry(ms) {
  if (!ms) return "unknown"
  const diff = Number(ms) - Date.now()
  if (diff < 0) return "EXPIRED"
  const days = Math.floor(diff / 86400000)
  return days > 0 ? `${days}d remaining` : `${Math.floor(diff / 3600000)}h remaining`
}

function openBrowser(url) {
  const cmd = process.platform === "win32" ? `start "" "${url}"` : process.platform === "darwin" ? `open "${url}"` : `xdg-open "${url}"`
  exec(cmd, () => {})
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function fetchCurrentToken(backendOrigin, adminAuth) {
  try {
    const r = await fetch(`${backendOrigin}/admin/dropship/providers`, {
      headers: { Authorization: adminAuth },
      signal: AbortSignal.timeout(5000),
    })
    if (!r.ok) return null
    const data = await r.json()
    const provider = data.providers?.find(p => p.id === "aliexpress")
    return { token: provider?.credentials?.access_token ?? null, expiresAt: provider?.expiresAt ?? null, creds: provider?.credentials ?? null }
  } catch {
    return null
  }
}

function saveToken(creds, expiresAt) {
  writeEnv(SDK_ENV, {
    ALIEXPRESS_ACCESS_TOKEN: creds.access_token,
    ...(creds.refresh_token && { ALIEXPRESS_REFRESH_TOKEN: creds.refresh_token }),
    ...(expiresAt && { ALIEXPRESS_TOKEN_EXPIRES_AT: String(new Date(expiresAt).getTime()) }),
  })
  console.log("\n✓ Token saved to .env.local")
  console.log(`  access_token:  ${creds.access_token.slice(0, 8)}...`)
  if (expiresAt) console.log(`  expires:       ${formatExpiry(new Date(expiresAt).getTime())}`)
  console.log("\nRun tests:\n  pnpm test:live\n")
}

// ─── main ─────────────────────────────────────────────────────────────────────

async function main() {
  const env = { ...loadEnv(BACKEND_ENV), ...loadEnv(BACKEND_ENV_LOCAL), ...loadEnv(SDK_ENV), ...process.env }

  const APP_KEY = env.ALIEXPRESS_APP_KEY
  const APP_SECRET = env.ALIEXPRESS_APP_SECRET
  const CALLBACK_URL = env.ALIEXPRESS_CALLBACK_URL ?? env.ALIEXPRESS_REDIRECT_URI
  const ADMIN_KEY = env.MEDUSA_SECRET_API_KEY

  if (!APP_KEY || !APP_SECRET) { console.error("Missing ALIEXPRESS_APP_KEY or ALIEXPRESS_APP_SECRET"); process.exit(1) }
  if (!ADMIN_KEY) { console.error("Missing MEDUSA_SECRET_API_KEY"); process.exit(1) }
  if (!CALLBACK_URL) { console.error("Missing ALIEXPRESS_CALLBACK_URL"); process.exit(1) }

  // Always poll local backend — gohae-store.duckdns.org is just Caddy → localhost
  const backendOrigin = "http://localhost:9000"
  const adminAuth = `Basic ${Buffer.from(`${ADMIN_KEY}:`).toString("base64")}`

  console.log("\n=== AliExpress Auth Helper ===\n")

  const existing = await fetchCurrentToken(backendOrigin, adminAuth)
  const currentToken = existing?.token
  const sdkEnv = loadEnv(SDK_ENV)
  const localExpiry = sdkEnv.ALIEXPRESS_TOKEN_EXPIRES_AT

  if (currentToken) {
    console.log(`Current token: ${currentToken.slice(0, 8)}...  (${formatExpiry(localExpiry)})`)
  }

  // Token still valid locally — nothing to do
  if (currentToken && localExpiry && Number(localExpiry) > Date.now()) {
    console.log("Token is still valid. No action needed.")
    console.log("Run tests:\n  pnpm test:live\n")
    return
  }

  // Try refresh if we have a local refresh token
  const REFRESH = sdkEnv.ALIEXPRESS_REFRESH_TOKEN
  if (REFRESH && APP_SECRET) {
    console.log("Token expired. Refreshing...")
    const result = await doRefresh(APP_KEY, APP_SECRET, REFRESH)
    if (result?.access_token) {
      const expiresAt = result.expire_time ? new Date(result.expire_time) : new Date(Date.now() + (result.expires_in ?? 0) * 1000)
      saveToken(result, expiresAt.toISOString())
      return
    }
    console.log("Refresh failed, falling back to full OAuth flow...\n")
  }

  // Full OAuth — open browser, poll backend until token changes
  const authUrl = `${AE_AUTH_URL}?response_type=code&force_auth=true&client_id=${APP_KEY}&redirect_uri=${encodeURIComponent(CALLBACK_URL)}`
  console.log(`Opening browser (callback → ${backendOrigin})...`)
  openBrowser(authUrl)
  console.log("Authorize in the browser, then wait...\n")

  const TIMEOUT = 3 * 60 * 1000
  const start = Date.now()
  let dots = 0

  while (Date.now() - start < TIMEOUT) {
    await sleep(2000)
    process.stdout.write(".")
    if (++dots % 30 === 0) process.stdout.write("\n")

    const latest = await fetchCurrentToken(backendOrigin, adminAuth)
    if (latest?.token && latest.token !== currentToken) {
      process.stdout.write("\n")
      saveToken(latest.creds, latest.expiresAt)
      return
    }
    // Also detect if a previously-null token now has a value
    if (!currentToken && latest?.token) {
      process.stdout.write("\n")
      saveToken(latest.creds, latest.expiresAt)
      return
    }
  }

  process.stdout.write("\n")
  console.error("Timed out. Did you complete the authorization in the browser?")
  process.exit(1)
}

main().catch(err => { console.error("\nError:", err.message); process.exit(1) })
