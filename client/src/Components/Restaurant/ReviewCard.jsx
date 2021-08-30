import React from "react";
import { GoStar } from "react-icons/go";
const ReviewCard = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/3e0/8958ed45b8d6ed290e9cd0f55b8563e0.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="Ravikumar Kotha"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">Sreedhar</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3Followers
              </small>
            </div>
          </div>
          <button className="text-zomato-400 border border-zomato-400  py-2 px-3 rounded-lg">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
              3 <GoStar />
            </span>
            <h5 className="font-regular uppercase">Delivery</h5>
            <small className="text-gray-500">3 days ago</small>
          </div>
          <div className="w-full">
              <p className="text-gray-600 font-light text-base">Cannot give a single star.. but without giving a star.. I can't post this.... I have.. received wrong items.. waste outlet..</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
