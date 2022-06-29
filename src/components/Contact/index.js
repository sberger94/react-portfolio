import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_extmlw4',
        'template_84ybutb',
        refForm.current,
        'n1m9RebCr3PFvr6OZ'
      ).then(() => {
        alert('Message sent!');
        window.location.reload(false);
      },
      () => {
        alert('Failed to send message, please try again.');
      })
    }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass} 
              strArray={['C','o','n','t','a','c','t',' ','m','e']}
              idx={15}/>
          </h1>
          <p>
            I am a junior developer looking for any and all opportunities to
             gain experience. I am currently looking for freelance work or a position
              in a growth company. Feel free to contact me below.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required/>
                </li>
                <li className='half'>
                  <input type='text' name='email' placeholder='Email' required/>
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject'/>
                </li>
                <li>
                  <textarea name='message' placeholder='Message' required/>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='Send'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Scott Berger,
          <br/>
          Portland, Oregon <br/>
          <span>sberger94@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[45.5627,-122.6787]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.5627,-122.6787]}>
              
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='ball-triangle-path' />
    </>
  )
}

export default Contact;