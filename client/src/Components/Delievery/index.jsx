import React, {useState} from "react";

//Components
import DelieveryCarousal from "./DelieveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delievery = () => {

  const [restaurantList, setRestaurantList] = useState([
      {
          _id:"123456",
          photos:["https://b.zmtcdn.com/data/pictures/4/90384/ba50a5176f9b3abf84a4b734543474a2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
          title:"Pizza Hut",
          cusine:["Pizza","Desserts"," Beverages"],
          averageCost: 100,
          isPro: true,
          isOff: 80,
          durationOfdelievery: 47,
          restaurantReviewValue: 4.1,
      },
      {
        _id:"123456-2",
        photos:["https://b.zmtcdn.com/data/pictures/chains/3/19460393/cc4d417dc119eeaaac7c1cb773f067cd.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
        title:"Raju Gari Biryani",
        cusine:["Biryani","North Indian"],
        averageCost: 100,
        isPro: true,
        isOff: 80,
        durationOfdelievery: 47,
        restaurantReviewValue: 4.1,
    },
    {
        _id:"123456-3",
        photos:["https://b.zmtcdn.com/data/pictures/chains/3/19460393/cc4d417dc119eeaaac7c1cb773f067cd.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
        title:"Raju Gari Biryani",
        cusine:["Biryani","North Indian"],
        averageCost: 100,
        isPro: true,
        isOff: 80,
        durationOfdelievery: 47,
        restaurantReviewValue: 4.1,
    },      
  ]);
  return (
    <>
      <DelieveryCarousal />
      {/* <Brand /> */}
      <div className="flex justify-between flex-wrap">
          {
            restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant} key={restaurant.id} />
            ))
          }
      </div>
    </>
  );
};
export default Delievery;
