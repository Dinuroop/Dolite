import React from 'react';
import './BlogGen.css';
import Graph from '../Assets/GraphicD.png' // Import the CSS file for styling
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const GraphicD = () => {
  return (
    <>
    <Nav/>
    <div className="conny">
      <div className="left1">
        <img src={Graph} alt="Blog" />
      </div>
      <div className="right1">
        <div className="content-box">
          <h2>Content Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            dui id ex ultrices euismod in eu elit. Integer eu faucibus quam.
          </p>
        </div>
        <a href='/#'>
        <button>Create</button>
        </a>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default GraphicD;