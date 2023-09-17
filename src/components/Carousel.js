import React from 'react';
import './Carousel.css'; // Import your custom CSS file for styling

const Carousel = (props) => {
const {status} = props;
  return (
    <div class="horizontal-slider-container">
    <h1>{status}</h1>
    <hr></hr>
  <ul class="horizonal-slider">
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
    <li class="item">test</li>
  </ul>
</div>
  );
};

export default Carousel;
