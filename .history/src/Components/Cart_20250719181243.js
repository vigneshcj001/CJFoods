import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { clearCart, removeItemFromCart } from "../Utils/cartSlice"; // Make sure to import actions

// AddressCard Component (No changes needed)
const AddressCard = ({ onSubmit }) => {
  const [address, setAddress] = useState("");
  const handleSubmit = () => {
    onSubmit(address);
    setAddress("");
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

// PaymentCard Component (No changes needed)
const PaymentCard = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
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
    setPaymentMethod("");
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

// --- THIS IS THE CORRECTED COMPONENT ---
const CartSummary = ({ items }) => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    // Dispatching with the correct payload format { id: ... }
    dispatch(removeItemFromCart({ id: item.card.info.id }));
  };

  const totalAmount = items.reduce((sum, item) => {
    const price = item.card.info.price || item.card.info.defaultPrice || 0;
    return sum + price;
  }, 0);

  return (
    <div className="bg-white p-6 shadow-lg rounded-md w-full md:w-1/2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Cart Summary</h1>
        {items.length > 0 && (
          <button
            onClick={handleClearCart}
            className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Conditional Rendering: Show items or an empty message */}
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {items.map((item) => {
              const { id, name, price, defaultPrice } = item.card.info;
              const itemPrice = (price || defaultPrice || 0) / 100;
              return (
                <li key={id} className="flex justify-between items-center py-2">
                  <span className="text-gray-800">{name}</span>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">
                      ₹{itemPrice.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="text-red-500 font-bold hover:text-red-700"
                      aria-label={`Remove ${name}`}
                    >
                      ×
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span>₹{(totalAmount / 100).toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Cart Component (Main component, no changes needed here)
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
        <div className="flex flex-col flex-1 space-y-4">
          <AddressCard onSubmit={handleAddressSubmit} />
          <PaymentCard onSubmit={handlePaymentSubmit} />
        </div>
        <div className="flex-1">
          <CartSummary items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
