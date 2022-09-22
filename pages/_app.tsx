import "../styles/globals.css";
import type { AppContext as NextAppContext, AppProps } from "next/app";
import { createContext, useState } from "react";
import { CartItem } from "types";
import Header from "../components/header";
import Footer from "../components/footer";
import App from "next/app";

interface AppContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const AppContext = createContext<AppContextType>({} as any);

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

MyApp.getInitialProps = async (ctx: NextAppContext) => {
  const appProps = await App.getInitialProps(ctx);
  console.log({ appProps });
  return { ...appProps };
};
