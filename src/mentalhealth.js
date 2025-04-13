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
        <a href="https://www.verywellhealth.com/how-to-deal-with-anxiety-8384822"><img src={article2} alt="Article2" />
          <p>Anxiety</p>
          <button><i className="fa-solid fa-arrow-right"></i></button></a>
          
        </div>
        <div>
        <a href="https://declutterthemind.com/guided-meditation/sadness">
        <img src={article3} alt="Article3" />
          <p>Sadness</p>
          <button><i className="fa-solid fa-arrow-right"></i></button>
        </a>
          
        </div>
      </div>
    </div>

    <div className="trending">
      <h1>Trending</h1>
      <ul>
        <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7561290/">Mental Health Matters</a></li>
          <li><a href="https://www.mindtools.com/a5k0bgo/boosting-your-self-esteem">Boosting your self-esteem</a></li>
          <li><a href="https://www.headspace.com/articles/how-to-balance-being-mom-and-being-yourself">Balancing motherhood and being yourself</a></li>
          <li><a href="https://hbr.org/tip/2024/02/are-you-addicted-to-your-phone">Are you addicted to your phone?</a></li>
          <li><a href="https://www.everydayhealth.com/emotional-health/what-makes-someone-an-expert-in-mental-health-coaching/">What is mental health coaching?</a></li>
          <li><a href="https://pinlearn.com/how-to-become-a-mental-health-coach/#:~:text=How%20to%20Become%20a%20Mental%20Health%20Coach%3A%207-Step,7%3A%20Promote%20Your%20Mental%20Health%20Coaching%20Program%20">How do I get started with mental health coaching?</a></li>
          <li><a href="https://inlpcenter.org/what-does-a-mental-health-coach-do/">What can a mental health coach do?</a></li>
      </ul>
    </div>

     {/* <img src={mediback} alt="mediaback" className="mediback" />  */}
    
  </section>
  );
};
export default Mentalhealth;
