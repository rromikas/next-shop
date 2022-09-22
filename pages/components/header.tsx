import { FunctionComponent, useContext, useState } from "react";
import Image from "next/image";
import Logo from "assets/Logo.svg";
import Cart from "./cart";
import { AppContext } from "pages/_app";
import Link from "next/link";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useContext(AppContext);
  return (
    <>
      <div className="md:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4">
        <button
          aria-label="Menu"
          className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={22} height={14} viewBox="0 0 25.567 18">
            <g transform="translate(-776 -462)">
              <rect
                id="Rectangle_941"
                data-name="Rectangle 941"
                width="12.749"
                height="2.499"
                rx="1.25"
                transform="translate(776 462)"
                fill="currentColor"
              />
              <rect
                id="Rectangle_942"
                data-name="Rectangle 942"
                width="25.567"
                height="2.499"
                rx="1.25"
                transform="translate(776 469.75)"
                fill="currentColor"
              />
              <rect
                id="Rectangle_943"
                data-name="Rectangle 943"
                width="17.972"
                height="2.499"
                rx="1.25"
                transform="translate(776 477.501)"
                fill="currentColor"
              />
            </g>
          </svg>
        </button>
        <button
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
          aria-label="search-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17px"
            height="18px"
            viewBox="0 0 18.942 20"
            className="md:w-4 xl:w-5 md:h-4 xl:h-5"
          >
            <path
              d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
              transform="translate(-367.297 -371.285)"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <a className="flex-shrink-0" href="https://chawkbazar.vercel.app/">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" viewBox="0 0 17.996 20.442">
            <path
              d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
              transform="translate(-30.619 0.236)"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.4"
            />
          </svg>
        </a>
        <button
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
          aria-label="cart-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 20 20"
            className="md:w-4 xl:w-5 md:h-4 xl:h-5"
          >
            <path
              d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z"
              transform="translate(-2 -2)"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <span className="cart-counter-badge flex items-center justify-center bg-[#212121] text-white absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold">
            0
          </span>
        </button>
        <button className="flex-shrink-0 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="20px" viewBox="0 0 16.577 18.6">
            <path
              d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z"
              transform="translate(7723.3 -2914.703)"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.6"
            />
          </svg>
        </button>
      </div>
      <header id="siteHeader" className="w-full h-16 sm:h-20 lg:h-24 relative z-20 is-scrolling">
        <div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 px-4 md:px-0 lg:px-6 py-4 lg:py-6 transition duration-200 ease-in-out">
          <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
            <button
              aria-label="Menu"
              className="menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none"
            >
              <span className="menuIcon">
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </span>
            </button>
            <div className="cursor-pointer">
              <Link href="/">
                <Image src={Logo.src} layout="fixed" width={95} height={35}></Image>
              </Link>
            </div>
            <nav className="w-full relative hidden lg:flex md:ms-6 xl:ms-10 ml-4">
              <div className="group cursor-pointer py-7 relative">
                <a
                  className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
                  href="https://chawkbazar.vercel.app/"
                >
                  Demos
                  <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </span>
                </a>
                <div className="subMenu shadow-header bg-gray-200 absolute start-0 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100">
                  <ul className="text-body text-sm py-5">
                    <li className="relative">
                      <a
                        className="flex items-center justify-between px-5 xl:px-7 py-3 xl:py-3.5 hover:text-heading hover:bg-gray-300"
                        href="https://chawkbazar.vercel.app/"
                      >
                        Modern
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 px-5 xl:px-7 py-3 xl:py-3.5 hover:text-heading hover:bg-gray-300"
                        href="https://chawkbazar.vercel.app/standard"
                      >
                        Standard
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 px-5 xl:px-7 py-3 xl:py-3.5 hover:text-heading hover:bg-gray-300"
                        href="https://chawkbazar.vercel.app/minimal"
                      >
                        Minimal
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 px-5 xl:px-7 py-3 xl:py-3.5 hover:text-heading hover:bg-gray-300"
                        href="https://chawkbazar.vercel.app/vintage"
                      >
                        Vintage
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 px-5 xl:px-7 py-3 xl:py-3.5 hover:text-heading hover:bg-gray-300"
                        href="https://chawkbazar.vercel.app/classic"
                      >
                        Classic
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 px-5 xl:px-7 py-3 xl:py-3.5 hover:text-heading hover:bg-gray-300"
                        href="https://chawkbazar.vercel.app/trendy"
                      >
                        Trendy
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 px-5 xl:px-7 py-3 xl:py-3.5 hover:text-heading hover:bg-gray-300"
                        href="https://chawkbazar.vercel.app/elegant"
                      >
                        Elegant
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="flex items-center justify-between py-2 px-5 xl:px-7 py-3 xl:py-3.5 hover:text-heading hover:bg-gray-300"
                        href="https://chawkbazar.vercel.app/refined"
                      >
                        Refined
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menuItem group cursor-pointer py-7 ">
                <a
                  className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
                  href="https://chawkbazar.vercel.app/search?q=men-wear"
                >
                  Men Wear
                  <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </span>
                </a>
                <div className="megaMenu shadow-header bg-gray-200 absolute -start-20 xl:start-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <div className="grid grid-cols-5">
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=top-wear"
                        >
                          Top Wear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=t-shit-shirtrt"
                        >
                          T-Shirt
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=casual-shirts"
                        >
                          Casual Shirts
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=formal-shirts"
                        >
                          Formal Shirts
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=blazwers-coats"
                        >
                          Blazwers &amp; Coats
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=suits"
                        >
                          Suits
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=jackets"
                        >
                          Jackets
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=belt-scarves"
                        >
                          Belt, Scarves &amp; More
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=watches-wearables"
                        >
                          Watches &amp; Wearables
                        </a>
                      </li>
                    </ul>
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=western-wear"
                        >
                          Western Wear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=dresses"
                        >
                          Dresses
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=jumpsuits"
                        >
                          Jumpsuits
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=topx-t-shirt"
                        >
                          Tops, T-Shirts &amp; Shirts
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=shorts-skirts"
                        >
                          Shorts &amp; Skirts
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=shurgs"
                        >
                          Shurgs
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=blazers"
                        >
                          Blazers
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=plus-size"
                        >
                          Plus Size
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=sunglasses-frames"
                        >
                          Sunglasses &amp; Frames
                        </a>
                      </li>
                    </ul>
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=footwear"
                        >
                          Footwear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=flats"
                        >
                          Flats
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=casual-shoes"
                        >
                          Casual Shoes
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=heels"
                        >
                          Heels
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=boots"
                        >
                          Boots
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=sports-active-wear"
                        >
                          Sports &amp; Active Wear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=clothing"
                        >
                          Clothing
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=footwear"
                        >
                          Footwear
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=sports-accessories"
                        >
                          Sports Accessories
                        </a>
                      </li>
                    </ul>
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=lingerie-sleepwear"
                        >
                          Lingerie &amp; Sleepwear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=bra"
                        >
                          Bra
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=briefs"
                        >
                          Briefs
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=sleepwear"
                        >
                          Sleepwear
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=belt-scarves"
                        >
                          Belt, Scarves &amp; More
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=makeup"
                        >
                          Makeup
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=skincare"
                        >
                          Skincare
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=premium-beauty"
                        >
                          Premium Beauty
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=lipsticks"
                        >
                          Lipsticks
                        </a>
                      </li>
                    </ul>
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=gadgets"
                        >
                          Gadgets
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=smart-wearables"
                        >
                          Smart Wearables
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=headphones"
                        >
                          Headphones
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=jewellers"
                        >
                          Jewellers
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=fashion-jewellers"
                        >
                          Fashion Jewellers
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=fine-jewellers"
                        >
                          Fine Jewellers
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=backpacks"
                        >
                          Backpacks
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=handbags-wallets"
                        >
                          Handbags &amp; Wallets
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="menuItem group cursor-pointer py-7 ">
                <a
                  className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
                  href="https://chawkbazar.vercel.app/search?q=women-wear"
                >
                  Women Wear
                  <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </span>
                </a>
                <div className="megaMenu shadow-header bg-gray-200 absolute -start-20 xl:start-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <div className="grid grid-cols-5">
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=gadgets"
                        >
                          Gadgets
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=smart-wearables"
                        >
                          Smart Wearables
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=headphones"
                        >
                          Headphones
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=jewellers"
                        >
                          Jewellers
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=fashion-jewellers"
                        >
                          Fashion Jewellers
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=fine-jewellers"
                        >
                          Fine Jewellers
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=backpacks"
                        >
                          Backpacks
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=handbags-wallets"
                        >
                          Handbags &amp; Wallets
                        </a>
                      </li>
                    </ul>
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=top-wear"
                        >
                          Top Wear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=t-shit-shirtrt"
                        >
                          T-Shirt
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=casual-shirts"
                        >
                          Casual Shirts
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=formal-shirts"
                        >
                          Formal Shirts
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=blazwers-coats"
                        >
                          Blazwers &amp; Coats
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=suits"
                        >
                          Suits
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=jackets"
                        >
                          Jackets
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=belt-scarves"
                        >
                          Belt, Scarves &amp; More
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=watches-wearables"
                        >
                          Watches &amp; Wearables
                        </a>
                      </li>
                    </ul>
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=footwear"
                        >
                          Footwear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=flats"
                        >
                          Flats
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=casual-shoes"
                        >
                          Casual Shoes
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=heels"
                        >
                          Heels
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=boots"
                        >
                          Boots
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=sports-active-wear"
                        >
                          Sports &amp; Active Wear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=clothing"
                        >
                          Clothing
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=footwear"
                        >
                          Footwear
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=sports-accessories"
                        >
                          Sports Accessories
                        </a>
                      </li>
                    </ul>
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=western-wear"
                        >
                          Western Wear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=dresses"
                        >
                          Dresses
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=jumpsuits"
                        >
                          Jumpsuits
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=topx-t-shirt"
                        >
                          Tops, T-Shirts &amp; Shirts
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=shorts-skirts"
                        >
                          Shorts &amp; Skirts
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=shurgs"
                        >
                          Shurgs
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=blazers"
                        >
                          Blazers
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=plus-size"
                        >
                          Plus Size
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=sunglasses-frames"
                        >
                          Sunglasses &amp; Frames
                        </a>
                      </li>
                    </ul>
                    <ul className="even:bg-[rgb(239,241,245)] pb-7 2xl:pb-8 pt-6 2xl:pt-7">
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=lingerie-sleepwear"
                        >
                          Lingerie &amp; Sleepwear
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=bra"
                        >
                          Bra
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=briefs"
                        >
                          Briefs
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=sleepwear"
                        >
                          Sleepwear
                        </a>
                      </li>
                      <li className="mb-1.5">
                        <a
                          className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=belt-scarves"
                        >
                          Belt, Scarves &amp; More
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=makeup"
                        >
                          Makeup
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=skincare"
                        >
                          Skincare
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=premium-beauty"
                        >
                          Premium Beauty
                        </a>
                      </li>
                      <li className="border-b border-gray-300 pb-3.5 mb-3">
                        <a
                          className="text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300"
                          href="https://chawkbazar.vercel.app/search?q=lipsticks"
                        >
                          Lipsticks
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="menuItem group cursor-pointer py-7 ">
                <a
                  className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
                  href="https://chawkbazar.vercel.app/search"
                >
                  Search
                </a>
              </div>
              <div className="menuItem group cursor-pointer py-7 ">
                <a
                  className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
                  href="https://chawkbazar.vercel.app/shops"
                >
                  Shops
                </a>
              </div>
              <div className="menuItem group cursor-pointer py-7 relative">
                <a
                  className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-black"
                  href="https://chawkbazar.vercel.app/"
                >
                  Pages
                  <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="transition duration-300 ease-in-out transform group-hover:-rotate-180"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </nav>

            <div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
              <button
                className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform px-4"
                aria-label="search-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17px"
                  height="18px"
                  viewBox="0 0 18.942 20"
                  className="md:w-4 xl:w-5 md:h-4 xl:h-5"
                >
                  <path
                    d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
                    transform="translate(-367.297 -371.285)"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <div className="-mt-0.5 flex-shrink-0">
                <button className="text-sm xl:text-base text-heading font-semibold focus:outline-none px-4">Sign In</button>
              </div>
              <Cart open={cartOpen} onClose={() => setCartOpen(false)}></Cart>
              <button
                onClick={() => setCartOpen(true)}
                className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform px-4"
                aria-label="cart-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 20 20"
                  className="md:w-4 xl:w-5 md:h-4 xl:h-5"
                >
                  <path
                    d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z"
                    transform="translate(-2 -2)"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="text-xs w-4 h-4 flex items-center justify-center bg-[#212121] text-white absolute -top-2 right-2 rounded-full font-bold">
                  {cart.length}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
