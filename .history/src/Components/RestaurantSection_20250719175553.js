import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { SWIGGY_API_URL } from "../Utils/const";
import UserContext from "../Utils/Context";
import { FaSearch, FaStar } from "react-icons/fa";

const RestaurantSection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isTopRated, setIsTopRated] = useState(false);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SWIGGY_API_URL);
        const json = await response.json();
        const restaurantsData =
          json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setRestaurants(restaurantsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants;
    if (isTopRated) {
      filtered = filtered.filter((res) => res.info.avgRating > 4.2);
    }
    if (searchText) {
      filtered = filtered.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return filtered;
  }, [restaurants, searchText, isTopRated]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1 className="text-center text-xl font-bold text-red-500 p-8">
        Looks like you're offline. Please check your connection.
      </h1>
    );

  if (restaurants.length === 0) return <Shimmer />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Restaurants Near You
      </h1>
      <p className="text-gray-500 mb-6">
        Discover the best food & drinks in your area.
      </p>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 mb-8 bg-white rounded-xl shadow-md">
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="h-12 w-full pl-10 pr-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            className="h-12 w-full px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Change User Name"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button
          className={`h-12 w-full md:w-auto px-6 flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 ${
            isTopRated
              ? "bg-yellow-400 text-white shadow-lg"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => setIsTopRated(!isTopRated)}
        >
          <FaStar />
          <span>{isTopRated ? "Showing Top Rated" : "Top Rated"}</span>
        </button>
      </div>

      {/* Restaurant Grid */}
      {filteredRestaurants.length === 0 ? (
        <p className="text-center text-xl text-gray-500 mt-10">
          No restaurants match your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredRestaurants.map((restaurant, index) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-fadeInUp"
            >
              <RestaurantCard restData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantSection;
