import React from 'react'
import './HeroSection.css';
import { NavLink } from 'react-router-dom';
const HeroSection = ({name,image}) => {
  return (
    <div className='boss'>
    <div className='Text-part'>
        <p className='upper'>THIS IS ME</p>
        <h1>{name}</h1>
        <p className='lower'>Yo empecé aprendo Español hace dos mes en la escuela.<br/>
             Yo voy la universidad. Yo tratar estudioso Español tres hora<br/> todos 
             los días para que yo saco mejor rápido.</p>
        <NavLink to="/contact"><button className='btn'>Hire me</button></NavLink>  
    </div>
    <div className='image-part'>
    <img src={image} alt="sample"/>
    </div>

    </div>
  );
}

export default HeroSection;
