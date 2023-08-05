import { useState } from "react";
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
