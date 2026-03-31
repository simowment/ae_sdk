/**
 * @fileoverview
 * AliExpress Dropshipper API client implementation.
 * This file contains the client for interacting with AliExpress Dropshipping API endpoints,
 * handling authentication, request execution, and response normalization for easier consumption.
 *
 * The client normalizes nested API responses using utility functions like extractNestedArray
 * and extractNestedProperty to ensure consistent data structures regardless of the variations
 * in the AliExpress API responses.
 */

import {
  extractNestedArray,
  extractNestedProperty,
} from ".";
import type {
  AE_Base_Client,
  AE_Logistics_Address,
  AE_Product_Item,
  DS_Product_Params,
  DS_Shipping_Info_Arguments,
  DS_Get_Order_Params,
  DS_Feedname_Params,
  Affiliate_Categories_Params,
  AE_Place_Order_Payment_Params,
  DS_Freight_Query_Params,
  DS_Order_Tracking_Get_Params,
  DS_Feed_Itemids_Get_Params,
  DS_Image_SearchV2_Params,
  DS_Member_Benefit_Get_Params,
  DS_Product_Specialinfo_Get_Params,
  DS_Product_Wholesale_Get_Params,
  DS_Search_Event_Report_Params,
  DS_Text_Search_Params,
} from "../types";
import { AESystemClient } from "./system_client";

/**
 * Client for interacting with AliExpress Dropshipping API endpoints.
 *
 * This class provides methods to access various AliExpress API endpoints related to
 * dropshipping, including product details, order management, logistics, tracking,
 * and other operations. It handles the authentication and normalization
 * of API responses to provide consistent data structures.
 *
 * @extends AESystemClient Base client with authentication and request execution capabilities
 */
export class DropshipperClient extends AESystemClient {
  constructor(init: AE_Base_Client) {
    super(init);
  }

  /**
   * Calculates shipping costs for buyer-selected options
   *
   * Uses the AliExpress shipping calculation API to get available shipping methods
   * and their associated costs based on product, quantity, and destination.
   *
   * @param args Shipping information parameters including product and destination details
   * @returns API response with available shipping methods and costs
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.logistics.buyer.freight.calculate&methodType=GET/POST
   */
  async shippingInfo(args: DS_Shipping_Info_Arguments) {
    let response = await this.execute(
      "aliexpress.logistics.buyer.freight.calculate",
      {
        param_aeop_freight_calculate_for_buyer_d_t_o: JSON.stringify(args),
      },
    );

    if (response.ok) {
      const data =
        response.data.aliexpress_logistics_buyer_freight_calculate_response;
      if (
        data.result.success &&
        data.result.aeop_freight_calculate_result_for_buyer_d_t_o_list
      ) {
        data.result.aeop_freight_calculate_result_for_buyer_d_t_o_list =
          extractNestedArray(
            data.result.aeop_freight_calculate_result_for_buyer_d_t_o_list,
            "aeop_freight_calculate_result_for_buyer_dto",
          );
      }
    }

    return response;
  }

  /**
   * Creates a new order on AliExpress
   *
   * Places an order with the specified shipping address and product items.
   * This is the main endpoint for creating dropshipping orders.
   *
   * @param params Object containing logistics_address (shipping details) and product_items (products to order)
   * @returns API response with order creation result, including order numbers
   * @link https://openservice.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.order.create&methodType=GET/POST
   */
  async createOrder({
    logistics_address,
    product_items,
    out_order_id,
    promo_and_payment,
  }: {
    logistics_address: AE_Logistics_Address;
    product_items: AE_Product_Item[];
    out_order_id?: string;
    promo_and_payment?: AE_Place_Order_Payment_Params;
  }) {
    let response = await this.execute("aliexpress.ds.order.create", {
      ...(promo_and_payment && { ds_extend_request: JSON.stringify(promo_and_payment) }),
      param_place_order_request4_open_api_d_t_o: JSON.stringify({
        logistics_address,
        product_items,
        ...(out_order_id && { out_order_id }),
      }),
    });

    if (response.ok) {
      const result = response.data.aliexpress_ds_order_create_response?.result;
      if (result?.is_success) {
        result.order_list = extractNestedProperty(result.order_list, "number") ?? [];
      }
    }

    return response;
  }

  /**
   * Retrieves detailed information about an order
   *
   * Gets comprehensive order details including products, shipping information,
   * payment status, and other order-related data.
   *
   * @param args Parameters for order retrieval, including order ID
   * @returns API response with complete order details
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.trade.ds.order.get&methodType=GET/POST
   */
  async orderDetails(args: DS_Get_Order_Params) {
    let response = await this.execute("aliexpress.trade.ds.order.get", args);

    if (response.ok) {
      // Normalize alternate response key returned by some API versions
      const raw = response.data as any;
      if (raw.aliexpress_ds_trade_order_get_response) {
        response.data.aliexpress_trade_ds_order_get_response = raw.aliexpress_ds_trade_order_get_response;
        delete raw.aliexpress_ds_trade_order_get_response;
      }

      let data = response.data.aliexpress_trade_ds_order_get_response.result;

      if ("child_order_list" in data && data.child_order_list) {
        data.child_order_list = extractNestedArray(
          data.child_order_list,
          "ae_child_order_info",
        );
      }

      if (data.logistics_info_list) {
        data.logistics_info_list = extractNestedArray(
          data.logistics_info_list,
          "ae_order_logistics_info",
        );
      }
    }

    return response;
  }

  /**
   * Retrieves available featured promotions
   *
   * Gets a list of current promotional campaigns available for dropshippers,
   * which can be used to find discounted products.
   *
   * @param args Parameters for filtering and pagination of promotions
   * @returns API response with available promotions
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.feedname.get&methodType=GET/POST
   */
  async queryFeaturedPromos(args: DS_Feedname_Params) {
    let response = await this.execute("aliexpress.ds.feedname.get", args);
    if (response.ok) {
      const result = response.data.aliexpress_ds_feedname_get_response?.result;
      if (result) result.promos = extractNestedArray(result.promos, "promo");
    }
    return response;
  }

  /**
   * Retrieves AliExpress category information
   *
   * Gets hierarchical category data that can be used for product browsing
   * or filtering in dropshipping applications.
   *
   * @param args Parameters for retrieving category information
   * @returns API response with category data
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.category.get&methodType=GET/POST
   */
  async getCategories(args: Affiliate_Categories_Params) {
    let response = await this.execute("aliexpress.ds.category.get", args);
    if (response.ok) {
      const result = response.data.aliexpress_ds_category_get_response.resp_result.result;
      result.categories = extractNestedArray(result.categories, "category");
    }
    return response;
  }

  /**
   * Retrieves detailed product information
   *
   * Gets comprehensive information about a product, including pricing,
   * variations, shipping options, seller information, and other product details.
   * This is a core API for dropshipping product sourcing.
   *
   * @param args Parameters for product retrieval, including product ID
   * @returns API response with complete product details
   * @link https://open.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.product.get&methodType=GET/POST
   */
  async productDetails(args: DS_Product_Params) {
    let response = await this.execute("aliexpress.ds.product.get", args);
    if (response.ok) {
      const result = response.data.aliexpress_ds_product_get_response?.result;
      
      if (!result) {
        console.error("[AliExpress SDK] productDetails: No result in response");
        return response;
      }
      
      // Fix weird AE API responses into a predefined struct
      result.ae_item_properties = extractNestedArray(
        result.ae_item_properties,
        "ae_item_property",
      );

      result.ae_item_sku_info_dtos = extractNestedArray(
        result.ae_item_sku_info_dtos,
        "ae_item_sku_info_d_t_o",
      );

      result.ae_item_sku_info_dtos.forEach((sku) => {
        if ((sku as any).ae_sku_property_dtos) {
          sku.aeop_s_k_u_propertys = (sku as any).ae_sku_property_dtos;
          delete (sku as any).ae_sku_property_dtos;
        }

        sku.aeop_s_k_u_propertys = extractNestedArray(
          sku.aeop_s_k_u_propertys,
          "ae_sku_property_d_t_o",
        );
      });

      if (result.ae_multimedia_info_dto?.ae_video_dtos) {
        result.ae_multimedia_info_dto.ae_video_dtos = extractNestedArray(
          result.ae_multimedia_info_dto.ae_video_dtos,
          "ae_video_d_t_o",
        );
      }
    }
    return response;
  }

  /**
   * Retrieves dropshipping freight information.
   *
   * @param args Freight query parameters
   * @returns API response with delivery options
   * @link https://openservice.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.freight.query&methodType=GET/POST
   */
  async queryFreight(args: DS_Freight_Query_Params) {
    let payload = { ...args };
    if (typeof payload.queryDeliveryReq === "object") {
      payload.queryDeliveryReq = JSON.stringify(payload.queryDeliveryReq);
    }
    return await this.execute("aliexpress.ds.freight.query", payload as any);
  }

  /**
   * Get DropShip Order Tracking info
   *
   * @param args Tracking parameters
   * @returns API response with tracking detail
   * @link https://openservice.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.order.tracking.get&methodType=GET/POST
   */
  async getOrderTracking(args: DS_Order_Tracking_Get_Params) {
    return await this.execute("aliexpress.ds.order.tracking.get", args);
  }

  /**
   * fetch item id list by feedname
   *
   * @param args Parameters
   * @returns API response
   * @link https://openservice.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.feed.itemids.get&methodType=GET/POST
   */
  async getFeedItemIds(args: DS_Feed_Itemids_Get_Params) {
    return await this.execute("aliexpress.ds.feed.itemids.get", args);
  }

  /**
   * ae dropshiper image search v2
   *
   * @param args Parameters
   * @returns API response
   */
  async searchByImageV2(args: DS_Image_SearchV2_Params) {
    let payload = { ...args };
    if (typeof payload.param0 === "object") {
      payload.param0 = JSON.stringify(payload.param0);
    }
    return await this.execute("aliexpress.ds.image.searchV2", payload as any);
  }

  /**
   * The API for querying member benefit detail
   *
   * @returns API response
   * @link https://openservice.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.member.benefit.get&methodType=GET/POST
   */
  async getMemberBenefit(args: DS_Member_Benefit_Get_Params = {}) {
    return await this.execute("aliexpress.ds.member.benefit.get", args);
  }

  /**
   * get products' special info like certification
   *
   * @param args Parameters
   * @returns API response
   * @link https://openservice.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.product.specialinfo.get&methodType=GET/POST
   */
  async getProductSpecialInfo(args: DS_Product_Specialinfo_Get_Params) {
    let payload = { ...args } as any;
    if (Array.isArray(payload.countryCodes)) {
      payload.countryCodes = payload.countryCodes.join(",");
    }
    return await this.execute("aliexpress.ds.product.specialinfo.get", payload);
  }

  /**
   * query product wholesale info for dropshipping business
   *
   * @param args Parameters
   * @returns API response
   * @link https://openservice.aliexpress.com/doc/api.htm#/api?cid=21038&path=aliexpress.ds.product.wholesale.get&methodType=GET/POST
   */
  async getProductWholesale(args: DS_Product_Wholesale_Get_Params) {
    let response = await this.execute("aliexpress.ds.product.wholesale.get", args);
    if (response.ok) {
      const result = response.data.aliexpress_ds_product_wholesale_get_response?.result;
      if (!result) return response;

      result.ae_item_properties = extractNestedArray(
        result.ae_item_properties,
        "ae_item_property",
      );

      result.ae_item_sku_info_dtos = extractNestedArray(
        result.ae_item_sku_info_dtos,
        "ae_item_sku_info_d_t_o",
      );

      (result.ae_item_sku_info_dtos as any[]).forEach((sku) => {
        if (sku.ae_sku_property_dtos) {
          sku.aeop_s_k_u_propertys = sku.ae_sku_property_dtos;
          delete sku.ae_sku_property_dtos;
        }

        sku.aeop_s_k_u_propertys = extractNestedArray(
          sku.aeop_s_k_u_propertys,
          "ae_sku_property_d_t_o",
        );
      });

      if (result.ae_multimedia_info_dto?.ae_video_dtos) {
        result.ae_multimedia_info_dto.ae_video_dtos = extractNestedArray(
          result.ae_multimedia_info_dto.ae_video_dtos,
          "ae_video_d_t_o",
        );
      }
    }
    return response;
  }

  /**
   * Used for report business event to help analysis out-site business CR
   *
   * @param args Parameters
   * @returns API response
   */
  async reportSearchEvent(args: DS_Search_Event_Report_Params) {
    return await this.execute("aliexpress.ds.search.event.report", args);
  }

  /**
   * text search for ds
   *
   * @param args Parameters
   * @returns API response
   */
  async searchByText(args: DS_Text_Search_Params) {
    let payload = { ...args };
    if (payload.searchExtend && typeof payload.searchExtend === "object") {
      payload.searchExtend = JSON.stringify(payload.searchExtend);
    }
    return await this.execute("aliexpress.ds.text.search", payload as any);
  }
}
