import React from 'react'
const card1Style = {
    //   width:'600px',
    borderRadius:'33px',
    // background: 'linear-gradient(to bottom, #fff6fc, #ffdcec)', // Very, very light shades of green
    };
    
    const card2Style = {
        // width:'600px',
        borderRadius:'33px',
    //   background: 'linear-gradient(to bottom, #fff6fc, #ffdcec)', // Very, very light shades of pink
    };
const Subscribe = () => {
  return (
    <>
    <div style={{background:'linear-gradient(to top, #ffdcec, #ffdcec)',paddingTop:'4rem',paddingBottom:'4em'}}>
        <h1 className='text-center' style={{fontFamily:'Georgia',fontSize:'70px'}}>Invest in your Design Career</h1>
        <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5 mx-2">
            
          <div className="card mb-2" style={card1Style}>
            <div className="card-body p-5 mx-4">
            {/* <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "18px"}}>Grow your Audience</h6> */}
              <h1 className="card-title mt-4" style={{
                fontFamily: "Georgia, serif",
                fontSize: "40px",
                // fontWeight: "600px",
              }}>Basic</h1>
              <p className="card-text mt-4 mb-2" style={{fontSize: "19px",fontFamily: 'sans',}}>Get inspired, share your designs, get feedback from the community & start building a following.</p>
              <h1 className="card-title mt-4" style={{
                fontFamily: "Georgia, serif",
                fontSize: "40px",
                // fontWeight: "600px",
              }}>Free</h1>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "15px",fontFamily:'sans-serif'}}>for designers</h6>
              <div className='mt-4'>
                  {/* ✅✔️ */}
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Showcase your designs</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Get feedback from other designers</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Follow other designer profiles</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Give feedback on other's work</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Access to full-time job boards</p>
                {/* <h6 className='mt-2'>✅</h6> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 mx-2 my-auto">
          <div className="card mb-2" style={card2Style}>
          <div className="card-body p-5 mx-4">
            {/* <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "18px"}}>Grow your Audience</h6> */}
              <h1 className="card-title mt-4" style={{
                fontFamily: "Georgia, serif",
                fontSize: "40px",
                // fontWeight: "600px",
              }}>Pro</h1>
              <p className="card-text mt-4 mb-2" style={{fontSize: "19px",fontFamily: 'sans',}}>Grow your design business with more profile visibility & premium features to showcase your work.</p>
              <h1 className="card-title mt-4" style={{
                fontFamily: "Georgia, serif",
                fontSize: "40px",
                // fontWeight: "600px",
              }}>$8/mo</h1>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "15px",fontFamily:'sans-serif'}}>when billed annualy</h6>
              <div className='mt-4'>
                  {/* ✅✔️ */}
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Everything in Basic</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Priority visibility in hiring feeds</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Priority visibility in inspiration feeds</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Instant creative portfolio on your domain</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Enhanced profile presentation</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Showcase project work & case studies</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Ad free browsing experience</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Create a team account for your agency</p>
                <p className='mt-3' style={{fontFamily:'sans-serif'}}>✔️ Stats & analytics</p>
                <button className="my-2"
              style={{
                fontSize: "1.2rem",
                backgroundColor: "black",
                borderRadius: "200px",
                color: "white",
                padding: "1.5rem 7rem",
              }}
            >
              Subscribe today
            </button>
            <p className="card-subtitle mx-auto mt-4 mb-2 text-muted" style={{fontSize: "15px",fontFamily:'sans-serif'}}>Prefer a monthly subscription? <u style={{fontWeight:'bold',color:'black'}}>Subscribe for $16/mo</u></p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Subscribe
