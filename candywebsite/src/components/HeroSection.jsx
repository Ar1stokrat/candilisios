import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../assets/styles/HeroSection.css";
import images from "../assets/images/images.js";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={images.PrevArrowImg}
      alt="Previous"
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};
const Prehjer = (props) => {
  hellse
}
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={images.NextArrowImg}
      alt="Next"
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    {
      id: 1,
      image: images.Slide,
      title: "Beyond Candilicious",
      text: "Sed sed enim dolor, eget fringilla erat. Sed quam velit, rutrum",
    },
    {
      id: 2,
      image: images.Slide,
      title: "Delicious Treats",
      text: "Sed sed enim dolor, eget fringilla erat. Sed quam velit, rutrum",
    },
    {
      id: 3,
      image: images.Slide,
      title: "Sweet & Tasty",
      text: "Sed sed enim dolor, eget fringilla erat. Sed quam velit, rutrum",
    },
  ];

  return (
    <div className="slider-container">
      <img
        src={images.LeftCandy}
        alt="Left Candy"
        className="decor candy-left"
      />
      <img
        src={images.RightCandy}
        alt="Right Candy"
        className="decor candy-right"
      />
      <img
        src={images.CupCake}
        alt="Cup Cake"
        className="decor cupcake-left"
      />
      <img
        src={images.StrawCake}
        alt="Strawberry Cake"
        className="decor straw-right"
      />
      <img
        src={images.Cookies}
        alt="Cookies"
        className="decor cookies-right"
      />
      <img
        src={images.Chococake}
        alt="Chococake"
        className="decor chococake-right"
      />
      <img
        src={images.CreamCake}
        alt="CreamCake"
        className="decor creamcake-left"
      />
      <img
        src={images.Cake}
        alt="Cake"
        className="decor cake-left"
      />
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt="Slide" className="slide-image" />
            <a href="#" className="ribbon">
              <img src={images.LearnMore} alt="Learn More" />
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
