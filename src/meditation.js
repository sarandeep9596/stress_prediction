import React from 'react';
import './meditation.css';
import { Link } from 'react-router-dom';
import article1 from './article1.png';
import article2 from './article2.png';
import article3 from './article3.png';
import article4 from './article4.png';
import article5 from './article5.png';
import article6 from './article6.png';
import mediback from './mediback.png';
import { useNavigate } from 'react-router-dom';
const Meditation = () => {
  const navigate = useNavigate();

    const handlemeditationButtonClick = () => {
      
        navigate('/whatismeditation');
    }
    const handlemeditationbenefitButtonClick = () => {
      
      navigate('/meditationbenefits');
  }
  const handlehowtomeditateButtonClick = () => {
      
    navigate('/howtomeditate');
  }
    const handleguidedmeditationClick = () => {
      navigate('/guidemeditation');
}
const handlemeditationforbegineersClick = () => {
  navigate('/meditationforbegineers');
}
const handlemeditationtechniqueClick= () => {
  navigate('/meditationtechnique');
}
  return (
    <section className="contentmeditation">
      <div className="description">
        <h1>Meditation</h1>
        <p>Meditation is both a skill and an experience that can improve your health and happiness.</p>
        <Link to="/meditationdetail" className="explore-link">Explore Meditation &rarr;</Link>
      </div>

      <div className="articles" >
        <h1>Top Articles</h1>
        <div className="herosection">
          <div onClick={handlemeditationButtonClick}>
            <img src={article1} alt="Article1" />
            <p>What is meditation?</p>
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div onClick={handlemeditationbenefitButtonClick}>
            <img src={article2} alt="Article2" />
            <p>Meditation benefits</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div  onClick={handlehowtomeditateButtonClick}>
            <img src={article3} alt="Article3" />
            <p>How to meditate</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          <div onClick={handleguidedmeditationClick}>
            <img src={article4} alt="Article4" />
            <p>Guided and timed meditation</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div onClick={handlemeditationtechniqueClick}>
            <img src={article5} alt="Article5" />
            <p>Meditation techniques</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div onClick={handlemeditationforbegineersClick } className='art6'>
            <img src={article6} alt="Article6" />
            <p>Meditation for beginners</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>

      <div className="trending">
        <h1>Trending</h1>
        <ul>
          <li><a href="#">Beginning Meditation</a></li>
          <li><a href="#">Meditation for anxiety</a></li>
          <li><a href="#">Morning meditation</a></li>
          <li><a href="#">Loving kindness meditation</a></li>
          <li><a href="#">Meditation and the breath</a></li>
          <li><a href="#">Body scan meditation</a></li>
          <li><a href="#">Calming meditation</a></li>
        </ul>
      </div>

       <img src={mediback} alt="mediaback" className="mediback" /> 
      
    </section>
  );
};

export default Meditation;
