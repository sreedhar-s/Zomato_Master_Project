import React from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightSFill } from "react-icons/ri";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

//Components
import MenuCollections from "../../Components/Restaurant/MenuCollections";
import MenuSimilarRestaurantCard from "../../Components/Restaurant/MenuSimilarRestaurantCard";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import ReviewCard from "../../Components/Restaurant/ReviewCard";
import MapView from "../../Components/Restaurant/MapView";

const Overview = () => {
  const { id } = useParams();
  const settings = {
    arrows:true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <RiArrowRightSFill />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollections
              menuTitle="Menu"
              pages="3"
              image="https://b.zmtcdn.com/data/menus/470/18356470/cbc627de0e75a600708623a8bcef9079.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
            />
          </div>
          <h4 className="text-lg font-medium">Cusines</h4>
          <div className="flex flex-wrap gap-2">
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹300 for two people (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/4/19684494/01a18ba9c9cc7201b1c5c93cd2053e99.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="1441 Pizzeria"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/4/19684494/01a18ba9c9cc7201b1c5c93cd2053e99.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="1441 Pizzeria"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/4/19684494/01a18ba9c9cc7201b1c5c93cd2053e99.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="1441 Pizzeria"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/4/19684494/01a18ba9c9cc7201b1c5c93cd2053e99.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="1441 Pizzeria"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/4/19684494/01a18ba9c9cc7201b1c5c93cd2053e99.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="1441 Pizzeria"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/4/19684494/01a18ba9c9cc7201b1c5c93cd2053e99.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  title="1441 Pizzeria"
                />
              </Slider>
            </div>
          </div>

          <div className="my-4">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="my-4 w-full md:hidden flex flex-col gap-4">
            <MapView
              title="Mumbai Express"
              phono="+91 89675634566"
              mapLocation={[17.42340425229807, 78.51097166632998]}
              address="Alltos A&M Trade Center, Himayath Nagar, Hyderabad"
            />
          </div>
          <div className="flex flex-col my-4 gap-4">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-1/3 sticky rounded-xl top-2 bg-white p-3 shadow-md flex-col gap-4"
        >
          <MapView
            title="Mumbai Express"
            phono="+91 89675634566"
            mapLocation={[17.42340425229807, 78.51097166632998]}
            address="Alltos A&M Trade Center, Himayath Nagar, Hyderabad"
          />
        </aside>
      </div>
    </>
  );
};

export default Overview;
