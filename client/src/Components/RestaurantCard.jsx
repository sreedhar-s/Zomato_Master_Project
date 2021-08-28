import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantCard = (props) => {
  return (
    <>
      <div className="bg-white p-3 mb-4 w-full rounded-2xl transition duration-700 ease-in-out hover:shadow-lg lg:w-1/3 md:w-1/2">
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute flex items-end justify-between w-full bottom-2">
            <div className="flex flex-col gap-2 items-start">
              {props.isPro && (
                <span className="bg-zomato-500 text-white px-2 py-1 rounded text-sm">Pro extra 10% off</span>
              )}
              {props.isOff && (
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">₹{`${props.isOff}`} OFF</span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 p-1 rounded mr-3">{props.durationOfdelievery} min</span>
          </div>
          <img
            src={props.photos.length && props.photos[0]}
            alt="food"
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="my-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">{props.title}</h4>
            <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">
              {props.restaurantReviewValue} <AiTwotoneStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <p>{props.cusine.join(", ")}</p>
            <p>₹{props.averageCost} for one</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;