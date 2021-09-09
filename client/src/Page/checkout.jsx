import React from "react";
import { BsShieldLockFill } from "react-icons/bs";

//components
import FoodItem from "../Components/Cart/FoodItem";
import AddressList from "../Components/Checkout/AddressList";

const Checkout = () => {
  const address = [
    {
      name: "Home",
      address: "India",
    },
    {
      name: "Gym",
      address: "India",
    },
    {
      name: "Office",
      address: "India",
    },
  ];
  return (
    <div className="my-3 flex flex-col gap-3 items-center">
      <h1 className="text-xl md:text-2xl text-center font-bold">Checkout</h1>
      <div className="md:w-3/5 w-full rounded-lg shadow-lg bg-white py-3 flex flex-col items-center">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="w-full flex flex-col items-center gap-2">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex w-full flex-col items-center text-gray-400">
            <h4>Dominno's Pizza</h4>
            <small>Garden Restaurant S D Road, Secunderabad</small>
          </div>
          <div className="my-4 px-4 flex flex-col gap-2 w-full md:w-3/5">
            <FoodItem name="pizza" quantity={3} price={300} />
            <FoodItem name="pizza" quantity={3} price={300} />
            <FoodItem name="pizza" quantity={3} price={300} />
          </div>
          <div className="flex flex-col gap-3 w-full md:w-3/5">
            <h4 className="text-xl font-semibold">Choose Address</h4>
            <AddressList address={address} />
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 w-full px-4 md:w-4/5 md:px-0 my-4 md:my-8 text-white h-14 font-medium text-lg bg-zomato-400 rounded-lg">
          Pay Securely <BsShieldLockFill />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
