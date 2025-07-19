import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoLocationSharp, IoCard, IoWallet, IoSparkles } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import {
  clearCart,
  addItemToCart,
  removeItemFromCart,
} from "../Utils/cartSlice";

// --- INNOVATIVE ADDRESS CARD ---
const AddressCard = ({ onSubmit }) => {
  const [address, setAddress] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleGeolocate = () => {
    // Note: This requires browser permission and works on HTTPS
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // You would typically use a geocoding API to convert coords to address
        setAddress(
          `Lat: ${position.coords.latitude.toFixed(
            4
          )}, Lon: ${position.coords.longitude.toFixed(4)}`
        );
      },
      () => {
        alert("Could not get your location. Please enter it manually.");
      }
    );
  };

  const handleSubmit = () => {
    if (address) {
      onSubmit(address);
      setIsSaved(true);
    }
  };

  if (isSaved) {
    return (
      <div className="bg-white p-6 shadow-lg rounded-lg mb-4 w-full md:w-1/2 transition-all duration-300">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <IoLocationSharp className="text-green-500 text-2xl" />
            <div>
              <h1 className="text-md font-semibold">Delivery Address</h1>
              <p className="text-gray-700">{address}</p>
            </div>
          </div>
          <button
            onClick={() => setIsSaved(false)}
            className="text-sm text-blue-500 font-semibold hover:underline"
          >
            Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mb-4 w-full md:w-1/2">
      <div className="flex items-center space-x-4">
        <IoLocationSharp className="text-gray-600 text-xl" />
        <h1 className="text-md font-semibold">Set Delivery Address</h1>
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div className="flex justify-between gap-2 mt-3">
          <button
            className="w-full px-4 py-2 bg-gray-200 text-sm font-semibold rounded-lg hover:bg-gray-300 transition-all"
            onClick={handleGeolocate}
          >
            Use Current Location
          </button>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition-all"
            onClick={handleSubmit}
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

// --- INNOVATIVE PAYMENT CARD ---
const PaymentCard = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const paymentOptions = useMemo(
    () => [
      { id: "credit", label: "Credit Card", icon: <IoCard /> },
      { id: "debit", label: "Debit Card", icon: <IoCard /> },
      { id: "upi", label: "UPI", icon: <IoSparkles /> },
      { id: "wallet", label: "Wallet", icon: <IoWallet /> },
    ],
    []
  );

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mb-4 w-full md:w-1/2">
      <h1 className="text-md font-semibold mb-4">Choose Payment Method</h1>
      <div className="grid grid-cols-2 gap-3">
        {paymentOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setPaymentMethod(option.id)}
            className={`flex items-center justify-center gap-2 p-3 border rounded-lg transition-all ${
              paymentMethod === option.id
                ? "bg-blue-500 text-white ring-2 ring-blue-500"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {option.icon}
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>
      {paymentMethod && (
        <button
          className="w-full px-4 py-2 mt-4 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition-all"
          onClick={() => onSubmit(paymentMethod)}
        >
          Proceed with{" "}
          {paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}
        </button>
      )}
    </div>
  );
};

// --- INNOVATIVE CART SUMMARY ---
const CartSummary = ({ items }) => {
  const dispatch = useDispatch();
  const [lastRemoved, setLastRemoved] = useState(null);

  const cartData = useMemo(() => {
    const itemMap = new Map();
    items.forEach((item) => {
      const id = item.card.info.id;
      if (itemMap.has(id)) {
        itemMap.get(id).quantity++;
      } else {
        itemMap.set(id, { ...item, quantity: 1 });
      }
    });
    return Array.from(itemMap.values());
  }, [items]);

  const totalAmount = cartData.reduce((sum, item) => {
    const price = item.card.info.price || item.card.info.defaultPrice || 0;
    return sum + price * item.quantity;
  }, 0);

  const handleRemoveItem = (item) => {
    dispatch(removeItemFromCart({ id: item.card.info.id }));
    setLastRemoved(item);
    setTimeout(() => setLastRemoved(null), 4000); // "Undo" timeout
  };

  const handleUndoRemove = () => {
    if (lastRemoved) {
      dispatch(addItemToCart(lastRemoved));
      setLastRemoved(null);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Cart Summary</h1>
        {items.length > 0 && (
          <button
            onClick={() => dispatch(clearCart())}
            className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600"
          >
            Clear Cart
          </button>
        )}
      </div>

      {lastRemoved && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 mb-4 rounded-lg flex justify-between items-center text-sm">
          <p>"{lastRemoved.card.info.name}" removed.</p>
          <button onClick={handleUndoRemove} className="font-bold underline">
            UNDO
          </button>
        </div>
      )}

      {cartData.length === 0 ? (
        <p className="text-gray-500">Your cart is beautifully empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartData.map((item) => {
              const { id, name, price, defaultPrice } = item.card.info;
              const itemPrice = (price || defaultPrice || 0) / 100;
              return (
                <li
                  key={id}
                  className="flex justify-between items-center py-3 transition-all duration-300"
                >
                  <div>
                    <p className="text-gray-800 font-medium">{name}</p>
                    <p className="text-sm text-gray-500">
                      ₹{itemPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="p-1 rounded-full hover:bg-gray-200"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="font-semibold w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(addItemToCart(item))}
                      className="p-1 rounded-full hover:bg-gray-200"
                    >
                      <FaPlus size={12} />
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

// --- MAIN CART COMPONENT ---
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const handleAddressSubmit = (address) =>
    console.log("Address submitted:", address);
  const handlePaymentSubmit = (paymentMethod) =>
    console.log("Payment method selected:", paymentMethod);

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
