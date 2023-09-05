import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  const dispatch = useDispatch();
  function handleClear() {
    dispatch(clearCart());
  }
  return (
    <div>
      <div className="flex justify-between">
        <button
          className="bg-yellow-50 p-3 rounded m-2"
          onClick={() => handleClear()}
        >
          Clear Cart!
        </button>
        <div className="mr-4 my-4 text-lg font-bold">
          <h1 className="font-bold text-lg">total items- {cartItems.length}</h1>
          <h1>Your Total Bill ammount is: {totalPrice} Rs</h1>
        </div>
      </div>

      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <FoodItemCard key={item?.card?.info?.id} {...item?.card} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
