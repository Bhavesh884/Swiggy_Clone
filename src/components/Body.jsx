import { useState } from "react";
import RestorentCard from "./RestorentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetAllRestaurant from "../utils/useGetAllRestaurant";
import useOnline from "../utils/useOnline.jsx";

export default Body = () => {
  const [searchtext, setsearchtext] = useState("");
  const { allRestaurants, filteredrestaurants } = useGetAllRestaurant();

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <>
        <h1>Hey! Something seems wrong with your internet</h1>
        <h2>Please check your Internet Connection</h2>{" "}
      </>
    );
  }
  if (!allRestaurants) return null;
  // if (filteredrestaurants.length === 0)
  //   return <h1>No matching Restaurent found</h1>;

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
        {allRestaurants.length === 0 ? window.location.reload() : null}
        {filteredrestaurants.map((res) => {
          return (
            <Link to={"/restaurants/" + res?.info?.id} key={res?.info?.id}>
              <RestorentCard {...res} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
