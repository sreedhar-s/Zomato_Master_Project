import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//components
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";
import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";
import FoodItem from "../../Components/Restaurant/Order-Online/FoodItem";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full flex">
        <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full md:3/4 flex flex-col gap-3">
          <div className="px-3">
            <h2 className="text-xl font-semibold">Order online</h2>
            <h4 className="flex gap-3 items-center font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section>
            <FoodItem
              image="https://b.zmtcdn.com/data/dish_photos/d23/b61bd95f61310d91b811cbc407f8fd23.jpg?fit=around|130:130&crop=130:130;*,*"
              title="Kheema Masala"
              rating="4"
              price="₹1000"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </section>
          <section>
            <FoodItem
              image="https://b.zmtcdn.com/data/dish_photos/d23/b61bd95f61310d91b811cbc407f8fd23.jpg?fit=around|130:130&crop=130:130;*,*"
              title="Kheema Masala"
              rating="4"
              price="₹1000"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </section>
          <section>
            <FoodItem
              image="https://b.zmtcdn.com/data/dish_photos/d23/b61bd95f61310d91b811cbc407f8fd23.jpg?fit=around|130:130&crop=130:130;*,*"
              title="Kheema Masala"
              rating="4"
              price="₹1000"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </section>
          <section>
            <FoodItem
              image="https://b.zmtcdn.com/data/dish_photos/d23/b61bd95f61310d91b811cbc407f8fd23.jpg?fit=around|130:130&crop=130:130;*,*"
              title="Kheema Masala"
              rating="4"
              price="₹1000"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;
