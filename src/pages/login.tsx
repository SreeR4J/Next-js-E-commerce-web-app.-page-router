
import React from 'react'
import Link from 'next/link'

function login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-extrabold text-gray-900">
            Vaangi<span className="text-blue-600">kkoo</span>
          </Link>

          <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
            Welcome Back!
          </h1>

          <p className="text-gray-500 text-sm">
            Login to your account and continue shopping.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />
              Remember me
            </label>

            <Link
              href="/forgotPassword"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            Login →
          </button>

        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="text-blue-600 font-bold hover:text-blue-700"
          >
            Sign Up
          </Link>
        </p>

        <div className="border-t border-gray-100 mt-7 pt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-blue-600 transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  )
}

export default login
