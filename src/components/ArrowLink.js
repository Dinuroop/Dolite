import React from 'react';
import { Link } from 'react-router-dom';
import './ArrowLink.css'; // Import your custom CSS file for styling

const ArrowLink = ({ to }) => {
  return (
    <Link to={to} className="arrow-container">
      <div className="arrow"></div>
    </Link>
  );
};

export default ArrowLink;
