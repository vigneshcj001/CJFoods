import { useState, useEffect } from "react";
import { MENU_API_URL } from "../Utils/const";

const useRestaurantMenu = (restaurantId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API_URL + restaurantId);
        if (!response.ok) {
          throw new Error("Failed to fetch restaurant menu");
        }
        const json = await response.json();
        setData(json?.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [restaurantId]);

  return { data, loading, error };
};

export default useRestaurantMenu;
