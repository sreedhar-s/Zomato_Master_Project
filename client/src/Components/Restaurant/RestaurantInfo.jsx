import React from "react";
import { GoStar } from "react-icons/go";

const RestaurantInfo = (props) => {
  return (
    <>
      <div className="my-4">
        <div className="flex flex-col-reverse md:flex md:flex-row md:items-center justify-between gap-3">
          <h1 className="text-xl md:text-4xl font-semibold md:font-bold">
            {props.name}
          </h1>

          <div className="flex items-center gap-6 text-xs md:text-base">
            <div className="flex items-center gap-2">
              <span className="rounded flex items-center gap-1 text-white font-medium bg-green-600 py-1 px-2">
                {props.restaurantRating}
                <GoStar />
              </span>
              <span>
                <span>
                  <strong>2</strong>
                  <p className="border-dashed border-b-2">Dining Reviews</p>
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded flex items-center gap-1 text-white font-medium bg-green-600 py-1 px-2">
                {props.deliveryRating}
                <GoStar />
              </span>
              <span>
                <span>
                  <strong>2</strong>
                  <p className="border-dashed border-b-2">Delivery Reviews</p>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="text-base md:text-xl text-gray-600">
          <h3>{props.cusine}</h3>
          <h3 className="text-gray-400">{props.address}</h3>
          <h3>
            <span className="text-yellow-500">Open Now</span> - 11am - 8pm
          </h3>
        </div>
      </div>
    </>
  );
};

export default RestaurantInfo;
