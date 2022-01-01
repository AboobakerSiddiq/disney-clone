/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../assests/images/slider-badging.jpg";
import car2 from "../assests/images/slider-badag.jpg";
import car3 from "../assests/images/slider-scale.jpg";
import car4 from "../assests/images/slider-scales.jpg";
import styled from "styled-components";

function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={car2} />
      </Wrap>
      <Wrap>
        <img src={car3} />
      </Wrap>
      <Wrap>
        <img src={car4} />
      </Wrap>
      <Wrap>
        <img src={car1} />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  padding-top: 10px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: lightgray;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 500ms;

    &:hover {
      border: 4px solid gray;
    }
  }
`;
