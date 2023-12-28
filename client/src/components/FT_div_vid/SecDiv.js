import React from 'react';
import './secdiv.css';

const Secdiv = () => {
  return (
    <div className='div1'>
      <div className="div3 col-8" style={{ marginLeft: '10px' }}>
        <div className="videoindiv3">
          <video
            src="https://framerusercontent.com/modules/assets/anyiHSPP2um93testsvKwARCwiI~YnvWAnCLXVX5ggQK88HR6sJu5P-YNcaJrIQp_UB_uPs.mp4"
            loop
            autoPlay
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              display: 'block',
              objectFit: 'cover',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              objectPosition: '50% 50%'
            }}
          />
        </div>
      </div>
      <div className="div2 col-4">
        <div className="circular-button">
        Designer Search
        </div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '45px' }}>Hire faster & smarter with Designer Search</h1>
        <p style={{ fontSize: '20px' }}>
        Easily find quality freelancers and full-time creatives using our powerful search engine with filters for specialty, location, experience level, and more. Search for available talent in the largest professional creative community with just a few clicks
        </p>
      </div>
    </div>
  );
}

export default Secdiv;
