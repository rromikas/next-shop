import { FunctionComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Product } from "@shopify/shopify-api/dist/rest-resources/2022-07/product";

interface FlashSaleProductProps {
  product: Product;
}

const FlashSaleProduct: FunctionComponent<FlashSaleProductProps> = ({ product }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/product/${product.id}`);
      }}
      className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 md:pb-1 flex-col items-start bg-white"
      role="button"
      title="Adidas Shoes Black"
    >
      <div className="flex mb-3 md:mb-3.5 pb-0">
        <Image src={product.images?.at(0).src} width={425} height={425}></Image>
      </div>
      <div className="w-full overflow-hidden ps-0">
        <h2 className="text-heading font-semibold truncate mb-1 md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">
          {product.title}
        </h2>
        <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
          {product.body_html}
        </p>
        <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3">
          <span className="inline-block">{product.variants?.at(0).price}</span>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleProduct;
