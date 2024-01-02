import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import GoCards from '../components/GoProCards/GoCards'
import BrandGrid from '../components/GoProBrands/BrandGrid'
import VidText from '../components/GoProVidText/VidText'
import HeadVid from '../components/GoProVidText/HeadVid'
import OneSignalComponent from '../components/FT_OneSignal/OneSignal'
import GpSubscription from '../components/GoProSubscription/GpSubscription'
import SliderMain from '../components/Main_Slider/SliderMain'
import Footer from '../components/Footer/Footer'
import { Pricing } from '../components/GoProPayment/Pricing'
import { ChakraProvider } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ScrollToTopButton from '../components/Scroll/ScrollToTopButton'
const GoPro = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!localStorage.getItem('DesTecho-user')) {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        // Handle error, e.g., redirect to login page or display an error message
      }
    };
  
    fetchUser();
  }, [navigate]);
  return (
    <>
    <Navbar/>
    <ScrollToTopButton/>
    <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          padding: " 9rem 0px 0px 1rem",
        }}
      >
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
              Whether you&apos;re looking to build your portfolio, find your next
        freelance client or showcase your team's work -- we have a plan for you.
            </p>
            {/* <button className="my-2"
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
            </p> */}
          </div>
      </div>
      <ChakraProvider><Pricing/></ChakraProvider>
      
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
