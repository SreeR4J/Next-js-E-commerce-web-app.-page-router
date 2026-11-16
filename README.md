# 🛍️ Vaangikkoo - Modern E-Commerce Web App

Vaangikkoo is a modern, responsive e-commerce web application built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. It features product listing, dynamic product detail views, real-time client-side search filtering, and state-managed cart operations powered by React Context.

---

## ✨ Features

- **Dynamic Product Catalog:** Fetches real-time product data using the DummyJSON API with server-side rendering support.
- **Product Details:** Dedicated route (`/products/[productId]`) displaying detailed specifications, ratings, and image previews.
- **Interactive Shopping Cart:** Full cart management (add, increase, decrease, remove) with real-time total price calculations.
- **Instant Search:** Client-side product filtering via navbar search input across product and cart views.
- **Responsive UI:** Clean, mobile-friendly interface designed using Tailwind CSS v4 and modern component styling.
- **Auth & Static Pages:** Pre-built templates for user login, registration, contact inquiry, and about us pages.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Modules
- **Data Source:** [DummyJSON](https://dummyjson.com/) API

---

## 📂 Project Structure

```text
src/
└── app/
    ├── aboutUs/          # About Us page
    ├── cart/             # Shopping cart view & checkout summary
    ├── components/       # Reusable components (Navbar, Footer, Cart Counter)
    ├── contactus/        # Contact form page
    ├── context/          # CartContext (global state management)
    ├── login/            # Authentication: Sign In
    ├── signup/           # Authentication: Register
    ├── products/         # Product catalog & dynamic details route ([productId])
    ├── productCard/      # Shared ProductCard component
    ├── services/         # API abstraction & fetch services
    ├── globals.css       # Global stylesheet & Tailwind directives
    ├── layout.tsx        # Root layout with CartProvider & Navigation
    └── page.tsx          # Homepage with featured products & hero banners