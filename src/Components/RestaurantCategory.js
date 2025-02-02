import React from "react";
import { IMG_ITEMS_URL } from "../Utils/const";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Utils/cartSlice";

const RestaurantCategory = ({ data, isOpen, onToggle }) => {
  const { name, itemCards = [] } = data;

  const dispatch = useDispatch();
  const handleADDItemToCart = (item) => {
    dispatch(addItemToCart(item));
  };
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="text-xl font-semibold text-gray-800">
          {name} ({itemCards.length})
        </h2>
        <span className="text-gray-600">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <ul className="mt-4 divide-y divide-gray-200">
          {itemCards.map((item) => {
            const {
              id,
              name,
              description,
              imageId,
              pricingModels,
              defaultPrice,
              price,
            } = item.card.info;

            const finalPrice =
              pricingModels?.[0]?.price || defaultPrice || price || 0;

            return (
              <li key={id} className="flex items-center justify-between py-4">
                <img
                  src={`${IMG_ITEMS_URL}${imageId}`}
                  alt={name || "Menu Item"}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 mx-6">
                  <h3 className="text-lg font-medium">{name}</h3>
                  <p className="text-sm text-gray-600">
                    {description || "No description."}
                  </p>
                  <span className="text-lg font-bold text-green-500">
                    ₹{finalPrice / 100}
                  </span>
                </div>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => handleADDItemToCart(item)}
                >
                  ADD
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
