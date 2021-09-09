import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

//components
import FoodItem from "./FoodItem";

const CartSM = ({ toggle }) => {
  return (
    <>
      <div className="md:hidden flex items-center justify-between">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <small className="flex items-center gap-2 " onClick={toggle}>
              1 Item <MdArrowDropUp />
            </small>
          </div>
          <h4>
            ₹300 <sub>(plus tax)</sub>
          </h4>
        </div>
        <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg">
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
};

const CartLg = ({ toggle }) => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between container px-10 mx-auto">
        <div className="flex items-center gap-2">
          <span
            className="border bg-white border-gray-300 p-1 rounded"
            onClick={toggle}
          >
            <MdArrowDropUp />
          </span>
          <h4 className="text-xl">Your orders (1)</h4>
        </div>
        <div className="flex items-center gap-3 font-medium">
          <h4 className="text-lg">Subtotal ₹300</h4>
          <button className="flex items-center text-lg font-light h-10 gap-1 bg-zomato-400 px-3 py-1 text-white rounded-lg">
            Continue <IoMdArrowDropright />
          </button>
        </div>
      </div>
    </>
  );
};

const CartContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);
  return (
    <>
      {isOpen && (
        <div className="fixed w-full overflow-y-scroll h-48 bg-white z-10 bottom-16 p-2 container mx-auto px-20">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Your orders</h3>
            <IoIosClose onClick={closeCart} />
          </div>
          <hr className="my-2" />
          <div className="flex flex-col gap-2 ">
            <FoodItem
              name="Chicken Biryani [Family Pack]"
              quantity="3"
              price="120"
            />
            <FoodItem
              name="Chicken Biryani [Family Pack]"
              quantity="3"
              price="120"
            />
            <FoodItem
              name="Chicken Biryani [Family Pack]"
              quantity="3"
              price="120"
            />
            <FoodItem
              name="Chicken Biryani [Family Pack]"
              quantity="3"
              price="120"
            />
          </div>
        </div>
      )}
      <div className="fixed w-full bg-white z-10 p-2 px-3 bottom-0">
        <CartSM toggle={toggleCart} />
        <CartLg toggle={toggleCart} />
      </div>
    </>
  );
};

export default CartContainer;
