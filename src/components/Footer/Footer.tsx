import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
      <footer className="bg-gray-900 py-12 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

            {/* Brand */}
            <div>

              <h2 className="text-3xl font-bold">
                Vaangi<span className="text-blue-400">kkoo</span>
              </h2>

              <p className="mt-4 max-w-sm leading-relaxed text-gray-400">
                Your one-stop destination for quality products
                and a better shopping experience.
              </p>

            </div>

            {/* Quick Links */}
            <div>

              <h3 className="mb-4 text-lg font-bold">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 text-gray-400">

                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>

                <Link href="/products" className="transition hover:text-white">
                  Products
                </Link>

                <Link href="/aboutUs" className="transition hover:text-white">
                  About Us
                </Link>

                <Link href="/cart" className="transition hover:text-white">
                  My Cart
                </Link>

              </div>

            </div>

            {/* Contact */}
            <div>

              <h3 className="mb-4 text-lg font-bold">
                Contact Us
              </h3>

              <p className="text-gray-400">
                Email: support@vaangikkoo.com
              </p>

              <p className="mt-2 text-gray-400">
                Customer Support: 24/7
              </p>

            </div>

          </div>

          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            © 2026 Vaangikkoo. All Rights Reserved.
          </div>

        </div>
      </footer>
  )
}

export default Footer