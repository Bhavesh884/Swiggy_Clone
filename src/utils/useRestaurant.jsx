import React, { useEffect, useState } from "react";
const useRestaurant = (resId) => {
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
    console.log(json?.data);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);

    const data1 = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
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
  const allData = { menuList, restaurant };
  return allData;
};
export default useRestaurant;
