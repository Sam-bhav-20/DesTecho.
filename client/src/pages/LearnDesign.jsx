import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SliderMain from '../components/Main_Slider/SliderMain'
import Footer from '../components/Footer/Footer'
import upcomingevents from '../assets/upcomingevents_learn.png'
import ImageSlider from '../components/LD_Slider/ImageSliderLd';
import './learndesign.css';
import Faqs from '../components/Faqs/Faq'
// import { Faqs } from '../components/Faqs/Faq'
const LearnDesign = () => {
    return (
        <>
            <Navbar />
            <div className="main_learndesign">
                <div className="first_learndesign">
                    <div className="first_1_ld">
                        <div className="first_1_1_ld">
                            <div className="first_1_1_1_ld">Workshops</div>
                        </div>
                        <div className="first_1_2_ld">Level up your design game with industry leaders</div>
                        <div className="first_1_3_ld">
                            Fuel your creative ambitions with our live interactive workshops. Spend a day with design business pros and walk away with knowledge that lasts a lifetime.
                        </div>
                    </div>
                    <div className="first_2_ld">
                        <div className="first_2_img">
                            <img src={upcomingevents} alt="" className="first_2_img2" style={{
                                width: "100%",
                            }} />
                        </div>
                    </div>
                </div>



                <div className="second_ld">
                    <div className="second_first_ld">
                        <div className="second_first_1_ld">
                            <div className="second_first_1_1_ld">
                                <video
                                    src="https://framerusercontent.com/modules/assets/gAFi084SAxoMgf5YxJe7diCZw~60b-6el-_Nvq4LL7Ekn-HvO5Qw5Dm5EWt7uCKVpv4n8.mp4"
                                    loop
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '30px',
                                        display: 'block',
                                        objectFit: 'cover',
                                        // backgroundColor: 'rgba(0, 0, 0, 0)',
                                        // objectPosition: '50% 50%'
                                    }}
                                />
                            </div>
                            <div className="second_first_1_2_ld">
                                <ImageSlider />
                            </div>
                        </div>
                        <div className="second_first_1_ld" style={{
                            width: "100%"
                        }}>
                            <div className="second_first_2_1_ld">
                                <div className="second_first_2_1_1_ld">
                                    <div className="second_first_2_1_1_1_ld">Oct 25, 2023</div>
                                </div>
                                <div className="second_first_2_1_2_ld" style={{ width: "76%" }}>
                                    Beyond the Artboard with DKNG Studios
                                </div>
                                <div className="second_first_2_1_3_ld">
                                    Learn the steps Dan and Nathan took to build their business, tools for efficiently wearing many hats to operate a small studio, and the tools and techniques they use to create their signature illustration and design styles.
                                </div>
                            </div>
                            <div className="second_first_2_2_ld" style={{
                                gap: "26px"
                            }}>
                                <div className="second_first_2_2_1_ld">
                                    <div className="second_first_2_2_1_1_ld"><h5 style={{ fontWeight: "600" }}>Register</h5></div>
                                    <div className="second_first_2_2_1_2_ld">
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "300" }}>Level</p></div>
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "500" }}>Beginner Friendly</p></div>
                                    </div>
                                    <div className="second_first_2_2_1_2_ld">
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "300" }}>Date</p></div>
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "500" }}>October 25, 2023</p></div>
                                    </div>
                                    <div className="second_first_2_2_1_2_ld">
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "300" }}>Price</p></div>
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "500" }}>Starting at $199</p></div>
                                    </div>
                                    <div className="second_first_2_2_1_2_ld" style={{ justifyContent: "center", alignItems: "center", fontWeight: "700" }}>
                                        Early Bird tickets on Sale Now!
                                    </div>
                                </div>
                                <div className="second_first_2_2_1_ld">
                                    <button className='second_first_register'>
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="second_first_ld">
                        <div className="second_first_1_ld">

                            <div className="second_first_1_2_ld">
                                <ImageSlider />
                            </div>


                            <div className="second_first_1_1_ld">
                                <video
                                    src="https://framerusercontent.com/modules/assets/yWsHyGjEUlU6IbMCJiHrLgvMc~Os5IWojiVLej1DReTljpRaOKIu8q5fZvSPBxtPPR3u8.mp4"
                                    loop
                                    autoPlay
                                    muted
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '30px',
                                        display: 'block',
                                        objectFit: 'cover',
                                        // backgroundColor: 'rgba(0, 0, 0, 0)',
                                        // objectPosition: '50% 50%'
                                    }}
                                />
                            </div>
                        </div>
                        <div className="second_first_1_ld" style={{
                            width: "100%"
                        }}>
                            <div className="second_first_2_1_ld">
                                <div className="second_first_2_1_1_ld">
                                    <div className="second_first_2_1_1_1_ld">Nov 16, 2023</div>
                                </div>
                                <div className="second_first_2_1_2_ld" style={{ width: "76%" }}>
                                    Design Optimization & Logo Design
                                </div>
                                <div className="second_first_2_1_3_ld">
                                    Learn shortcuts & optimizations to take control of your creative workflow as well as how to hone your eye and utilize creative tools to craft impactful logos.
                                </div>
                            </div>
                            <div className="second_first_2_2_ld" style={{
                                gap: "26px"
                            }}>
                                <div className="second_first_2_2_1_ld">
                                    <div className="second_first_2_2_1_1_ld"><h5 style={{ fontWeight: "600" }}>Register</h5></div>
                                    <div className="second_first_2_2_1_2_ld">
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "300" }}>Level</p></div>
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "500" }}>Beginner Friendly</p></div>
                                    </div>
                                    <div className="second_first_2_2_1_2_ld">
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "300" }}>Date</p></div>
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "500" }}>October 25, 2023</p></div>
                                    </div>
                                    <div className="second_first_2_2_1_2_ld">
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "300" }}>Price</p></div>
                                        <div className="second_first_2_2_1_2_1_ld"><p style={{ fontWeight: "500" }}>Starting at $199</p></div>
                                    </div>
                                    <div className="second_first_2_2_1_2_ld" style={{ justifyContent: "center", alignItems: "center", fontWeight: "700" }}>
                                        Early Bird tickets on Sale Now!
                                    </div>
                                </div>
                                <div className="second_first_2_2_1_ld">
                                    <button className='second_first_register'>
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Faqs/>
            <div style={{
                paddingTop:"11rem"
            }}>
                <SliderMain />
                <Footer />
            </div>

        </>
    )
}

export default LearnDesign
