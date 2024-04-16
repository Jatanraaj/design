import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Slider.css'; // Import custom CSS file
import slider1 from './assets/slider.png';
// import slider2 from './assets/slider2.png';
// import slider3 from './assets/slider3.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container" style={{overflow:'hidden'}}> 
      <Slider {...settings}>
        <div className="slider-item">
          <img src={slider1} alt="Slider 1" class='slider-image' />
          <div className="slidertext">
            <h6>Home / Why work with us</h6>
            <h1>Headline #1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="slider-item">
          <img src={slider1} alt="Slider 2" class='slider-image' />
          <div className="slidertext">
            <h6>Home / Why work with us</h6>
            <h1>Headline #2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="slider-item">
          <img src={slider1} alt="Slider 3" class='slider-image' />
          <div className="slidertext">
            <h6>Home / Why work with us</h6>
            <h1>Headline #3</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </Slider>

      {/* <button className="prev-btn">
        <BsArrowLeft />
      </button>
      <button className="next-btn">
        <BsArrowRight />
      </button> */}
    </div>
  );
};

export default SliderComponent;
