import { describe, expect, it } from "vitest";
import { DropshipperClient } from "./utils/ds_client";
import { AffiliateClient } from "./utils/affiliate_client";
import { AESystemClient } from "./utils/system_client";

describe("Initialize SDK Clients", () => {
  it("Should initialize a dropshipper client with session", () => {
    const client = new DropshipperClient({
      app_key: "test_key",
      app_secret: "test_secret",
      session: "test_session",
    });
    expect(client).toHaveProperty("createOrder");
    expect(client.session).toBe("test_session");
  });

  it("Should initialize an affiliate client without session", () => {
    const client = new AffiliateClient({
      app_key: "test_key",
      app_secret: "test_secret",
    });
    expect(client).toHaveProperty("queryProducts");
    expect(client.session).toBeUndefined();
  });

  it("Should initialize a system client for OAuth", () => {
    const client = new AESystemClient({
      app_key: "test_key",
      app_secret: "test_secret",
    });
    expect(client).toHaveProperty("generateToken");
    expect(client.session).toBeUndefined();
  });
});
