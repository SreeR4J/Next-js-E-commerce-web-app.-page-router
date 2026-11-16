import React from "react";
import { ProductServices } from "../../services/product-service";
import ProductClient from "../../components/productClient";

export default function Page({ products }: any) {
  return <ProductClient products={products} />;
}

export async function getServerSideProps() {
  const products = await ProductServices.getProducts();
  return { props: { products } };
}