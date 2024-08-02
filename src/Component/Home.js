import React from 'react'
import HeroSection from './HeroSection';

const Home = () => {
  const data = {
    name: "Rohit JAVAFSD",
    image: "/Material/use.png",
  };
  return (
    <div>
    <HeroSection {...data}/>
    </div>
  );
}

export default Home;
