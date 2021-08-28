import React from "react";

//components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
  return (
    <>
      <Navbar />
      <FoodTab /> 
      <div className="conatiner mx-auto px-4 lg:px-20">
          {props.children}
      </div>
    </>
  );
};

export default HomeLayout;
