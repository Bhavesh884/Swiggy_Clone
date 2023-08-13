import { useState, useEffect } from "react";
import RestorentCard from "./RestorentCard";
import { restaurantlist } from "../constants.js";

function filterData(restaurants, searchtext) {
  const filterData = restaurants.filter((restaurent) =>
    restaurent.data.name.includes(searchtext)
  );
  return filterData;
}

export default Body = () => {
  //   let searchtext = "xyz";
  const [searchtext, setsearchtext] = useState("");
  const [restaurants, setrestaurants] = useState(restaurantlist);
  useEffect(() => {
    //API call....
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  }
  return (
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
            const data = filterData(restaurants, searchtext);
            setrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restorant-list">
        {restaurants.map((res) => {
          return <RestorentCard {...res.data} key={res.data.id} />;
        })}
      </div>
    </>
  );
};
