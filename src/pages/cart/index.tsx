
"use client";

import { useCart } from "../../context/CartContext";
// import "./Cart.css";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    IncreaseQuantity,
    decreaseQuantity,
    total,searchTerm
  } = useCart();

  const filteredProducts = cart.filter((product: any) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function removeProductAlert(product: any) {
    alert(`${product.title} removed from cart`);
    removeFromCart(product.id);
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            My <span className="text-blue-600">Cart</span>
          </h1>
          <p className="text-gray-500 mt-3 text-base">
            Review your selected products
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-20 px-5 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-3">
              Add some products to get started!
            </p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

              {filteredProducts.map((item: any) => (
                <div
                  className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition duration-300"
                  key={item.id}
                >
                  <div className="w-full sm:w-40 h-40 bg-gray-50 rounded-xl flex items-center justify-center p-4 shrink-0">
                    <img
                      src={item.images?.[0] || item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 w-full text-center sm:text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                      {item.category}
                    </p>

                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-xl font-bold text-green-600 mt-3">
                      ₹{Number(item.price).toFixed(2)}
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 mt-5">

                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          className="w-10 h-9 text-lg font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>

                        <span className="w-12 text-center font-bold text-gray-800">
                          {item.quantity}
                        </span>

                        <button
                          className="w-10 h-9 text-lg font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition"
                          onClick={() => IncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="text-sm font-semibold text-red-500 hover:text-red-700 hover:underline transition"
                        onClick={() => removeProductAlert(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-center sm:text-right shrink-0">
                    <p className="text-xs text-gray-400 uppercase font-semibold mb-2">
                      Subtotal
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            <div className="flex justify-end mt-8">
              <div className="w-full sm:w-96 bg-white rounded-2xl shadow-sm border border-gray-100 p-7">

                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-gray-600 font-medium">
                    Total
                  </span>

                  <span className="text-2xl font-extrabold text-blue-600">
                    ₹{Number(total).toFixed(2)}
                  </span>
                </div>

              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
