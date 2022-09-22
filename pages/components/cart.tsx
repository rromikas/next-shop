import { FunctionComponent, useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import CartItem from "./cart-item";
import { AppContext } from "pages/_app";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const Cart: FunctionComponent<CartProps> = ({ open, onClose }) => {
  const { cart, setCart } = useContext(AppContext);
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="flex flex-col w-full h-full justify-between">
        <div className="w-full flex justify-between items-center relative px-5 md:px-7 py-0.5 border-b border-gray-100">
          <h2 className="font-bold text-xl md:text-2xl m-0 text-heading">Shopping cart</h2>
          <button
            onClick={onClose}
            className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-6 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
            aria-label="close"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="text-black mt-1 md:mt-0.5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow">
          {cart.map((x, i) => (
            <CartItem
              remove={() =>
                setCart((prev) => {
                  let arr = [...prev];
                  arr.splice(i, 1);
                  return arr;
                })
              }
              key={`cart-item-${i}`}
              item={x}
            ></CartItem>
          ))}
        </div>
        <div className="flex flex-col px-5 md:px-7 pt-2 pb-5 md:pb-7">
          <a
            className="w-full px-5 py-3 md:py-4 flex items-center justify-center bg-[#212121] rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 hover:bg-gray-600"
            href="/checkout"
          >
            <span className="w-full pe-5 -mt-0.5 py-0.5">Proceed To Checkout</span>
            <span className="ms-auto flex-shrink-0 -mt-0.5 py-0.5">
              <span className="border-s border-white pe-5 py-0.5" />
              $32.00
            </span>
          </a>
        </div>
      </div>
    </Drawer>
  );
};

export default Cart;
