import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slidermain.css';


import q1Logo from '../../assets/slider_1.png'; // Replace with your logo paths
import q2Logo from '../../assets/slider_2.png';
import q3Logo from '../../assets/slider_3.png';
import q4Logo from '../../assets/slider_4.png';
import q5Logo from '../../assets/slider_5.png';

const logoUrls = [
  q1Logo,
  q2Logo,
  q3Logo,
  q4Logo,
  q5Logo
];

const SliderMain = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase:'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  // Duplicate the logoUrls array to achieve continuous sliding
  const duplicatedLogoUrls = [...logoUrls, ...logoUrls];

  return (
    <div className="carousel-container_main">
      <Slider {...settings}>
        {duplicatedLogoUrls.map((url, index) => (
          <div className="carousel-slide_main" key={index}>
            <img src={url} alt={`Logo ${index}`} className="logo-image_main" style={{width:'69%',height:'47%',margin:'auto'}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderMain;


