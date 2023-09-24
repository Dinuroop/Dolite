import React from 'react';
import './Nav.css'
import logo from '../Assets/Dolite.png';

const Nav = () => {
  return (
    <header>
        <img 
        src={logo} 
        className="logo" 
        alt='image1'/>
        <nav>
            <ul className="center">
                <li className='navc'> business </li>
                <li className='navc'> education</li>
                <li className='navc'>  price & plannings</li>
                <li className='navc'>  learn </li>
            </ul>
        </nav>
        <button className="simple">simple</button>   

    </header>
  )
}

export default Nav