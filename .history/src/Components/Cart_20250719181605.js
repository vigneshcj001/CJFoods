import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { motion } from "framer-motion"; // Add animation library

// AddressCard Component
const AddressCard = ({ onSubmit }) => {
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!address) return;
    onSubmit(address);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setAddress("");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-start space-x-4 bg-white p-6 shadow-lg rounded-md mb-4 w-full md:w-1/2"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
        <IoLocationSharp className="text-white text-xl" />
      </div>
      <div className="flex-1">
        <h1 className="text-md font-semibold">Delivery Address</h1>
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className="px-4 py-2 mt-3 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition-all"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {success && (
          <p className="text-green-600 text-sm mt-2">Address Saved!</p>
        )}
      </div>
    </motion.div>
  );
};

// PaymentCard Component
const PaymentCard = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [success, setSuccess] = useState(false);

  const paymentOptions = useMemo(
    () => [
      { value: "credit", label: "Credit Card" },
      { value: "debit", label: "Debit Card" },
      { value: "upi", label: "UPI" },
    ],
    []
  );

  const handleSubmit = () => {
    if (!paymentMethod) return;
    onSubmit(paymentMethod);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setPaymentMethod("");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-start space-x-4 bg-white p-6 shadow-lg rounded-md mb-4 w-full md:w-1/2"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
        <MdPayment className="text-white text-xl" />
      </div>
      <div className="flex-1">
        <h1 className="text-md font-semibold">Payment Method</h1>
        <select
          className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select payment method</option>
          {paymentOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <button
          className="px-4 py-2 mt-3 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition-all"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {success && (
          <p className="text-green-600 text-sm mt-2">Payment Method Saved!</p>
        )}
      </div>
    </motion.div>
  );
};

// CartSummary Component (Innovative)
const CartSummary = ({ items }) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 shadow-lg rounded-md w-full md:w-96"
    >
      <h1 className="text-xl font-bold mb-4">Cart Summary</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {items.map((item, idx) => (
            <li key={idx} className="py-2 flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 border-t pt-4 font-semibold flex justify-between">
        <span>Total:</span>
        <span>₹{totalPrice.toFixed(2)}</span>
      </div>
    </motion.div>
  );
};

// Main Cart Component
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddressSubmit = (address) => {
    console.log("Address submitted:", address);
  };

  const handlePaymentSubmit = (paymentMethod) => {
    console.log("Payment method selected:", paymentMethod);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="font-bold text-center text-3xl mb-10">🛒 Your Cart</h1>
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 max-w-6xl mx-auto">
        {/* Left: Address and Payment */}
        <div className="flex flex-col space-y-6 flex-1">
          <AddressCard onSubmit={handleAddressSubmit} />
          <PaymentCard onSubmit={handlePaymentSubmit} />
        </div>

        {/* Right: Summary */}
        <div className="flex-1">
          <CartSummary items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
