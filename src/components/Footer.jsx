import './Footer.css'
import { CiGlobe } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo-1.png"
import { useState } from 'react';
// import "../assets/logo-1.png"
import ecotrack from "../assets/ecotrack.png"
import {Link} from 'react-router-dom';
import { GiCommercialAirplane } from "react-icons/gi";
import { PiCarProfile } from "react-icons/pi";
import { FaShippingFast } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare,FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer(){
    return(
        <div className="footer-wrap">
        <div className="hr"></div>
        <div className="footer-container">
            <div className="footer-article">Stay Informed:
                <div className="footer-article-button">READ ARTICLES</div>
            </div>
            <div className="footer-donation">Contribute to climate protection:
                <div className="footer-donation-button">DONATE</div>
                </div>
            <div className="footer-calculate">Calculate carbon footprint:
                <div className="footer-cal-print">
                <Link to="/calculate/flight"><div className="flight"> <GiCommercialAirplane className="c-icons footer-icons"/></div></Link>
                        <Link to="/calculate/car"><div className="car"> <PiCarProfile className="c-icons footer-icons"/></div></Link>
                        <Link to="/calculate/shipping"><div className="shipping"> <FaShippingFast className="c-icons footer-icons"/></div></Link>
                        <Link to="/calculate/electricity"><div className="electric"> <MdElectricBolt className="c-icons footer-icons"/></div></Link>
                </div>
            </div>
            <div className="footer-1"><img src={ecotrack} alt="" />
             <div className="footer-1-a">Empowering users to track and reduce their carbon footprint for a sustainable future.</div>
            </div>
            <div className="footer-2">About
                <div className="footer-2-a">About us</div>
                <div className="footer-2-a">Events</div>
                <div className="footer-2-a">News</div>
                <div className="footer-2-a">Solutions</div>
            </div>
            <div className="footer-3">Connect
                <div className="footer-connect">
                    <div className="f-c-i"><ImFacebook2></ImFacebook2></div>
                    <div className="f-c-i"><FaInstagramSquare></FaInstagramSquare></div>
                    <div className="f-c-i"><FaSquareXTwitter></FaSquareXTwitter></div>
                    <div className="f-c-i"><FaYoutube></FaYoutube></div>

                </div>
            </div>

        </div>
            <div className="copyright">Copyright © 2024 EcoTrack. All rights reserved.</div>
        </div>
        
    )
}