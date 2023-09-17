import React from 'react'
import './Graphic.css'
import content from '../Assets/content creator.png';
import group from '../Assets/Group (1).png';
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

export default function Graphic() {
  const navigate = useNavigate();
    // Number of times to repeat the content
  const con = (
    <>
      <selection className="hscroll2" id="slide2">
        <div className="exitb">
        <ImCross onClick={()=>navigate(-1)}/>
        </div>

        <div className="text">
          <h1 className="introgd">
            Introducing<br />
            <p className="fadgd">Blog craft</p>
          </h1>
        </div>

        <div className="rightarr">
          <a href="#slide3">
            <i className="fa fa-arrow-right a2" aria-hidden="true"></i>
          </a>
        </div>
      </selection>

      <selection className="hscroll3" id="slide3">
        <div className="gym">
          <img src={content} alt="Content Creator" />
        </div>

        <div className="part2">
          <div className="desthe1">
            <h>blog craft</h>
          </div>
          <div className="lorip1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A proin
              netus tristique orci tristique nulla facilisi convallis at. Massa
              erat justo, convallis nulla. Urna nunc, vitae
            </p>
          </div>
        </div>

        <div className="vl1"></div>
      </selection>

      <selection>
        <div className="part3">
          <div className="desthe2">
            <h>blog craft</h>
          </div>

          <div className="lorip2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A proin
              netus tristique orci tristique nulla facilisi convallis at. Massa
              erat justo, convallis nulla. Urna nunc, vitae
            </p>
          </div>
          <div className="brownchev">
            <img src={group} alt="Group 1" />
          </div>
        </div>
        <div className="vl2"></div>
      </selection>
    </>
  );

  const repeatCount = 1;

    // Create an array of repeated content
  const repeatedContent = Array.from({ length: repeatCount }, (_, index) => (
      <React.Fragment key={index}>{con}</React.Fragment>
    ));
    
  return (
    <div className="container">
      {repeatedContent}
    </div>
  )
}