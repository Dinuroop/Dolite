import React from 'react';
import './Nav.css'
import logo from '../Assets/Dolite.png';

const Nav = () => {
  return (
    <header>
        {/* <img 
        src={logo} 
        className="logo" 
        alt='image1'/> */}
        <div class="nav-wrapper">
            <div class="logo-container">
                <img class="logo" src={logo} alt="Logo"/>
            </div>
            <nav>
                <input class="hidden" type="checkbox" id="menuToggle"/>
                <label class="menu-btn" for="menuToggle">
                    <div class="menu"></div>
                    <div class="menu"></div>
                    <div class="menu"></div>
                </label>
                <div class="nav-container">
                    <ul class="nav-tabs">
                        <li class="nav-tab">Business</li>
                        <li class="nav-tab">Education</li>
                        <li class="nav-tab">Price</li>
                        <li class="nav-tab">Learn</li>
                    </ul>
                </div>
            </nav>
        </div>  

    </header>
  )
}

export default Nav