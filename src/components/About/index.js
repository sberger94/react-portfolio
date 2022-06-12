import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, []);

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}/>
        </h1>
        <p>
          I am a full-stack developer with a background in music education and physics. 
          I use clear and direct communication to efficiently address and solve problems.  
          My passion for music and working in a collaborative environment has further enhanced my 
          skills in problem solving, teamwork, and communication.
        </p>
      </div>
    </div>
    <Loader type='ball-rotate' />
    </>
  )
}

export default About;