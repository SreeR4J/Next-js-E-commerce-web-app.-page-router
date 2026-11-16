
import React from 'react'

function aboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
          About <span className="text-yellow-300">Vaangikkoo</span>
        </h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg leading-relaxed">
          Your trusted online shopping destination. We make shopping simple,
          convenient, and enjoyable for everyone.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

          <div>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Making Online Shopping Better
            </h2>
            <p className="text-gray-600 leading-8 mb-5">
              Welcome to Vaangikkoo! We are an online shopping platform
              dedicated to providing a smooth and enjoyable shopping
              experience. Our goal is to make it easy for customers to
              discover and purchase products they love.
            </p>
            <p className="text-gray-600 leading-8">
              From browsing products to adding items to your cart,
              we focus on making every step simple, convenient,
              and user-friendly.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-10 flex items-center justify-center min-h-72">
            <div className="text-center">
              <div className="text-7xl mb-5">🛍️</div>
              <h3 className="text-2xl font-bold text-gray-900">
                Shop Smart. Shop Easy.
              </h3>
              <p className="text-gray-500 mt-3">
                Everything you need, all in one place.
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Why Choose Vaangikkoo?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We aim to make your shopping experience better with simple
            and useful features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Easy Shopping
            </h3>
            <p className="text-gray-500 text-sm leading-6">
              Browse and find your favorite products with ease.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Great Products
            </h3>
            <p className="text-gray-500 text-sm leading-6">
              Explore a variety of products in one place.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Simple Experience
            </h3>
            <p className="text-gray-500 text-sm leading-6">
              Enjoy a smooth and user-friendly shopping journey.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Customer Focus
            </h3>
            <p className="text-gray-500 text-sm leading-6">
              Your shopping experience matters to us.
            </p>
          </div>

        </div>

        <div className="bg-gray-900 rounded-3xl px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">
            Start Shopping with Vaangikkoo!
          </h2>
          <p className="text-gray-300 mb-8">
            Discover products and enjoy a simple online shopping experience.
          </p>
          <a
            href="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-300"
          >
            Explore Products →
          </a>
        </div>

      </div>
    </div>
  )
}

export default aboutUs
