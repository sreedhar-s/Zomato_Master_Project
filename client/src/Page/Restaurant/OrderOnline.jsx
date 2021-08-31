import React from "react";

//components
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";
import FloatMenuBtn from "../../Components/Restaurant/Order-Online/FloatMenuBtn";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full">
        <MenuListContainer />
        <FloatMenuBtn />
      </div>
    </>
  );
};

export default OrderOnline;
