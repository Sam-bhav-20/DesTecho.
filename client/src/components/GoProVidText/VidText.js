import React from 'react';

const VidText = () => {
  return (
    <>
    <div className='vidText' style={{ marginTop: '130px'}}>
      <section id="header" className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1 className='brand-name' style={{fontFamily:'sans-serif',fontSize:'50px'}}>Attract more oppurtunities</h1>
                  <p className='my-3' style={{fontSize:'17px',fontFamily:'Georgia'}}>
                    Let new oppurtunities come to you with more interactions and more messages.<br/>
                    On average, Pros engage with 85% more future clients, collaborators, and employers.
                  </p>
                </div>
                <div className='col-lg-4 order-1 order-lg-2 header-img mx-auto'>
                  {/* Wrap the video element inside a div with a border */}
                  <div className='col md-3' style={{ border: '4px solid rgb(168,204,126)', borderRadius: '8px', overflow: 'hidden',boxShadow:'5px 10px 12px #bbbdb9' }}>
                    <video
                      src="https://framerusercontent.com/modules/assets/anyiHSPP2um93testsvKwARCwiI~YnvWAnCLXVX5ggQK88HR6sJu5P-YNcaJrIQp_UB_uPs.mp4"
                      loop
                      autoPlay
                      muted
                      playsInline
                      style={{
                        // marginLeft:'100px',
                        width: '100%',
                        height: '420px',
                        display: 'block',
                        objectFit: 'cover',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        objectPosition: '50% 50%'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className='vidText' style={{ marginTop: '130px'}}>
    <section id="header" className='d-flex align-items-center'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-lg-4 mx-auto'>
                {/* Wrap the video element inside a div with a border */}
                <div className='col md-3' style={{ border: '4px solid pink', borderRadius: '8px', overflow: 'hidden',boxShadow:'-5px 10px 12px #bbbdb9' }}>
                  <video
                    src="https://cdn.dribbble.com/users/1790221/screenshots/16821142/media/accedc19d3e46dcdf1b95c9e8c882a1e.mp4"
                    loop
                    autoPlay
                    muted
                    playsInline
                    style={{
                      // marginLeft:'100px',
                      width: '100%',
                      height: '420px',
                      display: 'block',
                      objectFit: 'cover',
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      objectPosition: '50% 50%'
                    }}
                  />
                </div>
              </div>
              <div className='col-md-6 pt-5 pt-lg-0  d-flex justify-content-center flex-column'>
                <h1 className='brand-name' style={{fontFamily:'sans-serif',fontSize:'50px'}}>Triple your engagement</h1>
                <p className='my-3' style={{fontSize:'17px',fontFamily:'Georgia'}}>
                With increased visibility on all of Dribbble’s feeds, growing your audience has<br/> never been easier. Expand your brand’s reach with <b>3x the number of likes</b> on average for Pros
                  
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </>
  );
}

export default VidText;
