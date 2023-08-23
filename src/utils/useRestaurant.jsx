import React, { useEffect, useState } from "react";
const useRestaurant = (resId) => {
  const [allMenuList, setAllMenuList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestInfo();
  }, []);

  async function getRestInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setMenuList(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setAllMenuList(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }
  const allData = { menuList, restaurant, setMenuList, allMenuList };
  return allData;
};
export default useRestaurant;
