import React from 'react';
import './fitnessnutrition.css';
import { Link } from 'react-router-dom';
import article1 from './article1.png';
import article2 from './article2.png';
import article3 from './article3.png';
import article4 from './article4.png';
import article5 from './article5.png';
import article6 from './article6.png';
import mediback from './mediback.png';
import { useNavigate } from 'react-router-dom';
const Fitnessnutrition = () => {
  const navigate = useNavigate();
  const handlefitnessButtonClick = () => {
      navigate('/fitness');
  }
  return (
    <section className="contentfitness">
      <div className="descriptionfitness">
        <h1>Fitness & Nutrition</h1>
        <p>Regular exercise releases endorphins,
         which help improve mood and reduce anxiety.
        Balanced nutrition provides the body with essential nutrients that regulate
      mood and energy levels, such as omega-3 fatty acids, vitamins, and minerals.
      Together, fitness and nutrition create a strong foundation for resilience against stress,
         fostering a healthier and more balanced lifestyle.</p>
        <Link to="/fitnessmain" className="explore-link">Explore Fitness &rarr;</Link>
      </div>

      <div className="articlesfitness" >
        <h1>Top Articles</h1>
        <div className="herosectionfitness">
          <div onClick={handlefitnessButtonClick}>
            <img src={article1} alt="Article1" />
            <p>What is Fitness?</p>
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div>
            <img src={article2} alt="Article2" />
            <p>Fitness benefits</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div>
            <img src={article3} alt="Article3" />
            <p>Guide Fitness</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div>
            <img src={article4} alt="Article4" />
            <p>Nutrition Importance</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div>
            <img src={article5} alt="Article5" />
            <p>Nutrition Benefits</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='art6'>
            <img src={article6} alt="Article6" />
            <p>Guide Nutrition</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>

      <div className="trendingfitness">
        <h1>Trending</h1>
        <ul>
          <li><a href="#">Beginning Fitness</a></li>
          <li><a href="#">Exercises for anxiety</a></li>
          <li><a href="#">Morning Exercises</a></li>
          <li><a href="#">Exercises Benefits</a></li>
          <li><a href="#">Nutrition for beginners</a></li>
          <li><a href="#">Important of Nutrition</a></li>
          <li><a href="#">Impact of Nutrition and Fitness</a></li>
        </ul>
      </div>

       {/* <img src={mediback} alt="mediaback" className="mediback" />  */}
      
    </section>
  );
};

export default Fitnessnutrition;

