"use client";

import Link from "next/link";
import React, { useState } from "react";

function ProductCard(props: any) {
  const prod = props.product;

  const [selectProduct, setSelectProduct] = useState({});

  const selectprod = () => {
    console.log("Selected product:", prod);
    setSelectProduct(prod);
  };

  return (
    <Link
      href={`/products/${prod.id}`}
      className="product-link"
      onClick={selectprod}
    >
      <div className="product-card">
        {/* Product Image */}
        <div className="product-image-box">
          <img
            src={prod.thumbnail}
            alt={prod.title}
            className="product-image"
          />
        </div>

        {/* Product Details */}
        <div className="product-card-body">
          <p className="product-category">{prod.category}</p>

          <h5 className="product-title">{prod.title}</h5>

          {/* Product Rating */}
          <div className="product-rating">
            <span className="stars">★★★★★</span>
            <span className="rating-number">
              {prod.rating?.toFixed(1) ?? "4.5"}
            </span>
          </div>

          {/* Product Price */}
          <div className="product-price">
            ${Number(prod.price).toFixed(2)}
          </div>

          {/* View Product */}
          <div className="view-product-btn">
            <span>View Product</span>
            <span className="product-arrow">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;