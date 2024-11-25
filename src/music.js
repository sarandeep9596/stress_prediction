import React from 'react';
import './music.css'
import music from './music.mp4';

import { loginEndpoint} from "./musicdetail"
const Music = () => {
   
    return (
        <>
  <div className="sec">
  <video autoPlay loop muted className="bg-video">
  <source src={music.mp4} type="video/mp4" />
</video>
    <div className="cont">
      <h1>The Art of Stress Relief Music</h1>
      <p>Enjoy a Music Journey into the Senses</p>
      <a href={loginEndpoint}><button  id="play-btn" className="play-button">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16V8L16 12L10 16Z" fill="currentColor"/>
        </svg>
      </button></a>
      
    </div>
  </div>
        </>
    );
  };
  
  export default Music;