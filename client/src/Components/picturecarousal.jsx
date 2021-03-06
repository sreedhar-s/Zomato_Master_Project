import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";

const PictureCarousalCard = () => {
  return (
    <>
      <div className="w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="https://b.zmtcdn.com/data/pictures/0/18597280/59c953a1be000a54d065694b55b5ecc3.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="w-full h-full absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>

        <div className="absolute w-full left-8 bottom-2 text-white">
          <h4 className="z-10">Onam Special</h4>
          <h6 className="z-10 flex items-center">
            15 Places <RiArrowRightSFill />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarousalCard;
