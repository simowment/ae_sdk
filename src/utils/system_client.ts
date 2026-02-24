import { AEBaseClient } from "./client";
import { AES_Generate_Token_Params, AES_Refresh_Token_Params } from "../types/system";

export class AESystemClient extends AEBaseClient {
  /**
   * Generates a new security token based on the authorization code.
   *
   * @param args - Parameters required for token generation, including auth code
   * @returns API response with the generated token and related information like expiration time
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=3&path=/auth/token/create&methodType=GET/POST
   */
  async generateToken(args: AES_Generate_Token_Params) {
    return await this.execute("/auth/token/create", args);
  }

  /**
   * Refreshes an existing security token before it expires.
   *
   * @param args - Parameters required for refreshing the token, including the current refresh token
   * @returns API response with the new token and updated expiration times
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=3&path=/auth/token/refresh&methodType=GET/POST
   */
  async refreshToken(args: AES_Refresh_Token_Params) {
    return await this.execute("/auth/token/refresh", args);
  }
}
