import React from 'react'
import GoPro_Vid from '../../assets/login.mp4'

const HeadVid = () => {
  return (
    <>
    <div className='mb-3' style={{marginTop:'150px'}}>
        <h1 className='text-center' style={{fontFamily:'sans-serif',fontSize:'50px'}}>
            Upgrade your professional brand
        </h1>
        <p className='text-center mt-4' style={{fontSize:'18px'}}>Seamlessly showcase the breadth of your creative skills with an enhanced creative portfolio that<br/> always stays up-to-date.</p>
    </div>
    <div className='container-fluid col-md-10' style={{marginTop:'90px'}}>
    <video
                    src={GoPro_Vid}
                    loop
                    autoPlay
                    muted
                    playsInline
                    style={{
                      // marginLeft:'100px',
                      width: '100%',
                      height: '420px',
                      boxShadow:' 0px 0px 32px 32px rgb(0 128 255 / 18%)',
                      display: 'block',
                      objectFit: 'cover',
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      objectPosition: '50% 50%'
                    }}
                  />
    </div>
    </>
  )
}

export default HeadVid
