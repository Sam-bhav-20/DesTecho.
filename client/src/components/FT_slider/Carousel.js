import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import googleLogo from '../../assets/google.png';
import facebookLogo from '../../assets/facebook.png';
import amazonLogo from '../../assets/amazon.png';
import shopifyLogo from '../../assets/shopify.png';
import flipkartLogo from '../../assets/facebook.png';

const logoUrls = [
  googleLogo,
  facebookLogo,
  amazonLogo,
  shopifyLogo,
  flipkartLogo
];

const Carousel = () => {
    // console.log(duplicatedLogoUrls);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  const duplicatedLogoUrls = [...logoUrls, ...logoUrls];

  return (
    
    <div className="carousel-container">
      <Slider {...settings}>
        {duplicatedLogoUrls.map((url, index) => (
          <div className="carousel-slide" key={index}>
            <img src={url} alt={`Logo ${index}`} className="logo-image" style={{width:'',height:'11vh'}} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;


