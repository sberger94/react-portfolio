import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
    <div className='container projects-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P','r','o','j','e','c','t','s']}
            idx={15}
          />
        </h1>
      </div>
      <div className='projects-wrapper'>
        <ul>
          <li>
            <a target='_blank' rel='noreferrer' href='https://sberger94.github.io/SEI-Connect-4/'>Connect 4</a>
            <p>A simple browser-based version of the classic game where two players can play against each other.</p>
            <div className='tech-stack'>- HTML, CSS, Javascript</div>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://sei-cookbook-forum.herokuapp.com/recipes'>The Common Kitchen</a>
            <p>An online forum for sharing and viewing recipes.</p>
            <div className='tech-stack'>- Node, Express, MongoDB</div>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://noah-emr.herokuapp.com/'>Noah EMR</a>
            <p>A veterinary Electronic Medical Records site designed for practices to keep track of clients’ pets and upcoming and past services.
               This is a group project with 2 other students from General Assembly.</p>
               <div className='tech-stack'>- Python, Django, PSQL, Bootstrap</div>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://sei-soundboard.herokuapp.com/'>SoundBoard</a>
            <p>A MERN stack social-media application for sharing music.</p>
            <div className='tech-stack'>- MongoDB, Express, React, Node, AWS S3</div>
          </li>
        </ul>
      </div>
    </div>
    <Loader type='ball-triangle-path'/>    
    </>
  )
}

export default Projects;