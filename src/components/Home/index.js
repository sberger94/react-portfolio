import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['S', 'c', 'o', 't', 't'];

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m&nbsp;</span>
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/></h1>
        <h2>Full-stack Developer / Music Enthusiast</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
    <Loader type='ball-triangle-path'/>
    </>
  )
}

export default Home;