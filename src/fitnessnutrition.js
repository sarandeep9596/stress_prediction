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
          <div >
          <a href="/fitnessmain"> 
          <img src={article1} alt="Article1" />
            <p>What is Fitness?</p>
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            </a>
            
          </div>
          <div>
          <a href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389">
          <img src={article2} alt="Article2" />
            <p>Fitness benefits</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </a>
          </div>
          <div>
          <a href="https://www.everydayhealth.com/fitness/guide/"> 
          <img src={article3} alt="Article3" />
            <p>Guide Fitness</p>
            <button><i className="fa-solid fa-arrow-right"></i></button></a>
            
          </div>
          <div>
          <a href="https://www.starhealth.in/blog/importance-of-nutrition/">
          <img src={article4} alt="Article4" />
            <p>Nutrition Importance</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </a>
            
          </div>
          <div>
          <a href="https://www.cdc.gov/nutrition/php/resources/healthy-eating-benefits-for-adults.html">
          <img src={article5} alt="Article5" />
            <p>Nutrition Benefits</p>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </a>
            
          </div>
          <div className='art6'>
          <a href="https://www.healthline.com/nutrition/how-to-eat-healthy-guide">
          <img src={article6} alt="Article6" />
            <p>Guide Nutrition</p>
            <button><i className="fa-solid fa-arrow-right"></i></button></a>
            
          </div>
        </div>
      </div>

      <div className="trendingfitness">
        <h1>Trending</h1>
        <ul>
          <li><a href="/fitnessmain">Beginning Fitness</a></li>
          <li><a href="https://www.healthline.com/health/anxiety-exercises">Exercises for anxiety</a></li>
          <li><a href="https://blog.decathlon.in/articles/20-morning-exercises-that-you-can-do-at-home">Morning Exercises</a></li>
          <li><a href="https://www.healthline.com/nutrition/10-benefits-of-exercise">Exercises Benefits</a></li>
          <li><a href="https://www.healthline.com/nutrition/how-to-eat-healthy-guide">Nutrition for beginners</a></li>
          <li><a href="https://www.healthline.com/nutrition/how-to-eat-healthy-guide">Important of Nutrition</a></li>
          <li><a href="https://www.verywellfit.com/why-you-need-nutrition-and-fitness-3121363">Impact of Nutrition and Fitness</a></li>
        </ul>
      </div>

       {/* <img src={mediback} alt="mediaback" className="mediback" />  */}
      
    </section>
  );
};

export default Fitnessnutrition;

