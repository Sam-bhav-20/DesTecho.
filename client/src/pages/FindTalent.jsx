import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/FT_slider/Carousel'
import './findTalent.css';
import Firstdiv from '../components/FT_div_vid/FirstDiv';
import Secdiv from '../components/FT_div_vid/SecDiv';
import OneSignalComponent from '../components/FT_OneSignal/OneSignal';
import Brand from '../components/FT_Brand/Brand';
import Last2 from '../components/FT_div_vid/LastSec';
import Subscription from '../components/FT_pay/Subscription';
import SliderMain from '../components/Main_Slider/SliderMain';
import Footer from '../components/Footer/Footer';
const FindTalent = () => {
  return (
    <>
    {/* <div className=''> */}
    <Navbar/>
    <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          padding: "21vh 0px",
        }}
      >
        <div>
          <div className="text-center">
            <p style={{ color: "red" }}><strong>DESTECHO HIRING</strong>
            </p>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "65px",
                fontWeight: "600px",
              }}
            >
              Hire the world’s top designers
            </h1>
            <p style={{ fontSize: "20px", padding: "15px 263px" }}>
              Whether you prefer to actively seek out candidates using Designer
              Search or let designers come to you through our Job Board,
              DesTecho Hiring makes it easier than ever to source top-notch
              design talent.
            </p>
            <h4
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                paddingTop: "12vh",
              }}
            >
              We’ve helped some of the world’s best design-forward companies
              hire expert creatives
            </h4>
          </div>
        </div>
      </div>
      <div className="slider" style={{ paddingTop: "-26vh" }}>
        <Carousel/>
      </div>
      <div style={{ gap: "20px" }}>
        <Firstdiv/>
        <Secdiv/>
      </div>
      <OneSignalComponent/>
      <div>
        <Brand/>
        <Last2/>
      </div>
      <Subscription/>
      <div style={{
        paddingTop:"11rem"
      }}>
        <SliderMain/>
        <Footer/>
      </div>
      {/* </div> */}

    </>
  )
}

export default FindTalent
