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
