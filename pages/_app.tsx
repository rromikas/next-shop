import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { CartItem } from "types";
import Header from "./components/header";
import Footer from "./components/footer";

interface AppCotnextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const AppContext = createContext<AppCotnextType>({} as any);

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <AppContext.Provider value={{ cart, setCart }}>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </AppContext.Provider>
  );
}

export default MyApp;
