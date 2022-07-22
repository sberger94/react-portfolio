import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import "./index.scss";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
  <>
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters 
          letterClass={letterClass} 
          strArray={['P','o','r','t','f','o','l','i','o']}
          idx={15}
        />
      </h1>
    </div>
    <Loader type="ball-scale-ripple" />
  </>
  );
}

export default Portfolio;