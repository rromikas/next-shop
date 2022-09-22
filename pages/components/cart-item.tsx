import { Product } from "@shopify/shopify-api/dist/rest-resources/2022-07/product";
import { FunctionComponent } from "react";
import Image from "next/image";
import { CartItem } from "pages/types";

interface CartItemProps {
  item: CartItem;
  remove: () => void;
}

const CartItem: FunctionComponent<CartItemProps> = ({ item, remove }) => {
  return (
    <div className="w-full px-5 md:px-7 mb-3">
      <div
        className="group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-gray-100 relative last:border-b-0"
        style={{ opacity: 1 }}
      >
        <div className="relative flex w-24 md:w-28 h-24 md:h-28 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4">
          <Image src={item.product.images?.at(0)?.src} width={500} height={500}></Image>
          <div
            onClick={remove}
            className="absolute top-0 start-0 h-full w-full bg-black bg-opacity-30 md:bg-opacity-0 flex justify-center items-center transition duration-200 ease-in-out md:group-hover:bg-opacity-30"
            role="button"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="relative text-white text-2xl transform md:scale-0 md:opacity-0 transition duration-300 ease-in-out md:group-hover:scale-100 md:group-hover:opacity-100"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col w-full overflow-hidden">
          <a className="truncate text-sm text-heading mb-1.5 -mt-1" href="/products/regular-fit-flannel-shirt">
            {item.product.title}
          </a>
          <span className="text-sm text-gray-400 mb-2.5">Unit Price : &nbsp;$8.00</span>
          <div className="flex items-end justify-between">
            <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 h-8 md:h-9 shadow-navigation bg-[#212121]">
              <button className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 w-8 md:w-9 text-white bg-[#212121] hover:bg-gray-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="2px" viewBox="0 0 12 1.5">
                  <rect data-name="Rectangle 970" width="10px" height="2px" fill="currentColor" />
                </svg>
              </button>
              <span className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-sm text-white w-8 md:w-10 ">
                {item.quantity}
              </span>
              <button className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 w-8 md:w-9 text-white bg-[#212121] hover:bg-gray-600 focus:outline-none">
                <svg data-name="plus (2)" xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 12 12">
                  <g data-name="Group 5367">
                    <path
                      data-name="Path 17138"
                      d="M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <span className="font-semibold text-sm md:text-base text-heading leading-5">$32.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
