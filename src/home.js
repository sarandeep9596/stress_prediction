import React from 'react';
import Chatbox from './chatbox';
import Meditation from './meditation';
import Blogs from './blogs';
import Music from './music';
import Fitnessnutrition from './fitnessnutrition';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Mentalhealth from './mentalhealth';
import Footer from './footer';
import Extra from './extra';

const Home = () => {
  const navigate = useNavigate();

    const handlecalmlyButtonClick = () => {
      
        navigate('/chatbothome');
    }
    const handlevideoButtonClick = () => {
      
      navigate('/music');
  }
  const handlearticlesButtonClick = () => {
      
    navigate('/explorearticles');
}
const handlemeditationButtonClick = () => {
      
  navigate('/meditationdetail');
}
const handlefitnessButtonClick = () => {
      
  navigate('/fitnessmain');
}
const handleaboutButtonClick = () => {
      
  navigate('/about');
}
const handlehelpButtonClick = () => {
      
  navigate('/help');
}
    const handlehealthButtonClick = () => {
        navigate('/mentalhealthdetail');
    }
  return (
    <div className="home-container">
      <header className="header">
        <h1>❂ Zenify Your Life</h1>
      
<nav className='navbar'>
<ul>
  <li onClick={handlecalmlyButtonClick}>Calmly</li>
  {/* <li onClick={handlevideoButtonClick}>Videos & Music</li> */}
  <li onClick={handlearticlesButtonClick}>Articles & Resources</li>
  <li onClick={handlemeditationButtonClick}>Meditation</li>
  <li onClick={handlefitnessButtonClick}>Fitness & Nutrition</li>
  <li onClick={handlehealthButtonClick}>Mental Health</li>
  <li onClick={handleaboutButtonClick}>About</li>
  <li onClick={handlehelpButtonClick}>Help</li>
  </ul>
</nav>
</header>
      <main className="content">
      <div className='chatdescription'>The Stress less app<br/> for every moment</div><br/><br/>
        <Chatbox />
        <br/>
        <Meditation />
        <br/>
        <Extra />
        <br/>
        <Fitnessnutrition />
        <br/>
        <Mentalhealth />
        <br/>
        <Blogs />
        
        <br/>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
