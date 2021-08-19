import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";

const MobileTab = () => {
  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between gap-5 md:justify-evenly">
        <div className="flex flex-col items-center text-xl">
          <RiShoppingBag3Line />
          <h3 className="text-sm font-semibold">Delievery</h3>
        </div>
        <div className="flex flex-col items-center text-xl">
          <IoFastFoodOutline />
          <h3 className="text-sm font-semibold">Dinning out</h3>
        </div>
        <div className="flex flex-col items-center text-xl">
          <IoNutritionOutline />
          <h3 className="text-sm font-semibold">Nutrition</h3>
        </div>
        <div className="flex flex-col items-center text-xl">
          <BiDrink />
          <h3 className="text-sm font-semibold">Nightlife</h3>
        </div>
      </div>
    </>
  );
};

const LargeTabs = () => {
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
        <LargeTabs />
      </div>
    </>
  );
};

export default FoodTab;
