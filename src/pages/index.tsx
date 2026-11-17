
import React from "react";
import Link from "next/link";
import ProductCard from "../components/productCard";
import { ProductServices } from "../services/product-service";

interface HomeProps {
  products: any[];
}

export default function Home({ products }: HomeProps) {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">

          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-4">
              Welcome to Vaangikkoo
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover Your
              <span className="text-blue-600"> Perfect </span>
              Shopping Experience
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Explore the latest products at amazing prices.
              Find everything you need in one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/products"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Shop Now →
              </Link>

              <Link
                href="#featuredproducts"
                className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-white transition"
              >
                Featured Products
              </Link>
            </div>

            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-500 text-sm">Products</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-gray-500 text-sm">Support</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900"
              alt="Online shopping"
              className="w-full max-w-lg h-80 md:h-[450px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {[
            {
              icon: "🚚",
              title: "Free Delivery",
              desc: "On selected orders",
            },
            {
              icon: "🔒",
              title: "Secure Payment",
              desc: "Safe and secure checkout",
            },
            {
              icon: "↩️",
              title: "Easy Returns",
              desc: "Hassle-free returns",
            },
            {
              icon: "🎧",
              title: "24/7 Support",
              desc: "We're always here to help",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>


      {/* CATEGORY SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold">EXPLORE</p>
            <h2 className="text-3xl font-bold mt-2 text-gray-900">
              Shop By Category
            </h2>
            <p className="text-gray-500 mt-3">
              Find products that match your style.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {[
              {
                name: "Beauty",
                image:
                  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
              },
              {
                name: "Electronics",
                image:
                  "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
              },
              {
                name: "Fashion",
                image:
                  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
              },
              {
                name: "Accessories",
                image:
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
              },
            ].map((category) => (
              <Link
                href="/products"
                key={category.name}
                className="group relative h-48 md:h-64 rounded-2xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>


      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16" id="featuredproducts">

        <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
          <div>
            <p className="text-blue-600 font-semibold">OUR COLLECTION</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Featured Products
            </h2>
            <p className="text-gray-500 mt-2">
              Discover our popular products.
            </p>
          </div>

          <Link
            href="/products"
            className="text-blue-600 font-semibold hover:text-blue-800"
          >
            View All Products →
          </Link>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            Products are currently unavailable.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product: any) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </section>


      {/* PROMOTIONAL BANNER */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-blue-600 rounded-3xl px-8 py-12 md:p-16 text-center text-white">

          <p className="uppercase tracking-widest text-blue-100 font-semibold">
            Special Shopping Experience
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Upgrade Your Lifestyle Today!
          </h2>

          <p className="text-blue-100 mt-5 max-w-xl mx-auto">
            Explore our collection and discover amazing products
            for your everyday needs.
          </p>

          <Link
            href="/products"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Start Shopping →
          </Link>

        </div>
      </section>


    </main>
  );
}


// Fetch products from DummyJSON API
export async function getServerSideProps() {
  try {
    const products = await ProductServices.getProducts();

    return {
      props: {
        products: products || [],
      },
    };
  } catch (error) {
    console.error("Error fetching homepage products:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}
