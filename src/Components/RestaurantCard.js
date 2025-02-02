import React from "react";
import { MdStarRate } from "react-icons/md";
import { CDN_URL } from "../Utils/const";

const RestaurantCard = ({ restData }) => {
  const {
    cloudinaryImageId = "",
    name = "Unknown Restaurant",
    areaName = "Unknown Area",
    avgRating = "N/A",
    cuisines = [],
  } = restData?.info || {};

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all">
      <img
        src={cloudinaryImageId ? `${CDN_URL}${cloudinaryImageId}` : ""}
        alt={name}
        className="w-full h-40 object-cover bg-gray-200"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <div className="mt-2 text-sm text-gray-600">
          <p className="flex items-center text-yellow-500">
            <MdStarRate className="mr-1 text-lg" />
            {avgRating}
          </p>
          <p className="truncate">{cuisines.join(", ")}</p>
          <p>{areaName}</p>
        </div>
      </div>
    </div>
  );
};


export default RestaurantCard;
