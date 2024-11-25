import React from 'react';
import { useNavigate } from 'react-router-dom';
import './mentalhealth.css';
import { Link } from 'react-router-dom';
import article1 from './article1.png';
import article2 from './article2.png';
import article3 from './article3.png';
import article4 from './article4.png';
import article5 from './article5.png';
import article6 from './article6.png';
import mediback from './mediback.png';
const Mentalhealth = () => {
    const navigate = useNavigate();
    const handlefitnessButtonClick = () => {
        navigate('/mentalhealtdetail');
    }
  return (
    <section className="contentmeditation">
    <div className="description">
      <h1>Mental Health</h1>
      <p>Learn how to manage stress and everyday anxious feelings</p>
      <Link to="/mentalhealthdetail" className="explore-link">Explore Mentalhealth &rarr;</Link>
    </div>

    <div className="articles" >
      <h1>Top Articles</h1>
      <div className="herosection">
        <div onClick={handlefitnessButtonClick}>
          <img src={article1} alt="Article1" />
          <p>Stress</p>
          <button>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div>
          <img src={article2} alt="Article2" />
          <p>Anxiety</p>
          <button><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div>
          <img src={article3} alt="Article3" />
          <p>Sadness</p>
          <button><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>

    <div className="trending">
      <h1>Trending</h1>
      <ul>
        <li><a href="#">Mental Health Matters</a></li>
          <li><a href="#">Boosting your self-esteem</a></li>
          <li><a href="#">Balancing motherhood and being yourself</a></li>
          <li><a href="#">Are you addicted to your phone?</a></li>
          <li><a href="#">What is mental health coaching?</a></li>
          <li><a href="#">How do I get started with mental health coaching?</a></li>
          <li><a href="#">What can a mental health coach do?</a></li>
      </ul>
    </div>

     {/* <img src={mediback} alt="mediaback" className="mediback" />  */}
    
  </section>
  );
};
export default Mentalhealth;
