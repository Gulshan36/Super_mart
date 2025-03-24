import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate, useOutletContext } from "react-router-dom";

function MyCart() {
  // ✅ Safe destructuring with fallback values to prevent errors
  const outletContext = useOutletContext() || {};
  const { cartCount = 0, setCartCount = () => {} } = outletContext;

  const [price, setPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [qtyMap, setQtyMap] = useState(new Map());
  const [productMap, setProductMap] = useState(new Map());

  useEffect(() => {
    const cookies = new Cookies();
    const existingProductInCart = cookies.get("cart_products") || [];
    setCartItems(existingProductInCart);
  }, []);

  useEffect(() => {
    const qtyTracker = new Map();
    const productTracker = new Map();
    let totalPrice = 0;

    cartItems.forEach((product) => {
      const productQty = qtyTracker.get(product.name) || 0;
      qtyTracker.set(product.name, productQty + 1);
      productTracker.set(product.name, product);
      totalPrice += product.price;
    });

    setQtyMap(qtyTracker);
    setProductMap(productTracker);
    setPrice(totalPrice);
    setCartCount(cartItems.length); // ✅ Update cart count safely
  }, [cartItems, setCartCount]);

  // ✅ Remove only one instance of a product
  const removeOneProduct = (productName) => {
    const updatedCart = [...cartItems];
    const indexToRemove = updatedCart.findIndex((product) => product.name === productName);

    if (indexToRemove !== -1) {
      updatedCart.splice(indexToRemove, 1);
    }

    setCartItems(updatedCart);
    new Cookies().set("cart_products", updatedCart, { path: "/" });
    setCartCount(updatedCart.length); // ✅ Update cart count safely
  };

  // ✅ Remove all instances of a product
  const removeAllProduct = (productName) => {
    const updatedCart = cartItems.filter((product) => product.name !== productName);

    setCartItems(updatedCart);
    new Cookies().set("cart_products", updatedCart, { path: "/" });
    setCartCount(updatedCart.length); // ✅ Update cart count safely
  };

  const navigate = useNavigate();

  // ✅ Handle Buy button click
  const handleBuy = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add some products first!");
      return;
    }
    navigate("/checkout", { state: { cartItems, totalPrice: price } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          My Shopping Cart
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product List */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Array.from(productMap.entries()).map(([prodTitle, data]) => (
                <div
                  key={prodTitle}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                >
                  <img
                    src={data.image}
                    className="w-32 h-32 object-cover rounded-lg"
                    alt={data.name}
                  />
                  <h3 className="text-lg font-semibold mt-3">{data.name}</h3>
                  <p className="text-gray-600 mt-1">
                    Quantity: <strong>{qtyMap.get(data.name)}</strong>
                  </p>
                  <p className="text-gray-600 mt-1">
                    Price: ₹{data.price} × {qtyMap.get(data.name)} ={" "}
                    <strong>₹{data.price * qtyMap.get(data.name)}</strong>
                  </p>
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => removeOneProduct(data.name)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition"
                    >
                      Remove One
                    </button>
                    <button
                      onClick={() => removeAllProduct(data.name)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                    >
                      Remove All
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Summary & Checkout */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Order Summary
            </h3>
            <div className="space-y-2">
              {Array.from(productMap.entries()).map(([prodTitle, obj1]) => (
                <div key={prodTitle} className="flex justify-between">
                  <p>{obj1.name}</p>
                  <p>₹{obj1.price * qtyMap.get(obj1.name)}</p>
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-lg">
              <p>Subtotal</p>
              <p>₹{price}</p>
            </div>
            <button
              onClick={handleBuy}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
