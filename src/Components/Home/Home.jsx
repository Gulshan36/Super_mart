import React from "react";
import { Link } from "react-router-dom";
import productsData from "../Product/Product.json"; // ✅ Correct path

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col justify-center items-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Welcome to Our Online Store
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Discover amazing products at unbeatable prices.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/product"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
          >
            More Products
          </Link>
          <Link
            to="/mycart"
            className="px-6 py-3 text-lg font-medium text-white bg-indigo-500 rounded-md shadow-lg hover:bg-indigo-600 transition duration-300"
          >
            View Cart
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-12 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {productsData.slice(0, 8).map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={product.image.startsWith("http") ? product.image : `/images/${product.image}`} 
                alt={product.name}
                className="w-32 h-32 mx-auto object-cover rounded-full"
              />
              <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-2">₹{product.price}</p>
              <Link
                to="/product"
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                View More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
