import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../assets/styles/HeroSection.css";
import Slide from "../assets/images/slide.png";
import LearnMore from "../assets/images/red_med_ribbon.png";
import PrevArrowImg from "../assets/images/left-arrow-button.png"; // Замените на свою картинку
import NextArrowImg from "../assets/images/right-arrow-button.png"; // Замените на свою картинку


const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={PrevArrowImg}
      alt="Previous"
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={NextArrowImg}
      alt="Next"
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    { id: 1, image: Slide, title: "Beyond Candilicious", text: "Sed sed enim dolor, eget fringilla erat. Sed quam velit, rutrum" },
    { id: 2, image: Slide, title: "Delicious Treats", text: "Sed sed enim dolor, eget fringilla erat. Sed quam velit, rutrum" },
    { id: 3, image: Slide, title: "Sweet & Tasty", text: "Sed sed enim dolor, eget fringilla erat. Sed quam velit, rutrum" }
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt="Slide" className="slide-image" />
            <a href="#" className="ribbon">
              <img src={LearnMore} alt="Learn More" />
            </a>
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p>{slide.text}</p>
              <button className="shop-button">Shop Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
