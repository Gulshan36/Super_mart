import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productsData from "../Product/Product.json";
import { Link } from "react-router-dom";

const ProductList = ({ setCartCount }) => {
  const navigate = useNavigate();

  const handleSubmit = (index) => {
    const product = productsData[index];

    // Show toast message when adding to cart
    toast.success(`${product.name} has been added to the cart`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    // Manage cart in cookies
    const cookies = new Cookies();
    let existingProductInCart = cookies.get("cart_products") || [];

    existingProductInCart.push(product);
    cookies.set("cart_products", existingProductInCart, { path: "/" });

    setCartCount(existingProductInCart.length); // ✅ Update cart count in Header

    // Navigate to cart if the user confirms
    setTimeout(() => {
      if (window.confirm("Want to buy this product?")) {
        navigate("/mycart");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      <ToastContainer /> {/* ✅ Add ToastContainer to show notifications */}

      <h2 className="text-4xl font-extrabold text-white mb-6">Our Products</h2>

      <Link to="/" className="px-6 py-3 mb-6 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
        Back to Home
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {productsData.map((product, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition">
            <img src={product.image} alt={product.name} className="w-40 h-40 mx-auto object-cover rounded-lg border-2 border-gray-600" />
            <h3 className="mt-4 text-xl font-semibold text-white">{product.name}</h3>
            <p className="text-gray-400 mt-2">{product.description}</p>
            <p className="mt-2 font-bold text-orange-400">Price: ₹{product.price}</p>

            <button onClick={() => handleSubmit(index)} className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
