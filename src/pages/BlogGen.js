import React from 'react';
import './BlogGen.css';
import Blog from '../Assets/BlogGen.png' // Import the CSS file for styling
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const BlogGen = () => {
  return (
    <>
    <Nav/>
    <div className="conny">
      <div className="left1">
        <img src={Blog} alt="Blog" />
      </div>
      <div className="right1">
        <div className="content-box">
          <h2>Content Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            dui id ex ultrices euismod in eu elit. Integer eu faucibus quam.
          </p>
        </div>
        <a href='http://172.16.6.248:8989/'>
        <button>Create</button>
        </a>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogGen;
