import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";


const MobileTab = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <IoFastFoodOutline />,
      name: "Dining Out",
    },
    {
      id: `night`,
      icon: <BiDrink />,
      name: "Night life",
    },
    {
      id: `nutri`,
      icon: <IoNutritionOutline />,
      name: "Nutrition",
    },
  ]);
  const { type } = useParams();

  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`}>
            <div
              className={
                type === items.id
                  ? "flex flex-col relative items-center text-xl text-zomato-400 "
                  : "flex flex-col items-center text-xl "
              }
            >
              <div
                className={
                  type === items.id &&
                  "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                }
              />
              {items.icon}
              <h5 className="text-sm">{items.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const LargeTab = () => {
  return (
    <>
      <div className="container mx-auto px-20 hidden lg:flex gap-3">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 rounded-full p-4">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp"
              alt="Delievery"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Delievery</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 rounded-full p-4">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
              alt="Dining Out"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Dining Out</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 rounded-full p-4">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
              alt="Nightlife"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Nightlife</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 rounded-full p-4">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png?output-format=webp"
              alt="Nutrition"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Nutrition</h3>
        </div>
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <div>
        <MobileTab />
        <LargeTab />
      </div>
    </>
  );
};

export default FoodTab;
