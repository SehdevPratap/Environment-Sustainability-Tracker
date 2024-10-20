import './Navbar.css'
import { CiGlobe } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo-1.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import "../assets/logo-1.png"
export default function Navbar(){
    const [showMenu,setShowMenu]= useState(false);
    return(
        <nav className='main-nav'>
            {/*1. main logo */}
            <div className="logo">
                <img src={logo} alt="logo" height="40px" width="40px"/>
                <h2><span>E</span>co
                    <span>T</span>rack</h2>
            </div>
            {/*2. menu-links */}
            <div className={ showMenu ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul className="no-bullets">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/calculate">Calculate</Link></li>
                    <li><Link to="/solutions">Solutions</Link></li>
                    <li><Link to="/">About</Link></li>
                </ul>
                {/* hamburger menu */}
            </div>
            {/* 3.  */}
            <div className="others">
                {/* <div className="login">Login</div> */}
                {/* <CiGlobe className="globe" > </CiGlobe> */}
                <div className="hamburger-menu">
                    <a href="#" onClick={()=> setShowMenu(!showMenu)}>
                    <GiHamburgerMenu/>
                    </a>
                </div>
            </div>
        </nav>
    )
}