
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Cartcount from "./Cartcount";
import { useCart } from "../../context/CartContext";

function Nav() {
  // Get searchTerm and setSearchTerm from Context
  const { searchTerm, setSearchTerm } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-md">

      {/* NAVBAR */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between gap-3">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="shrink-0 text-2xl font-extrabold tracking-tight text-gray-900 no-underline sm:text-3xl"
          >
            Vaangi<span className="text-blue-600">kkoo</span>
          </Link>

          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-[150px] rounded-full border border-gray-200 bg-gray-50 px-3 py-3 text-xs text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:max-w-xs sm:px-5 sm:text-sm"
          />

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-2 md:flex">

            <Link
              href="/"
              className="rounded-full bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 no-underline transition hover:bg-blue-100"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 no-underline transition hover:bg-blue-50 hover:text-blue-600"
            >
              Products
            </Link>

            <Link
              href="/aboutUs"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 no-underline transition hover:bg-blue-50 hover:text-blue-600"
            >
              About Us
            </Link>

            <Link
              href="/contactus"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 no-underline transition hover:bg-blue-50 hover:text-blue-600"
            >
              Contact Us
            </Link>

            <Link
              href="/login"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-gray-600 no-underline transition hover:bg-blue-50 hover:text-blue-600"
            >
              Login
            </Link>

            {/* DESKTOP CART */}
            <Link
              href="/cart"
              className="ml-2 flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white no-underline shadow-md transition hover:bg-blue-700"
            >
              🛒 Cart
              <Cartcount />
            </Link>

          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-2xl text-gray-700 transition hover:bg-blue-50 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 shadow-lg md:hidden">

          <div className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg bg-blue-50 px-4 py-3 font-semibold text-blue-600 no-underline"
            >
              🏠 Home
            </Link>

            <Link
              href="/products"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 no-underline transition hover:bg-blue-50 hover:text-blue-600"
            >
              🛍️ Products
            </Link>

            <Link
              href="/aboutUs"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 no-underline transition hover:bg-blue-50 hover:text-blue-600"
            >
              ℹ️ About Us
            </Link>

            <Link
              href="/contactus"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 no-underline transition hover:bg-blue-50 hover:text-blue-600"
            >
              📞 Contact Us
            </Link>

            <Link
              href="/login"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 no-underline transition hover:bg-blue-50 hover:text-blue-600"
            >
              👤 Login
            </Link>

            <Link
              href="/cart"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white no-underline transition hover:bg-blue-700"
            >
              <span>🛒 My Cart</span>
              <Cartcount />
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Nav;
