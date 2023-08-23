import { useState, useEffect } from "react";
const useGetAllRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredrestaurants] = useState([]);
  useEffect(() => {
    //API call....
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const allData = {
    allRestaurants,
    filteredrestaurants,
    setFilteredrestaurants,
  };
  return allData;
};

export default useGetAllRestaurant;
