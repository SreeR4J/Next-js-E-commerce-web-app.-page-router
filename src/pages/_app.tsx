import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import "./products/ProductCardStyle.css"
import Navigation from "../components/nav/Navigation"
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </CartProvider>
  );
}
