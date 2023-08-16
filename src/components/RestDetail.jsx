import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constants";
import Shimmer from "./Shimmer";
import "../../index.css";

const RestDetail = () => {
  const params = useParams();
  const { id } = params;
  const [menuList, setMenuList] = useState([]); // [ {name: "Biryani", price: 200}, {name: "Biryani", price: 200}
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

    const data1 = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json1 = await data1.json();
    console.log(
      json1?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setMenuList(
      json1?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restDetail">
      <div className="carddetail">
        <div className="logocontainer">
          <img className={"logo"} src={IMG_CDN + restaurant?.logo} alt="" />
          <h1>{restaurant?.name}</h1>
        </div>
        <h1>{restaurant?.costForTwoMessage}</h1>
        <h2>{restaurant?.cuisines?.join(", ")}</h2>
        <img
          className="cloudimg"
          src={IMG_CDN + restaurant?.cloudinaryImageId}
          alt=""
        />
        <h3>{restaurant?.locality}</h3>
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} Stars</h3>
        <h3>{restaurant?.totalRatingsString}</h3>
      </div>
      <div className="menullist">
        <ul>
          {menuList ? (
            menuList.map((item) => {
              return (
                <li key={item?.card?.info?.id}>
                  <h3>
                    {item?.card?.info?.name +
                      " - " +
                      item?.card?.info?.price / 100 +
                      " RS. "}
                  </h3>
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
    </div>
  );
};

export default RestDetail;
