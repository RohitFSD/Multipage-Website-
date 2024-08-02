import React from 'react'
import HeroSection from './HeroSection';

const About = () => {
  const data ={
    name:"Rohit Nigam",
    image:"/Material/pngwing1.com.png"
  };
  return (
    <div>
    <HeroSection {...data}/>
    </div>
  );
}

export default About;
