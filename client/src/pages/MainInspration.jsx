import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const MainInspration = () => {
  const linkStyle = {
    fontFamily:'Georgia,sans-serif',
    textDecoration: 'none',
    color: 'black', // Set your desired text color
    fontSize: '16px', // Set your desired font size
    marginRight: '20px', // Adjust spacing between links if needed
  };

  return (
    <>
      <Navbar />
      <video width="100%" autoPlay loop muted playsInline>
        <source
          src="https://tbcdn.talentbrew.com/company/1758/v2_0/videos/home-calling-all-careers-header-v4.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="mt-5">
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
            <li>
              <Link to="/inspiration/discover" style={linkStyle}>Discover</Link>
            </li>
            <li>
              <Link to="/inspiration/animation" style={linkStyle}>Animation</Link>
            </li>
            <li>
              <Link to="/inspiration/branding" style={linkStyle}>Branding</Link>
            </li>
            <li>
              <Link to="/inspiration/illustration" style={linkStyle}>Illustration</Link>
            </li>
            <li>
              <Link to="/inspiration/print" style={linkStyle}>Print</Link>
            </li>
            <li>
              <Link to="/inspiration/productDesign" style={linkStyle}>Product Design</Link>
            </li>
            <li>
              <Link to="/inspiration/typography" style={linkStyle}>Typography</Link>
            </li>
            <li>
              <Link to="/inspiration/webdesign" style={linkStyle}>Web Design</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainInspration;
