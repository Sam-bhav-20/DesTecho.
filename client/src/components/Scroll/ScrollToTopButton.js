// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      id="scrollToTopBtn"
      style={{
        display: isVisible ? 'block' : 'none',
        // borderRadius:50%,
        position:'fixed',
        bottom: '4.5rem',
        right: '4rem',
        // background: '',
        color: 'black',
        border: 'none',
        borderRadius: '30%',
        padding: '0rem 0.7rem 0.3rem 0.7rem',
        cursor: 'pointer',
        transition: 'opacity 0.3s ease-in-out',
        zIndex: '9999', // Set a high z-index value
        fontSize:'2rem'
      }}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon/>
    </button>
  );
};

export default ScrollToTopButton;
