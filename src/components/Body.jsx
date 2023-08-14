import { useState, useEffect } from "react";
import RestorentCard from "./RestorentCard";
// import { restaurantlist } from "../constants.js";
import Shimmer from "./Shimmer";

function filterData(restaurants, searchtext) {
  const filterData = restaurants.filter((restaurent) =>
    restaurent?.info?.name?.toLowerCase()?.includes(searchtext?.toLowerCase())
  );
  return filterData;
}

export default Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filteredrestaurants, setFilteredrestaurants] = useState([]);

  useEffect(() => {
    //API call....
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=10584&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;
  if (filteredrestaurants.length === 0)
    return <h1>No matching Restaurent found</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchtext}
          placeholder="search..."
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(allRestaurants, searchtext);
            setFilteredrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restorant-list">
        {filteredrestaurants.map((res) => {
          return <RestorentCard {...res} key={res?.info?.id} />;
          // return <RestorentCard {...res.data} key={index} />;
        })}
      </div>
    </>
  );
};
