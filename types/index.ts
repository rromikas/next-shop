import { Product } from "@shopify/shopify-api/dist/rest-resources/2022-07/product";

export interface CartItem {
  product: Product;
  quantity: number;
}
