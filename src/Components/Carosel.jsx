import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carosel.css'
function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div class='w-[98%]' >
      <Slider {...settings}>
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>4</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>

        </div>
       
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>6</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>
        </div>
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>1</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>
        </div>
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>9</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>
        </div>
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>1</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>
        </div>
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>1</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>
        </div>
       
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>1</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>
        </div>
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>1</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>
        </div>
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>1</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>
        </div>
        <div class=' h-[480px] bg-yellow-400 rounded-3xl'>
          <h3>1</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repellat, officiis aliquid amet id dignissimos quos voluptatibus deleniti impedit corporis iure. Porro molestias consectetur nam, cupiditate dolorum consequatur optio error!</p>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
