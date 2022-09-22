import { Product } from "@shopify/shopify-api/dist/rest-resources/2022-07/product";
import { API_BASE_URL } from "constants/index";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import { AppContext } from "pages/_app";
import { useContext } from "react";
import FallbackProducts from "products.json";

const ProductPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ product }) => {
  const { setCart } = useContext(AppContext);
  return (
    <main
      className="relative flex-grow"
      style={{
        minHeight: "-webkit-fill-available",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="border-t border-gray-300 mb-0" />
      <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
        <div className="pt-8">
          <div className="chawkbazarBreadcrumb flex items-center">
            <ol className="flex items-center w-full overflow-hidden">
              <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
                <a href="https://chawkbazar.vercel.app/">Home</a>
              </li>
              <li className="text-base text-body mt-0.5">/</li>
              <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
                <a className="capitalize" href="https://chawkbazar.vercel.app/products">
                  products
                </a>
              </li>
              <li className="text-base text-body mt-0.5">/</li>
              <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
                <a className="capitalize" href="https://chawkbazar.vercel.app/products/women-fitted-neck-t-shirt">
                  women fitted neck t shirt
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
          <div className="col-span-5 grid grid-cols-2 gap-2.5">
            {product.images?.map((x: any, i: number) => (
              <div key={`product-image-${i}`} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                <Image src={x.src} width={653} height={560}></Image>
              </div>
            ))}
          </div>
          <div className="col-span-4 pt-8 lg:pt-0">
            <div className="pb-7 mb-7 border-b border-gray-300">
              <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                {product.title}
              </h2>
              <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">{product.body_html} </p>
              <div className="flex items-center mt-5">
                <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
                  {product.variants?.at(0).price}
                </div>
              </div>
            </div>
            <div className="pb-3 border-b border-gray-300">
              <div className="mb-4">
                <h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">size</h3>
                <ul className="colors flex flex-wrap -me-3">
                  <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mx-2 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                    S
                  </li>
                  <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mx-2 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                    M
                  </li>
                  <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mx-2 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                    L
                  </li>
                  <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mx-2 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                    XL
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">color</h3>
                <ul className="colors flex flex-wrap">
                  <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mx-2 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                    <span className="h-full w-full rounded block" style={{ backgroundColor: "rgb(232, 108, 37)" }} />
                  </li>
                  <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mx-2 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                    <span className="h-full w-full rounded block" style={{ backgroundColor: "rgb(255, 165, 180)" }} />
                  </li>
                  <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mx-2 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                    <span className="h-full w-full rounded block" style={{ backgroundColor: "rgb(130, 36, 227)" }} />
                  </li>
                  <li className="cursor-pointer rounded border border-gray-100 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mx-2 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black">
                    <span className="h-full w-full rounded block" style={{ backgroundColor: "rgb(221, 51, 51)" }} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center space-x-4 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48 border-b border-gray-300 py-8">
              <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                <button className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-[#212121]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 1.5">
                    <rect data-name="Rectangle 970" width="12px" height="2px" fill="currentColor" />
                  </svg>
                </button>
                <span className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24">
                  1
                </span>
                <button className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-[#212121]">
                  <svg data-name="plus (2)" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12">
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
              <button
                onClick={() => setCart((prev) => [...prev, { quantity: 1, product }])}
                data-variant="slim"
                className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-12 px-5 bg-[#212121] text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart w-full md:w-6/12 xl:w-full bg-gray-400"
              >
                <span className="py-2 3xl:px-8">Add to cart</span>
              </button>
            </div>
            <div className="py-6">
              <ul className="text-sm space-y-5 pb-1">
                <li>
                  <span className="font-semibold text-heading inline-block pe-2">SKU:</span>
                  N/A
                </li>
                <li>
                  <span className="font-semibold text-heading inline-block pe-2">Category:</span>
                  <a className="transition hover:underline hover:text-heading" href="https://chawkbazar.vercel.app/">
                    kids
                  </a>
                </li>
                <li className="productTags">
                  <span className="font-semibold text-heading inline-block pe-2">Tags:</span>
                  <a
                    className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
                    href="https://chawkbazar.vercel.app/products/casual"
                  >
                    Casual<span className="text-heading">,</span>
                  </a>
                  <a
                    className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
                    href="https://chawkbazar.vercel.app/products/cotton"
                  >
                    Cotton<span className="text-heading">,</span>
                  </a>
                  <a
                    className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
                    href="https://chawkbazar.vercel.app/products/red"
                  >
                    Red<span className="text-heading">,</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="shadow-sm">
              <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300">
                <h2 className="text-sm font-semibold leading-relaxed text-heading pe-2 md:text-base lg:text-lg">
                  Product Details
                </h2>
                <div className="flex-shrink-0 relative w-4 h-4 flex justify-center items-center">
                  <div className="w-full h-0.5 bg-[#212121] rounded-sm" />
                  <div className="origin-bottom transform w-0.5 h-full bg-[#212121] rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out scale-0"></div>
                </div>
              </header>
              <div style={{ opacity: 1, height: "auto" }}>
                <div className="pb-6 md:pb-7 leading-7 text-sm text-gray-600">
                  Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat .
                  We try to reply quickly, so you need not to wait too long for a response!.
                </div>
              </div>
            </div>
            <div className="">
              <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300">
                <h2 className="text-sm font-semibold leading-relaxed text-heading pe-2 md:text-base lg:text-lg">
                  Additional Information
                </h2>
                <div className="flex-shrink-0 relative w-4 h-4 flex justify-center items-center">
                  <div className="w-full h-0.5 bg-[#212121] rounded-sm" />
                  <div className="origin-bottom transform w-0.5 h-full bg-[#212121] rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out scale-100"></div>
                </div>
              </header>
            </div>
            <div className="">
              <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300">
                <h2 className="text-sm font-semibold leading-relaxed text-heading pe-2 md:text-base lg:text-lg">
                  Customer Reviews
                </h2>
                <div className="flex-shrink-0 relative w-4 h-4 flex justify-center items-center">
                  <div className="w-full h-0.5 bg-[#212121] rounded-sm" />
                  <div className="origin-bottom transform w-0.5 h-full bg-[#212121] rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out scale-100"></div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
      <div className="Toastify" />
    </main>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  if (!API_BASE_URL) {
    return {
      paths: [],
      fallback: true,
    };
  }
  const products: Product[] = await fetch(`${API_BASE_URL}/api/products`).then((x) => x.json());
  return {
    paths: products.map((x) => ({ params: { pid: x.id?.toString() } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ product: Product }> = async (context) => {
  const id = context.params?.pid;
  if (!API_BASE_URL) {
    return {
      props: {
        product: FallbackProducts[0] as any as Product,
      },
    };
  }
  const [product]: Product[] = await fetch(`${API_BASE_URL}/api/products?ids=${id}`).then((x) => x.json());

  return {
    props: { product },
  };
};
