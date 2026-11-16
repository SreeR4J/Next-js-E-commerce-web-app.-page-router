"use client";

import { useCart } from "../context/CartContext";
import ProductCard from "./productCard";

export default function ProductClient({ products }: any) {
  const { searchTerm } = useCart();

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-red-500">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
