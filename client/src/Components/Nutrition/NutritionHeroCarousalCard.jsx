import React from "react";

const NutritionHeroCarousalCard = (props) => {
  return (
    <div className="w-full md:h-72 h-48">
      <img
        src={props.image}
        alt="medicine"
        className="w-full h-full"
      />
    </div>
  );
};

export default NutritionHeroCarousalCard;