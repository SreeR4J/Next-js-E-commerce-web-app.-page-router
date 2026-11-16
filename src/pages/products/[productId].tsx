
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductServices } from "../../services/product-service";
import { useCart } from "../../context/CartContext";

export default function Page() {
  const router = useRouter();

  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);

  const productId = Number(router.query.productId);

  useEffect(() => {
    async function getProduct() {
      try {
        const data = await ProductServices.getProductsById(productId);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    if (router.isReady && productId > 0) {
      getProduct();
    }
  }, [router.isReady, productId]);

  if (!product) {
    return <h2 className="min-h-screen flex items-center justify-center text-2xl font-semibold text-gray-500">Loading...</h2>;
  }

  function handleAddToCart() {
    addToCart(product);
    alert("Product Added Successfully");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        <div className="product-details-image-box bg-gray-50 rounded-2xl flex items-center justify-center p-8 min-h-[350px]">
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className="max-w-full max-h-[450px] w-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="product-details-content flex flex-col justify-center py-4">
          <p className="details-category text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">{product.category}</p>

          <h1 className="details-title text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">{product.title}</h1>

          <div className="details-rating flex items-center gap-3 mb-6">
            <span className="details-stars text-yellow-400 text-xl tracking-wider">★★★★★</span>
            <span className="details-rating-number text-sm font-semibold text-gray-600">
              {typeof product.rating === "number"
                ? product.rating.toFixed(1)
                : product.rating?.rate?.toFixed(1) || "4.5"}
            </span>
          </div>

          <div className="details-divider border-t border-gray-200 mb-6"></div>

          <h3 className="description-heading text-lg font-bold text-gray-900 mb-3">Product Description</h3>

          <p className="details-description text-gray-600 leading-7 text-sm md:text-base mb-6">{product.description}</p>

          <p className="details-price text-3xl font-extrabold text-green-600 mb-7">₹{Number(product.price).toFixed(2)}</p>

          <button onClick={handleAddToCart} className="add-to-cart-btn w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3">
            Add to Cart <span className="cart-arrow text-xl">→</span>
          </button>
        </div>  
      </div>
    </div>
  );
}
