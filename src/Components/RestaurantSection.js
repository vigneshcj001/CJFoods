import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { SWIGGY_API_URL } from "../Utils/const";
import UserContext from "../Utils/Context";

const RestaurantSection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      const restaurantsData =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (restaurantsData) {
        setRestaurants(restaurantsData);
        setFilteredRestaurants(restaurantsData);
      } else {
        console.error("No restaurant data found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleFilter = () => {
    setFilterActive(!filterActive);
    if (!filterActive) {
      const filtered = restaurants.filter((res) => res.info.avgRating > 4.2);
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    if (!text.trim()) {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((res) =>
        res.info.name.toLowerCase().includes(text)
      );
      setFilteredRestaurants(filtered);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1 className="text-center text-xl">Looks like you're offline.</h1>;
  
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full px-4">
      <h1 className="text-2xl font-bold px-12 hover:before:content-['CJ'] hover:before:text-blue-500">
        Foods
      </h1>
      <hr className="border-gray-300 my-4" />
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <input
          type="text"
          className="h-10 w-full sm:w-72 px-4 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={handleSearch}
        />
        <div>
          <input
            type="text"
            className="h-10 w-full sm:w-72 px-4 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="User Name"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button
          className="h-10 w-full sm:w-36 bg-gray-200 font-semibold rounded-lg hover:bg-blue-500 hover:text-white"
          onClick={toggleFilter}
        >
          {filterActive ? "Show All" : "Top Rated"}
        </button>
      </div>
      {filteredRestaurants.length === 0 ? (
        <p className="text-center mt-6">No restaurants available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
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
