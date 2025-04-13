import React from 'react';
import { useNavigate } from 'react-router-dom';
import './explorearticles.css';
import explorearticle1 from './explorearticle1.png';
import explorearticle2 from './explorearticle2.png';
import explorearticle3 from './explorearticle3.png';
import explorearticle4 from './explorearticle4.png';

const ExploreArticles = () => {
  const navigate = useNavigate();
  const handlementalhealthClick = () => {
    navigate('/mentalhealthdetail');
  }
  const handlementitationdetailClick = () => {
    navigate('/meditationdetail');
  }
  const handlemindfulnessClick = () => {
    navigate('/mindfulness');
  }
  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore articles by category</h2>
      <div className="explore-grid">
        <div onClick={handlementalhealthClick}className="category-card mental-health">
          <img src={explorearticle1} alt="Mental Health" />
          <h3 className="category-title">Mental Health</h3>
        </div>
        
        <div onClick={handlementitationdetailClick}className="category-card meditation">
          <img src={explorearticle2} alt="Meditation" />
          <h3 className="category-title">Meditation</h3>
        </div>
        
        <div onClick={handlemindfulnessClick} className="category-card mindfulness">
          <img src={explorearticle3} alt="Mindfulness" />
          <h3 className="category-title">Mindfulness</h3>
        </div>
        
        <div className="category-card sleep">
          <img src={explorearticle4} alt="Sleep" />
          <h3 className="category-title">Sleep</h3>
        </div>
      </div>
    </div>
  );
};

export default ExploreArticles;