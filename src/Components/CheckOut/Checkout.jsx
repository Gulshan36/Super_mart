import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], totalPrice = 0 } = location.state || {}; // ✅ Retrieve cart data safely

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "cardNumber" || name === "cvv") && !/^\d*$/.test(value)) {
      return;
    }

    if (name === "expiryDate") {
      let formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
      }
      setFormData({ ...formData, [name]: formattedValue });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, cardNumber, expiryDate, cvv } = formData;

    if (cardNumber.length !== 16) {
      toast.error("Card Number must be 16 digits");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      toast.error("Expiry Date must be in MM/YY format");
      return;
    }
    if (cvv.length < 3 || cvv.length > 4) {
      toast.error("CVV must be 3 or 4 digits");
      return;
    }

    toast.success("Payment Successful!", {
      position: "top-right",
      autoClose: 2000,
    });

    setTimeout(() => {
      navigate("/order-success"); // ✅ Redirect to success page
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center">
      <ToastContainer />
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Checkout</h2>

        {/* ✅ Order Summary */}
        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold">Order Summary</h3>
          <ul className="mt-2">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-1">
                <span>{item.name} (x1)</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>

        {/* ✅ Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>
          <div>
            <label className="block">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            />
          </div>
          <div>
            <label className="block">Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength="16"
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              placeholder="Enter 16-digit card number"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block">Expiry Date:</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                maxLength="5"
                required
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2">
              <label className="block">CVV:</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                maxLength="4"
                required
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                placeholder="3 or 4 digits"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
