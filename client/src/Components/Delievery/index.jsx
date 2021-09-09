import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//Components
import DelieveryCarousal from "./DelieveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delievery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect(() => {}, [reduxState.restaurants]);

  return (
    <>
      <DelieveryCarousal />
      {/* <Brand /> */}
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};
export default Delievery;
