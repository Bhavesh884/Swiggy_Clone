import { useParams } from "react-router-dom";
import { IMG_CDN } from "../constants";
import Shimmer from "./Shimmer";
import "../../index.css";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";

const RestDetail = () => {
  const { id } = useParams();
  const { restaurant, menuList } = useRestaurant(id);

  const isOnline = useOnline();
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
          <h1 className="mx-4 font-bold text-3xl">{restaurant?.name}</h1>
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
          <ul className="flex flex-wrap items-center justify-between">
            {menuList ? (
              menuList.map((item) => {
                return (
                  <li
                    className="m-4 bg-green-50 w-96"
                    key={item?.card?.info?.id}
                  >
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
