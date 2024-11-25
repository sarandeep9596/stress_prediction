import React from 'react';
import { useNavigate } from 'react-router-dom';
import './chatbox.css';
import calmlyhero from './calmlyhero.png';
const Chatbox = () => {
    
    const navigate = useNavigate();

    const handleButtonClick = () => {
      
        navigate('/chatbothome');
    }
  return (
    <section className="chatbox">
    <div className='descrp'>
    <h1 >Meet Calmly</h1>
      <p>Your companion to inner peace - unwind, reset,<br/>
      and find your calm with Calmly.
          </p>
          <button onClick={handleButtonClick}>Talk to Calmly</button>
    </div>
    <div className='chatimg'>
    <img src={calmlyhero} alt='chatimage' className="chatimage"/>
    </div>
    </section>
  );
};

export default Chatbox;
