import React from "react";
import Slider from "react-slick";

// components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow,PrevArrow } from "../CarousalArrow";

const DeliveryCarousal = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/8/90038/ba0ace0f3ce2794fbd54cc762ea3de8f_o2_featured_v2.jpg",
      title: "Barbeque Nation",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/1/90391/5bc645dbf2bed815eb65c8e5f1d7b5ea_o2_featured_v2.jpg",
      title: "Rumann",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/1/19214961/9efcc0b0e84aa0c9fe4abb63c05006e8_o2_featured_v2.jpg",
      title: "Biriyani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/1/91531/3376a153e5ef965c3ce6c5b59bcd5fb1_o2_featured_v2.jpg",
      title: "spicy Meal",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/7/96567/28af963836000c803df5b0aee0ef7638_o2_featured_v2.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/4/19550124/99183c0f3ee9cadbb48fbedcb8b80737_o2_featured_v2.jpg",
      title: "Fish",
    },
  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    NextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
  };

  return (
    <>
      <h1 className="text-xl mb-4 font-semibold px-5">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
            {categories.map((food) => (
              <DeliveryCategory {...food} />
            ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousal;
