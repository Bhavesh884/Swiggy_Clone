import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constants";
import Shimmer from "./Shimmer";

const RestDetail = () => {
  const params = useParams();
  const { id } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestInfo();
  }, []);

  async function getRestInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json?.data);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="carddetail">
        <h1>RestDetail id: {id}</h1>
        <img src={IMG_CDN + restaurant?.logo} alt="" />
        <h1>{restaurant?.name}</h1>
        <h1>{restaurant?.costForTwoMessage}</h1>
        <h2>{restaurant?.cuisines?.join(", ")}</h2>
        <img src={IMG_CDN + restaurant?.cloudinaryImageId} alt="" />
        <h3>{restaurant?.locality}</h3>
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} Stars</h3>
        <h3>{restaurant?.totalRatingsString}</h3>
      </div>
      <div>we will have our menu list here</div>
      {/* {console.log(Object.values())} */}
    </>
  );
};

export default RestDetail;
