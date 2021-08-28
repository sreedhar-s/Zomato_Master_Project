import React from 'react';
import Slider from 'react-slick';

//components
import PictureCarousalCard from '../picturecarousal';
import { NextArrow,PrevArrow } from '../CarousalArrow';

const NightLifeCarousal = () => {
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
        <div className="w-full">
            <Slider {...settings}>
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
            </Slider>
        </div>
    )
}

export default NightLifeCarousal;