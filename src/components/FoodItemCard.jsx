import React from "react";

const FoodItemCard = ({ info }) => {
  {
    console.log(info);
  }
  return (
    <section className="w-60 h-[380px] bg-pink-50 rounded-2xl m-4 p-1 shadow-xl hover:scale-110 transition">
      <img
        className="w-60 h-60 p-3 mr-4 rounded-3xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          info?.imageId
        }
        alt={"Image not uploaded by restaurant"}
      ></img>
      <h2 className="font-bold text-lg m-2 truncate">{info?.name}</h2>
      <h3 className="text-md mx-2 my-1">{info?.category}</h3>
      <h4 className="font-semibold text-md mx-2">{info?.price / 100}</h4>
    </section>
  );
};

export default FoodItemCard;
