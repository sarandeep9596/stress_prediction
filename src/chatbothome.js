import React from 'react';
import { useNavigate } from 'react-router-dom';
import './chatbothome.css';
const Chatbothome = () => {
    const navigate = useNavigate();

    // Function to handle button click
    const handleButtonClick = () => {
        // Navigate to the desired route
        navigate('/chatbotmain'); // Replace '/new-route' with your target path
    }
    return (
        <>
<div class="container">
<div class="cont">
    <h1>Meet Calmly</h1>
    <p>Your mind's new best friend. Calmly is an empathetic AI companion that helps you navigate life's ups and downs, anytime, anywhere.</p>
    <a href="#" onClick={handleButtonClick} class="button">Try Calmly</a>
</div>
<div class="circle-container">
    <div class="circle">
        <div class="face">😌</div>
        <span class="sparkle">✨</span>
        <span class="sparkle">✨</span>
        <span class="sparkle">✨</span>
    </div>
</div>
</div>
<div class="wave"></div>
<h2>How Calmly works</h2>
<div class="chatbotworking">
    <div class="feature">
      <div class="feature-icon">🧠</div>
      <h3>Explore your emotions</h3>
      <p>Whether you're processing relationship challenges, work stress, or sleep issues, Calmly is there to help you unpack what's on your mind.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">💖</div>
      <h3>Personalized recommendations</h3>
      <p>Calmly listens and responds to what you have to say, sending personalized meditations and activities for however you're feeling.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">▶️</div>
      <h3>Anytime, anywhere</h3>
      <p>Whether it's day or night, share what's on your mind with Calmly whenever you need to — all in the Zenify your life website.</p>
    </div>
  </div>

  <h2>Our commitment to safety and security</h2>
  <div class="privacy">
    <div class="feature">
      <div class="feature-icon">🔐</div>
      <h3>Privacy</h3>
      <p>Calmly is built with privacy by design. We use leading practices to protect privacy and adhere to privacy-related regulations.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">🔒</div>
      <h3>Security</h3>
      <p>Every conversation is encrypted, and we have controls in place to prevent unauthorized access to your data.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">🛡️</div>
      <h3>Safety</h3>
      <p>Not only have clinical experts rigorously tested Calmly for safety, but we've also built a proprietary safety system to identify and route members to additional care based on risks, such as suicidal ideation, self-harm, abuse, and more.</p>
    </div>
  </div>
  <div class="disclaimer">
    Calmly is not a substitute for medical or mental health treatment. If you need support for a mental health condition, please
     talk with a licensed provider. If you are located in the United States and you are having thoughts of suicide or self-harm,
     please call or text 988, the US Suicide and Crisis Lifeline. If you are in immediate danger,
    please contact the US emergency line 911 or go to the nearest emergency room. If you are located outside of the United States,
     please contact your local crisis or emergency resources or go to the nearest emergency room.
  </div>
</>
);
};

export default Chatbothome;