import React from 'react'
import "./User.css"
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import { useNavigate } from 'react-router-dom'



export default function User() {
    const navigate = useNavigate();
  return (
    <>
    <Nav/>
    <div className="cont">
      <div className="left">
        <h1>Create<br></br><span>your project</span></h1>
        <p>Select to start with a project</p>
      </div>
      <div className="right">
        <div className="card" onClick={()=>navigate('GraphicDesign')}>
          <h2>Graphic Design</h2>
          <p>Description for Card 1</p>
        </div>
        <div className="card" onClick={()=>navigate('BlogGenerator')}>
          <h2>Blog</h2>
          <p>Description for Card 2</p>
        </div>
        <div className="card">
          <h2>SEO</h2>
          <p>Description for Card 3</p>
        </div>
        <div className="card">
          <h2>Web Design</h2>
          <p>Description for Card 4</p>
        </div>
      </div>
    </div>
    <Carousel status = "Recently Viewed" />
    <Carousel status = "Graphic Design" />
    <Carousel status = "Blog Design" />
    <Carousel status = "Web Design" />
    <Carousel status = "Seo Design" />
    </>
  )
}