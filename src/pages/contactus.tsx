
import React from 'react'

function contactus() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Contact <span className="text-yellow-300">Us</span>
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Have a question or need help? We'd love to hear from you.
          Get in touch with the Vaangikkoo team.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl font-extrabold text-gray-900 mb-5">
              We'd Love to Hear From You
            </h2>

            <p className="text-gray-600 leading-7 mb-10">
              Whether you have questions about products, orders, or your
              shopping experience, our team is here to help.
              Send us a message and we'll be happy to assist you.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-500 text-sm">
                    support@Vaangikkoo.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-500 text-sm">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Our Location</h3>
                  <p className="text-gray-500 text-sm">
                    Kerala, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">

            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              Send Us a Message
            </h2>

            <p className="text-gray-500 text-sm mb-8">
              Fill out the form below and let us know how we can help.
            </p>

            <form className="space-y-5">

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

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
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default contactus
