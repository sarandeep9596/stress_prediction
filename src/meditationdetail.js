import React from 'react';
import './meditationdetail.css';
import { useNavigate } from 'react-router-dom';
import meditationdetailmobileview from './meditationdetailmobileview.png';
import meditation1 from './meditation1.png';
import meditation2 from './meditation2.png';
import meditation3 from './meditation3.png';
import meditation4 from './meditation4.png';
import meditation5 from './meditation5.png';
import meditation6 from './meditation6.png';
const Meditationdetail = () => {
  const navigate = useNavigate();
  const handlestepbystepmeditationClick = () => {
      navigate('/whatismeditation');
  }
      const handleguidedmeditationClick = () => {
        navigate('/guidemeditation');
  }
  const handlemeditationforbegineersClick = () => {
    navigate('/meditationforbegineers');
}
  return (
    <>
    <div className="meditation-container">
      <div className="text-section">
        <h1>Meditation made simple</h1>
        <h2>Guided meditations to help you manage life’s more<br/>
         challenging moments</h2>
        <p>
          Meditation is a life skill. By using guided meditations from<br/>
           Headspace, you learn to be more present for everything you<br/>
            do. And with practice, meditation benefits are experienced<br/>
             over time as you feel clearer, calmer, kinder, and sharper.<br/>
        </p>
        <div className="meditation-player">
          <button className="play-button">▶</button>
          <span>20-minute guided meditation</span>
          <div className="progress-bar">
            <span>0:00</span>
            <input type="range" id="slider" min="0" max="100" value="0"></input>
            <span>21:24</span>
          </div>
        </div>
      </div>
      <div className="image-section">
      <img src={meditationdetailmobileview} alt='meditationdetailmobileview'
       className="meditationdetailmobileview"/>
      </div>
    </div>

<div className='meditation-main'>
<div>
<div className='imageflex'>
<img src={meditation1} alt="meditation1" />
    <h1 onClick={handlestepbystepmeditationClick}>What is Meditation:<br/>step by step</h1>
</div>
<p>New to meditation? We’ve got you covered!<br/>
 Zenify your life walks you through all of<br/>
  the components to make your meditation<br/>
   practice effective and sustainable.</p>
</div>

<div>
<div className='imageflex'>
<img src={meditation2} alt="meditation2" />
    <h1 onClick={handleguidedmeditationClick}>Bite size<br/> Meditation<br/>step by step</h1>
</div>
<p>Sometimes, a moment to pause and reset is<br/>
 all people need. We have bite-sized<br/>
  meditations to help jumpstart your day, help<br/>
   you take a breather, or simply decompress.</p>
</div>


<div>
<div className='imageflex'>
<img src={meditation3} alt="meditation3" />
    <h1 onClick={handlemeditationforbegineersClick }>Meditation for<br/> begineers<br/>step by step</h1>
</div>
<p>Meditation for all ages and all levels. The<br/>
Basics course is for any adult starting or<br/>
refreshing a practice. Pro-level is for seasoned meditators.<br/>
And the ‘Meditation for Kids’ collection is for the little ones, to<br/>
 help them with emotions, relaxation, and bedtime.</p>
</div>

<div>
<div className='imageflex'>
<img src={meditation4} alt="meditation4" />
    <h1>Evidence-based <br/>meditation</h1>
</div>
<p>The effectiveness of our guided meditations<br/>
is supported by evidence-based research<br/>
studies. For example, 30 days of using the<br/>
Headspace meditation app led to a 32%<br/>
reduction in stress.</p>
</div>

<div>
<div className='imageflex'>
<img src={meditation5} alt="meditation5" />
    <h1>Practice<br/>mindfulness<br/>meditation</h1>
</div>
<p>We make it easy to understand what kind of<br/>
meditation would best serve you. Guided vs.<br/>
unguided? Body scan vs. visualization?<br/>
Headspace helps you to integrate the rights<br/>
 tools and techniques into your practice.</p>
</div>

<div>
<div className='imageflex'>
<img src={meditation6} alt="meditation6" />
    <h1>Meditation <br/>Techniques</h1>
</div>
<p>We make it easy to understand what kind of<br/>
meditation would best serve you. Guided vs.<br/>
unguided? Body scan vs. visualization?<br/>
Headspace helps you to integrate the rights<br/>
 tools and techniques into your practice.</p>
</div>
</div>

<h1>Meditations for any mind, any mood, any goal</h1>
<div class="container">
  <div class="box">
    <h2>Meditation benefits</h2>
    <p>Meditation is a straightforward practice to help you look after your mind and improve your mental health. Learn what a regular practice can do for you.</p>
    <ul>
      <li>What if I don't notice meditation benefits right away?</li>
      <li>Meditation for stress</li>
      <li>Meditation for sadness</li>
      <li>Meditation for Self-Compassion</li>
      <li>Meditation for self-esteem</li>
      <li>Meditation for happiness</li>
      <li>Meditation for Parenting</li>
    </ul>
  </div>
  <div class="box">
    <h2>Meditation benefits</h2>
    <p>You couldn’t be in better hands when it comes to learning how to meditate. Read up on all the latest guidance and tips to get your practice started.</p>
    <ul>
      <li>How to meditate</li>
      <li>What is the difference between thinking and meditating?</li>
      <li>What the Noting Technique is, and how to take advantage of it</li>
     
    </ul>
  </div>

  <div class="box">
    <h2>Guided Meditation</h2>
    <p>From courses, single exercises, and bite-sized sessions, Headspace teachers provide guided meditations to help you navigate whatever life throws your way.</p>
    <ul>
      <li>Body scan meditation to reduce stress</li>
      <li>Gratitude meditation</li>
      <li>Walking meditation</li>
      <li>Running meditation</li>
      <li>Meditation for compassion</li>
    </ul>
  </div>

  <div class="box">
    <h2>Timed meditations</h2>
    <p>No matter how much time you have to meditate, Headspace can help.</p>
    <ul>
      <li>1 minute</li>
      <li>5 minute</li>
      <li>10 minute</li>
      <li>20 minute</li>
    </ul>
  </div>

  <div class="box">
    <h2>Meditation Tips</h2>
    <p>Our resources provide everything you need to build a sustainable meditation practice into your life for long lasting benefits.</p>
    <ul>
      <li>Basic Meditation</li>
      <li>Starting a Meditation Practice</li>
      <li>What is the right amount of time to meditate?</li>
      <li>How to find the best time to meditate</li>
    </ul>
  </div>
  </div>
</>
  );
};

export default Meditationdetail;





