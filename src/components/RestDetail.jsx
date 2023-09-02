import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constants";
import Shimmer from "./Shimmer";
import "../../index.css";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import { filterMenu } from "../utils/helper";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestDetail = () => {
  const { id } = useParams();
  const { restaurant, menuList, setMenuList, allMenuList } = useRestaurant(id);
  const isOnline = useOnline();
  const [searchtext, setsearchtext] = useState("");
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  if (!isOnline) {
    return (
      <>
        <h1>Hey! Something seems wrong with your internet</h1>
        <h2>Please check your Internet Connection</h2>{" "}
      </>
    );
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="carddetail relative">
      <div className="flex justify-between items-center bg-pink-50 mt-4 mb-2 mx-3 shadow-md rounded-3xl">
        <div className="flex w-80 h-32 justify-center items-center">
          <img
            className="w-24 shadow-lg rounded-full"
            src={IMG_CDN + restaurant?.logo}
            alt=""
          />
          <h1 className="mx-4 font-bold text-2xl w-96">{restaurant?.name}</h1>
        </div>
        <div className="flex flex-col mx-5 ">
          <h1 className="font-bold text-2xl my-3">
            {restaurant?.costForTwoMessage}
          </h1>
          <h2 className="font-bold text-lg ">
            {restaurant?.cuisines?.join(", ")}
          </h2>
        </div>
      </div>
      <div className="flex flex-wrap-reverse justify-between relative">
        <div className="bg-pink-50 rounded-3xl shadow-lg p-4 mx-5 w-2/3 h-[500px] overflow-auto scroll-smooth">
          <input
            className="ml-[38%] shadow-xl rounded-full p-2.5 w-56 text-sm my-2 focus:bg-yellow-50"
            type="text"
            value={searchtext}
            placeholder="search your favourite food here..."
            onChange={(e) => {
              setsearchtext(e.target.value);
              let data;
              if (e.target.value === "") data = allMenuList;
              else data = filterMenu(allMenuList, searchtext);
              setMenuList(data);
            }}
          />
          <ul className="flex flex-wrap items-center justify-between">
            {menuList ? (
              menuList.map((item) => {
                return (
                  <li
                    className="m-4 bg-blue-50 w-96"
                    key={item?.card?.info?.id}
                  >
                    <div className="flex justify-between">
                      <h3>
                        {item?.card?.info?.name +
                          " - " +
                          item?.card?.info?.price / 100 +
                          " RS. "}
                      </h3>
                      <button
                        className="p-2 m-3 bg-green-100"
                        onClick={() => handleAddItems(item)}
                      >
                        Add
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <>
                <h1>Sorry!</h1>
                <h2>No Menu List Available by Restaurant</h2>
              </>
            )}
          </ul>
        </div>
        <div className="bg-pink-50 rounded-3xl shadow-lg p-4 mx-5 w-96 h-[500px] absolute top-0 right-0 ">
          <img
            className="w-96 h-80 rounded-3xl mb-2"
            src={IMG_CDN + restaurant?.cloudinaryImageId}
            alt=""
          />
          <h3 className="font-bold text-xl">{restaurant?.locality}</h3>
          <h3 className="font-semibold text-lg">{restaurant?.areaName}</h3>
          <h3 className="font-semibold text-lg">{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} Stars</h3>
          <h3>{restaurant?.totalRatingsString}</h3>
        </div>
      </div>
    </div>
  );
};

export default RestDetail;
