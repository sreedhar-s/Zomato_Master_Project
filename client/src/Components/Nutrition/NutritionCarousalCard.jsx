import React from "react";

const NutritionCard = ({ image, title }) => {
  return (
    <div className="overflow-hidden">
        <div className="bg-white shadow-lg rounded-md w-24 h-full px-3 md:px-4 md:py-3 md:w-56">
          <div className="w-full md:h-36 h-12">
            <img
              src={image}
              alt="food"
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          <div>
            <h3 className="text-sm my-1 text-center font-light md:text-xl">
              {title}
            </h3>
          </div>
        </div>
    </div>
  );
};

const NutritionCarousalCard = (props) => {
  return (
    <>
      <NutritionCard {...props} />
    </>
  );
};
export default NutritionCarousalCard;
