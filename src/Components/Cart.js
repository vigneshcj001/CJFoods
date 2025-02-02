import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
// AddressCard Component
const AddressCard = ({ onSubmit }) => {
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    onSubmit(address);
    setAddress(""); // Clear input field after submission
  };

  return (
    <div className="flex items-start space-x-4 bg-white p-6 shadow-lg rounded-md mb-4 w-full md:w-1/2">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
        <IoLocationSharp className="text-white text-xl" />
      </div>
      <div className="flex-1">
        <h1 className="text-md font-semibold">Home</h1>
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
      </div>
    </div>
  );
};

// PaymentCard Component
const PaymentCard = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  // Memoize payment options to prevent unnecessary re-renders
  const paymentOptions = useMemo(
    () => [
      { value: "credit", label: "Credit Card" },
      { value: "debit", label: "Debit Card" },
      { value: "upi", label: "UPI" },
    ],
    []
  );

  const handleSubmit = () => {
    onSubmit(paymentMethod);
    setPaymentMethod(""); // Reset selection after submission
  };

  return (
    <div className="flex items-start space-x-4 bg-white p-6 shadow-lg rounded-md mb-4 w-full md:w-1/2">
      <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
        <MdPayment className="text-white text-xl" />
      </div>
      <div className="flex-1">
        <h1 className="text-md font-semibold">Payment</h1>
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
      </div>
    </div>
  );
};

// CartSummary Component
const CartSummary = ({ items }) => (
  <div className="bg-white p-6 shadow-lg rounded-md w-full md:w-1/2">
    <h1 className="text-xl font-bold">Cart Summary</h1>
    H1
  </div>
);

// Cart Component
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddressSubmit = (address) => {
    console.log("Address submitted:", address);
  };

  const handlePaymentSubmit = (paymentMethod) => {
    console.log("Payment method selected:", paymentMethod);
  };

  return (
    <div>
      <h1 className="font-bold text-center text-2xl mb-6">Cart</h1>
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 ml-6 md:ml-48 mt-11">
        {/* Left Section: Address and Payment Cards */}
        <div className="flex flex-col flex-1 space-y-4">
          <AddressCard onSubmit={handleAddressSubmit} />
          <PaymentCard onSubmit={handlePaymentSubmit} />
        </div>

        {/* Right Section: Cart Summary */}
        <div className="flex-1">
          <CartSummary items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
