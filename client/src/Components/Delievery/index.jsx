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

  useEffect(() => {reduxState.restaurants && setRestaurantList(reduxState.restaurants)}, [reduxState.restaurants]); 

  return (
    <>
      <DelieveryCarousal />
      {/* <Brand /> */}
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in Vijay Nagar
      </h1>
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};

export default Delievery;
