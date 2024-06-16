import React,{useState} from "react";
import './navbar.css';
// import Logout from "../Logout/Logout";
// import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href="./login";
    }
  return (
    <div className="my__navbar my-auto py-2">
      <nav className="navbar navbar-expand-lg pb-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active font-semibold" aria-current="page" href="/" style={{
                  fontWeight:"600",
                }}>
                  Find Talent
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active font-semibold" aria-current="page" href="/inspiration" style={{
                  fontWeight:"600",
                }}>
                  Inspiration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active font-semibold" aria-current="page" href="/learndesign" style={{
                  fontWeight:"600",
                }}>
                  Learn Design
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active font-semibold" aria-current="page" href="/gopro" style={{
                  fontWeight:"600",
                }}>
                  Go Pro
                </a>
              </li>
              <li className="nav-item_desTecho">
                <a className="nav-link active " style={{ fontFamily: 'Pacifico, sans-serif', fontSize: '25.5px',color:'#51246e' }} aria-current="page" href="/">
                  DesTecho
                </a>
              </li>
            </ul>

            <div className="ml-auto" style={{marginRight:'1rem'}} >
              <div style={{ display: 'inline-block',width:'100%' }}>
                <button onClick={logOut} className="btn btn-dark  mx-2 text-white font-semibold hire_creatives" style={{ fontSize: '15px', padding: '11px'}} >Logout</button>
              </div>
            </div>

            {/* <Logout/> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;