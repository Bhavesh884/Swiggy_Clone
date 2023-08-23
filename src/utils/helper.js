export function filterData(restaurants, searchtext) {
  const filterData = restaurants.filter((restaurent) =>
    restaurent?.info?.name?.toLowerCase()?.includes(searchtext?.toLowerCase())
  );
  return filterData;
}
export function filterMenu(menuList, searchtext) {
  const filterData = menuList.filter((menu) =>
    menu?.card?.info?.name?.toLowerCase()?.includes(searchtext?.toLowerCase())
  );
  return filterData;
}
