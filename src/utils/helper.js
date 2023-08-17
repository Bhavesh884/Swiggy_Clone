export function filterData(restaurants, searchtext) {
  const filterData = restaurants.filter((restaurent) =>
    restaurent?.info?.name?.toLowerCase()?.includes(searchtext?.toLowerCase())
  );
  return filterData;
}
