import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import ImgSlide_ld1 from '../../assets/imgslide_ld1.png';
import ImgSlide_ld2 from '../../assets/imgslide_ld2.png';
import 'slick-carousel/slick/slick-theme.css';
import './imagesliderlearndesign.css'; // Import your CSS file for styling
const ImageSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const images = [
    "https://framerusercontent.com/images/DUStEbIG7blxGf7eFgXk4NPw4.png",
    "https://framerusercontent.com/images/50N8lAJC7seBKw3wbBNv2tPJmj0.png",
    ImgSlide_ld2,
    ImgSlide_ld1

  ];

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  }

  const goToNext = () => {
    sliderRef.current.slickNext();
  }

  return (
    <div className="slider-container_ld" style={{
        borderRadius:"10%"
    }}>
      <Slider {...settings} ref={sliderRef}>
        {images.map((url, index) => (
          <div key={index} style={{
            borderRadius:"10%"
          }}>
            <img src={url} alt={`Slide ${index + 1}`} style={{width:"100%", borderRadius:"10%"}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
