import React from "react";
import './footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <div>
            <div className="footerabc1">
                <div className="footerabc_upper">
                    <div>
                        <ul className="footer-v2__list">
                            <li>
                                <a style={{ fontFamily: 'Borel, sans-serif', fontSize: '25.5px', textDecoration: 'none', color:'black' }} aria-current="page" href="/">
                                    DesTecho
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_link_mid">
                        <div>
                        <ul>
                           <div className="footer_link_mid_div">
                           <div><a className="footer-v2__link" href="#">For designers</a></div>
                           <div><a className="footer-v2__link" href="#">Hire Talent</a></div>
                           <div><a className="footer-v2__link" href="#">Inspiration</a></div>
                           <div><a className="footer-v2__link" href="#">Advertising</a></div>
                           <div><a className="footer-v2__link" href="#">Blog</a></div>
                           <div><a className="footer-v2__link" href="#">About</a></div>
                           <div><a className="footer-v2__link" href="#">Careers</a></div>
                           <div><a className="footer-v2__link" href="#">Support</a></div>
                           </div>
                        </ul>
                        </div>
                    </div>
                    
                    <div className="footer-v2__social-links">
                        <a className="footer-v2__social-link" href="#"><TwitterIcon /></a>
                        <a className="footer-v2__social-link" href="#"><FacebookIcon /></a>
                        <a className="footer-v2__social-link" href="#"><InstagramIcon /></a>
                        <a className="footer-v2__social-link" href="#"><PinterestIcon /></a>
                    </div>
                </div>
                <div className="footerabc_lower">
                    <ul className="footer_lower_list_ul">
                        <li>© 2023 DesTEcho</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                    </ul>
                    <ul className="footer_lower_list_ul">
                        <li>Job</li>
                        <li>Designers</li>
                        <li>FreeLancers</li>
                        <li>Tags</li>
                        <li>Places</li>
                        <li>Resources</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
