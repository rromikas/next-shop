import classNames from "classnames";
import { FunctionComponent } from "react";
import Image from "next/image";
import { Product } from "@shopify/shopify-api/dist/rest-resources/2022-07/product";
import Link from "next/link";

interface FeaturedProductProps {
  product: Product;
  hero: boolean;
}

const FeaturedProduct: FunctionComponent<FeaturedProductProps> = ({ product, hero }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div
        className={classNames({
          "row-span-full lg:row-span-2 col-span-full lg:col-span-2 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden":
            hero,
          "col-span-2 lg:col-span-1 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden":
            !hero,
        })}
      >
        <div className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]">
          <Image src={product.images?.at(0).src} width={1000} height={1000}></Image>
        </div>
        <span className="absolute top-3.5 md:top-5 3xl:top-7 start-3.5 md:start-5 3xl:start-7 bg-[#212121] text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1">
          20%
        </span>
        <div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center w-full px-4 md:px-5 3xl:px-7 pb-4 md:pb-5 3xl:pb-7">
          <div className="md:pe-2 lg:pe-0 2xl:pe-2 overflow-hidden">
            <h2 className="text-[#212121] font-semibold text-sm md:text-base xl:text-lg mb-1 truncate">{product.title}</h2>
            <p className="text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
              {product.body_html}
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end md:text-end lg:text-start xl:text-end mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5">
            <div className="text-[#212121] font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
              {product.variants?.at(0).price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProduct;
