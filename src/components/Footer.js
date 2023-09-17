import React from 'react'
import './Footer.css';
import logo from '../Assets/Dolite.png';

const Footer = () => {
  return (
    <div className='low'>
        <div className='bottom'>
            <img src={logo} className='logo' alt='logo'/>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ultrices adipiscing orci arcu et purus. Tincidunt eget ornare nec elementum. Rutrum in auctor nunc ac bibendum maecenas. Adipiscing quam adipiscing id fermentum laoreet nec nunc. Facilisi orci lobortis mattis etiam. Amet lorem aliquam vestibulum feugiat. Augue quis egestas lacus nunc at facilisi. Nibh diam, ac pretium rutrum euismod adipiscing. Pharetra feugiat egestas elit dui. Augue nisi purus malesuada mi pellentesque interdum egestas urna. Enim quis.</p>
        </div>
        <div className='navig'>
            <ul className="center1">
                    <li className='navc1'> About </li>
                    <li className='navc1'> Grphic design</li>
                    <li className='navc1'> WEB design</li>
                    <li className='navc1'>  Blog creator </li>
                    {/* <li className='navc1'> SEO enhancer </li> */}
            </ul>
        </div> 
        <div className='line'>

        </div>
        <div className='copyrt'>
            <p>Copyright@2022 Dolite limited</p>
        </div>
    </div>
  )
}

export default Footer