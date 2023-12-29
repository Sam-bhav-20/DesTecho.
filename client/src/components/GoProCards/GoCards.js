import React from 'react';

const card1Style = {
//   width:'600px',
borderRadius:'33px',
width: '100%', // Set the width to take up the full available space
height: '100%',
  background: 'linear-gradient(to bottom, #f9fff3, #e7fdd3)', // Very, very light shades of green
};

const card2Style = {
    // width:'600px',
    borderRadius:'33px',
    width: '100%', // Set the width to take up the full available space
    height: '100%',
  background: 'linear-gradient(to bottom, #fff6fc, #ffdcec)', // Very, very light shades of pink
};

const GoCards = () => {
  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 mx-2">
          <div className="card mb-2" style={card1Style}>
            <div className="card-body p-5 mx-4">
            <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "18px"}}>Grow your Audience</h6>
              <h1 className="card-title mt-3" style={{
                fontFamily: "Georgia, serif",
                fontSize: "55px",
                // fontWeight: "600px",
              }}>Reach over 10M creatives</h1>
              <p className="card-text mt-5 mb-2" style={{fontSize: "19px",fontFamily: 'sans',}}>Showcase your work to a community of over 10 million creative professionals around the world.</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 mx-2">
          <div className="card mb-2" style={card2Style}>
            <div className="card-body p-5 mx-4">
            <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "18px"}}>Get Hired</h6>
              <h1 className="card-title mt-3" style={{
                fontFamily: "Georgia, serif",
                fontSize: "55px",
                // fontWeight: "600px",
              }}>Connect with over 1M brands</h1>
              <p className="card-text mt-5 mb-2" style={{fontSize: "19px",fontFamily: 'sans',}}>Engage with new clients,collaborators, and the future employers actively searching for designers like you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GoCards;
