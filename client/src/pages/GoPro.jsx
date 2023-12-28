import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import GoCards from '../components/GoProCards/GoCards'
import BrandGrid from '../components/GoProBrands/BrandGrid'
import VidText from '../components/GoProVidText/VidText'
import HeadVid from '../components/GoProVidText/HeadVid'
import OneSignalComponent from '../components/FT_OneSignal/OneSignal'
import GpSubscription from '../components/GoProSubscription/GpSubscription'
import SliderMain from '../components/Main_Slider/SliderMain'
import Footer from '../components/Footer/Footer'

const GoPro = () => {
  return (
    <>
    <Navbar/>
    <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          padding: "16vh 0px",
        }}
      >
        <div>
          <div className="text-center">
            <p style={{ color: "red" }}>
              <strong>DESTECHO PRO</strong>
            </p>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "65px",
                fontWeight: "600px",
              }}
            >
              Get 3x more portfolio views
              <br /> with DesTecho Pro{" "}
            </h1>
            <p style={{ fontSize: "20px", padding: "15px 263px" }}>
              Drive more eyes to your DesTecho profile to build your brand and
              business
            </p>
            <button className="my-2"
              style={{
                fontSize: "20px",
                backgroundColor: "black",
                borderRadius: "200px",
                color: "white",
                width:"20%",
                padding: "15px 25px",
              }}
            >
              Get started today
            </button>
            <p className="my-3" style={{ color: "rgb(110,109,122)" }}>
              Just $8/mo (billed annualy). Cancel anytime.
            </p>
          </div>
        </div>
      </div>
      <GoCards/>
      <BrandGrid/>
      <VidText/>
      <HeadVid/>
      <OneSignalComponent/>
      <GpSubscription/>
      <div style={{
        paddingTop:"11rem"
      }}>
        <SliderMain/>
        <Footer/>
      </div>
    </>
  )
}

export default GoPro
