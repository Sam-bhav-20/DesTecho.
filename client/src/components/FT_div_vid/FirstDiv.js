import React from 'react'
import './firstdiv.css';
const Firstdiv = () => {
  return (
    <div className='div1-1div'>
      <div className="div2-1div col-4">
        <div className="circular-button-1div">
          Job Board
        </div>
        {/* <h1>
    The #1 job board for top design talent
    </h1> */}
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '45px' }}>The #1 Job board for top design talent</h1>
        <p style={{ fontSize: '20px' }}>
          Our job board postings receive an average of 1.1k targeted clicks per month and are viewed by over 1 million top designers globally. With a proven track record assisting over 60,000 companies, you’ll spend less time sorting through unqualified candidates and more time hiring amazing talent.
        </p>
      </div>
      <div className="div3-1div col-8" style={{ marginLeft: '10px' }}>
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
    </div>
  )
}

export default Firstdiv;