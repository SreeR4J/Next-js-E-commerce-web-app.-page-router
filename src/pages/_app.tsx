
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { CartProvider } from "../context/CartContext";
import "./products/ProductCardStyle.css";
import Navigation from "../components/nav/Navigation";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Head>
        <title>Vaangikkoo | Online Shopping</title>
        <meta
          name="description"
          content="Welcome to My Store. Explore our products."
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}