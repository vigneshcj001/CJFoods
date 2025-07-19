import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";
import { IoLocationSharp, IoFastFood } from "react-icons/io5";
import { RiDoorOpenFill, RiDoorClosedFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import { ShimmerHeader, ShimmerMenuItem } from "./ShimmerMenu";
import RestaurantCategory from "../Components/RestaurantCategory";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const { data, loading, error } = useRestaurantMenu(restaurantId);
  const [searchText, setSearchText] = useState("");
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  if (loading) {
    return (
      <div className="bg-gray-100 p-6 min-h-screen">
        <ShimmerHeader />
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recommended for You
          </h2>
          <ul className="divide-y divide-gray-200">
            {Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <ShimmerMenuItem />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  // Extract restaurant info
  const restaurantInfo = data?.cards?.find(
    (card) =>
      card.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  )?.card?.card?.info;

  const categories =
    data?.cards
      ?.find((card) => card.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((category) => ({
        name: category?.card?.card?.title || "Unknown Category",
        itemCards:
          category?.card?.card?.itemCards?.filter(
            (item) =>
              item?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Dish"
          ) || [],
      }))
      .filter((category) => category.itemCards.length > 0) || [];

  // Search Filtering
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      itemCards: category.itemCards.filter((item) =>
        item.card.info.name
          .toLowerCase()
          .includes(searchText.toLowerCase().trim())
      ),
    }))
    .filter((category) => category.itemCards.length > 0);

  const {
    name,
    city,
    locality,
    cuisines,
    avgRating,
    isOpenNow = false,
  } = restaurantInfo || {};

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      {/* Restaurant Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 shadow-md rounded-md mb-6">
        <div>
          <h1 className="text-2xl font-bold capitalize text-gray-800">
            {name || "Restaurant"}
          </h1>
          <h3 className="text-gray-600 capitalize flex items-center mt-2">
            <IoLocationSharp className="text-xl text-gray-500 mr-2" />
            {`${city || "Unknown City"}, ${locality || "Unknown Locality"}`}
          </h3>
        </div>
        <div className="sm:w-1/2 flex flex-col items-end">
          <p className="text-gray-600 flex items-center mb-1 capitalize">
            <IoFastFood className="text-lg text-gray-500 mr-2" />
            {cuisines?.join(", ") || "Various Cuisines"}
          </p>
          <div className="flex items-center text-yellow-500 text-lg mb-1">
            <MdStarRate className="text-2xl mr-1" />
            <span>{avgRating || "N/A"}</span>
          </div>
          <p className="text-gray-800 flex items-center">
            {isOpenNow ? (
              <RiDoorOpenFill className="text-green-500 text-xl mr-2" />
            ) : (
              <RiDoorClosedFill className="text-red-500 text-xl mr-2" />
            )}
            {isOpenNow ? "Open Now" : "Closed"}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-6 shadow-md rounded-md mb-6">
        <input
          type="text"
          placeholder="Search for a dish by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Display Filtered Categories */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category}
            isOpen={openCategoryIndex === index}
            onToggle={() =>
              setOpenCategoryIndex(openCategoryIndex === index ? null : index)
            }
          />
        ))
      ) : (
        <p className="text-gray-600 text-center">No matching dishes found.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
