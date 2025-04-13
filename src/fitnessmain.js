import React from 'react';
import './fitnessmain.css';
import fitnessmain from './fitnessmain.png';
import intense from './intense.png';
import foot from './foot.png';
import pushup from './pushup.png';
import streaching from './streaching.png';
import cardio1 from './cardio1.png';
import cardio2 from './cardio2.png';
import cardio3 from './cardio3.png';
import cardio4 from './cardio4.png';

import yoga1 from './yoga1.png';
import yoga2 from './yoga2.png';
import yoga3 from './yoga3.png';
import yoga4 from './yoga4.png';

import advancefitness1 from './advancefitness1.png';
import advancefitness2 from './advancefitness2.png';
import advancefitness3 from './advancefitness3.png';
import advancefitness4 from './advancefitness4.png';
import { useNavigate } from 'react-router-dom';
const Fitnessmain = () => {
  
  return (
    <>
<nav className="nav-menu">
    <div className="logo">FITNESS & NUTRITION</div>
    <ul className="menu-items">
        <li><a href="#">Exercise</a></li>
        <li><a href="#">Cardio</a></li>
        <li><a href="#">Nutrition</a></li>
        <li><a href="#">Diet</a></li>
        <li><a href="#">Yoga</a></li>
        <li><a href="#">Advance Fitness</a></li>
    </ul>
</nav>

    
        <img src={fitnessmain} alt="Fitness Banner" className="banner_image"/>

        <section class="exercise-section">
    <h2 class="section-title">EXERCISE</h2>
    
    <div class="article-grid">
      
        <div class="article-card">
            <img src={foot} alt="Blue shoe with yellow footprint" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/average-steps-per-day">How Many Steps Do People Take Per Day on Average?</a></h3>
                <p class="article-description">How many steps do people actually take per day? See how the numbers break down by age, sex,...</p>
            </div>
        </div>

     
        <div class="article-card">
            <img src={pushup} alt="People doing burpees" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/how-to-do-a-burpee">The Benefits of Burpees and How to Do Them</a></h3>
                <p class="article-description">If you're looking for a way to build strength and endurance, burpees are a great exercise...</p>
            </div>
        </div>

        
        <div class="article-card">
            <img src={streaching} alt="Person exercising outdoors" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/what-exercise-burns-the-most-calories">12 Exercises That Burn the Most Calories</a></h3>
                <p class="article-description">Running burns the most calories per hour, but that doesn't mean it's the only exercise...</p>
            </div>
        </div>

        
        <div class="article-card">
            <img src={intense} alt="Woman doing lunges" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://barbend.com/best-muscle-group-combinations-to-workout-together/</h3>">What Muscle Groups Are Best to Work Out Together?</a></h3>
                <p class="article-description">There is no right or wrong way to pair muscle groups for a strength workout, but some...</p>
            </div>
        </div>
    </div>
</section>

<section class="exercise-section">
    <h2 class="section-title">CARDIO</h2>
    
    <div class="article-grid">
      
        <div class="article-card">
            <img src={cardio1} alt="Blue shoe with yellow footprint" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/walking-vs-running">Which Is Better for Your Health: Walking or Running?</a>
                </h3>
                <p class="article-description">While running and walking are both good for your health, each has a few benefits over the other, depending on your personal…</p>
            </div>
        </div>
        <div class="article-card">
            <img src={cardio2} alt="People doing burpees" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/fitness/runners-body">What Is a Runner’s Body? It’s More Than a Look</a></h3>
                <p class="article-description">A runner's body is more than just a look. In fact, runners come in every shape and size. But what do they all have in common…</p>
            </div>
        </div>

        
        <div class="article-card">
            <img src={cardio3} alt="Person exercising outdoors" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/fitness/is-running-bad-for-your-knees">Here’s the Lowdown on How Running Affects Your Knees</a></h3>
                <p class="article-description">Lots of people want to know whether running is bad for their knees. We've got the answer, as well as how to take care of your…</p>
            </div>
        </div>

        
        <div class="article-card">
            <img src={cardio4} alt="Woman doing lunges" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/vo2-max">Everything to Know About VO₂ Max</a></h3>
                <p class="article-description">VO₂ max is a good benchmark for measuring your aerobic fitness levels. Learn how VO₂ max is measured, how you can increase it,</p>
            </div>
        </div>
    </div>
</section>

<section class="exercise-section">
    <h2 class="section-title">YOGA</h2>
    
    <div class="article-grid">
      
        <div class="article-card">
            <img src={yoga1} alt="Blue shoe with yellow footprint" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/fitness/yoga-for-stress">Here’s How to Use Yoga for Stress Reduction</a>
                </h3>
                <p class="article-description">If you're interested in using yoga for stress reduction, there are a few techniques you'll…</p>
            </div>
        </div>

     
        <div class="article-card">
            <img src={yoga2} alt="People doing burpees" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/fitness-exercise/pilates-vs-yoga">Pilates vs. Yoga: The Differences and What's Right for You</a></h3>
            </div>
        </div>

        
        <div class="article-card">
            <img src={yoga3} alt="Person exercising outdoors" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/nutrition/yoga-posture-for-digestion">Can Yoga Help Aid Digestion? 9 Poses to Try</a>
                </h3>
                <p class="article-description">When you have digestive issues, you may want to find relief fast. This article…</p>
            </div>
        </div>

        
        <div class="article-card">
            <img src={yoga4} alt="Woman doing lunges" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title"><a href="https://www.healthline.com/health/fitness/pilates-for-seniors">The Health Benefits of Pilates for Older Adults</a></h3>
                <p class="article-description">What are the benefits of Pilates for seniors? Read on to find out how a specialized…</p>
            </div>
        </div>
    </div>
</section>


<section class="exercise-section">
    <h2 class="section-title">ADVANCE FITNESS</h2>
    
    <div class="article-grid">
      
        <div class="article-card">
            <img src={advancefitness1} alt="Blue shoe with yellow footprint" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title">
                How to Gain Muscle, No Matter Who You Are</h3>
                <p class="article-description">If you're looking to see gains in strength, you may wonder how to gain muscle without gaining fat. Here's a science-based…</p>
            </div>
        </div>

     
        <div class="article-card">
            <img src={advancefitness2} alt="People doing burpees" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title">How Much Muscle Mass Should I Have, and How Do I Measure It?</h3>
                <p class="article-description">Muscle mass is a part of your lean body mass. It’s difficult to calculate lean body mass, let alone muscle mass. The most…</p>
            </div>
        </div>

        
        <div class="article-card">
            <img src={advancefitness3} alt="Person exercising outdoors" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title">
Mesomorph Body Type: What It Is, Diet, and More</h3>
                <p class="article-description">Your body type is determined by your skeletal frame and body composition. If you have a higher percentage of muscle than body…</p>
            </div>
        </div>

        
        <div class="article-card">
            <img src={advancefitness4} alt="Woman doing lunges" class="article-image"/>
            <div class="article-content">
                <h3 class="article-title">How to Improve Your Grip Strength</h3>
                <p class="article-description">Grip strength refers to how firmly and securely you can hold onto things, and how heavy the things you can grip are. Learn…</p>
            </div>
        </div>
    </div>
</section>
</>


  );
};

export default Fitnessmain;

