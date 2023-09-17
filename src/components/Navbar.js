import React from 'react'
import logo from '../Assets/Dolite.png';

const Navbar = () => {
  return (
    <div style={{backgroundColor:"black", marginBottom:"20px"}}>
      <nav style={{height:"55px"}}>
        <a href="/" style={{color:"white",marginTop:"50px",textAlign:"center", textDecoration:"none",fontSize:"35px"}}>
        <img src={logo} height="50" class="d-inline-block align-top" alt=""/>
            {/* <strong>DOLITE</strong> */}
        </a>
      </nav>
    </div>
  )
}

export default Navbar
