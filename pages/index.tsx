import type { InferGetStaticPropsType, NextPage } from "next";
import Header from "./components/header";
import Asset1 from "../assets/1.jpg";
import Asset4 from "../assets/4.jpg";
import Asset7 from "../assets/7.jpg";
import Asset9 from "../assets/9.jpg";
import Asset10 from "../assets/10.jpg";
import Asset11 from "../assets/11.jpg";
import Asset6 from "../assets/6.jpg";
import Image from "next/image";
import { Product } from "@shopify/shopify-api/dist/rest-resources/2022-07/product";
import FlashSaleProduct from "./components/flash-sale-product";
import FeaturedProduct from "./components/featured-product";
import Footer from "./components/footer";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main
        className="relative flex-grow"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="mb-12 md:mb-14 xl:mb-16 px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto">
          <div className="mx-auto col-span-full sm:col-span-5">
            <Image src={Asset1.src} width={1073} height={425}></Image>
          </div>
          <div className="mx-auto col-span-1 sm:col-span-2">
            <Image src={Asset4.src} width={425} height={425}></Image>
          </div>
          <div className="mx-auto col-span-1 sm:col-span-2">
            <Image src={Asset7.src} width={425} height={425}></Image>
          </div>
          <div className="mx-auto col-span-1 sm:col-span-2">
            <Image src={Asset9.src} width={425} height={425}></Image>
          </div>
          <div className="mx-auto col-span-1 sm:col-span-2">
            <Image src={Asset10.src} width={425} height={425}></Image>
          </div>
          <div className="mx-auto col-span-full sm:col-span-5">
            <Image src={Asset11.src} width={1073} height={425}></Image>
          </div>
        </div>
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <div className="mb-12 md:mb-14 xl:mb-16 border border-gray-300 rounded-md pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4 md:px-5 lg:px-7">
            <div className="flex justify-between items-center flex-wrap mb-5 md:mb-6">
              <div className="flex items-center justify-between -mt-2 mb-0">
                <h3 className="text-[#212121] text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">Flash Sale</h3>
              </div>
              <div className="flex items-center space-s-1.5 md:space-s-2.5">
                <div className="text-[#212121] text-10px md:text-xs text-center uppercase">
                  <span className="bg-[#212121] rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
                    160
                  </span>
                  days
                </div>
                <div className="text-[#212121] text-10px md:text-xs text-center uppercase">
                  <span className="bg-[#212121] rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
                    8
                  </span>
                  hours
                </div>
                <div className="text-[#212121] text-10px md:text-xs text-center uppercase">
                  <span className="bg-[#212121] rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
                    5
                  </span>
                  mins
                </div>
                <div className="text-[#212121] text-10px md:text-xs text-center uppercase">
                  <span className="bg-[#212121] rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
                    44
                  </span>
                  secs
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:lg:gap-y-6 2xl:gap-y-8">
              {props.flashSales.map((x, i) => (
                <FlashSaleProduct key={`flash-sale-product-${i}`} product={x}></FlashSaleProduct>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <div className="mb-12 md:mb-14 xl:mb-16">
            <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
              <h3 className="text-[#212121] text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
                Featured Products
              </h3>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-5 xl:gap-7">
              {props.featured.map((x, i) => (
                <FeaturedProduct key={`featured-product-${i}`} hero={i === 0} product={x}></FeaturedProduct>
              ))}
            </div>
          </div>
          <div className="mx-auto mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0">
            <Image width={1800} height={570} src={Asset6.src}></Image>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const flashSales: Product[] = await fetch(
    `${
      process.env.NODE_ENV === "production" ? process.env.VERCEL_URL : "http://localhost:3000"
    }/api/products?collection_id=410918781155`
  ).then((x) => x.json());

  const featured: Product[] = await fetch(
    `${
      process.env.NODE_ENV === "production" ? process.env.VERCEL_URL : "http://localhost:3000"
    }/api/products?collection_id=410943095011`
  ).then((x) => x.json());

  return {
    props: { flashSales, featured }, // will be passed to the page component as props
  };
}
