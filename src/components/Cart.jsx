import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  function handleClear() {
    dispatch(clearCart());
  }
  return (
    <div>
      <button className="bg-yellow-50" onClick={() => handleClear()}>
        Clear Cart!
      </button>
      <h1 className="font-bold text-lg">total items- {cartItems.length}</h1>;
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <FoodItemCard key={item?.card?.info?.id} {...item?.card} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
