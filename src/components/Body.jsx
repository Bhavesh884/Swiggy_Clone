import { useState } from "react";
import RestorentCard from "./RestorentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useGetAllRestaurant from "../utils/useGetAllRestaurant";
import useOnline from "../utils/useOnline.jsx";

export default Body = () => {
  const [searchtext, setsearchtext] = useState("");
  const { allRestaurants, filteredrestaurants, setFilteredrestaurants } =
    useGetAllRestaurant();

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <>
        <h1>Hey! Something seems wrong with your internet</h1>
        <h2>Please check your Internet Connection</h2>
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
      <div className="p-5 my-3 bg-pink-50 rounded-3xl shadow-2xl">
        <input
          type="text"
          className="shadow-xl rounded-full p-3 w-80 focus:bg-green-50"
          value={searchtext}
          placeholder="search your favourite restaurant here..."
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        />
        <button
          className="m-3 p-3  w-24 bg-purple-500 rounded-2xl  text-white hover:bg-purple-800 shadow-lg "
          onClick={() => {
            const data = filterData(allRestaurants, searchtext);
            setFilteredrestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
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
