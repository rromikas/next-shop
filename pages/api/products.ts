import type { NextApiRequest, NextApiResponse } from "next";
import Shopify from "@shopify/shopify-api";
import { Product } from "@shopify/shopify-api/dist/rest-resources/2022-07/product";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  const client = new Shopify.Clients.Rest("sofiapulse.myshopify.com", process.env.SHOPIFY_ACCESS_TOKEN);
  const response = await client.get<{ products: Product[] }>({ path: "products", query: req.query as any });
  res.status(200).json(response.body.products);
}
