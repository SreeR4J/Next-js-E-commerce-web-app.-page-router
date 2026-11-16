
"use client";

import React from "react";
import Link from "next/link";
import Cartcount from "./Cartcount";
import { useCart } from "../../context/CartContext";

function Nav() {

  // Get searchTerm and setSearchTerm from Context
  const { searchTerm, setSearchTerm } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-md">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20 gap-6">

          <Link href="/" className="text-3xl font-extrabold tracking-tight text-gray-900">
            Vaangi<span className="text-blue-600">kkoo</span>
          </Link>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/3 bg-gray-100 border border-transparent rounded-full px-5 py-3 text-sm outline-none transition duration-300 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <div className="flex items-center gap-7 text-sm font-semibold text-gray-700">

            <Link href="/" className="hover:text-blue-600 transition duration-300">
              Home
            </Link>

            <Link href="/products" className="hover:text-blue-600 transition duration-300">
              Products
            </Link>

            <Link href="/aboutUs" className="hover:text-blue-600 transition duration-300">
              About Us
            </Link>

            <Link href="/contactus" className="hover:text-blue-600 transition duration-300">
              Contact Us
            </Link>

            <Link href="/login" className="hover:text-blue-600 transition duration-300">
              Login
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition duration-300 shadow-sm"
            >
              🛒 Cart
              <Cartcount />
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Nav;
