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
const handleevidencemeditationClick = () => {
  navigate('/evidencebasedmeditation');
}
const handlemindfulnessonClick = () => {
  navigate('/mindfulness');
}

const handletechniqueonClick = () => {
  navigate('/meditationtechnique');
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
           Zenify, you learn to be more present for everything you<br/>
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
Basics steps is for any adult starting or<br/>
refreshing a practice.<br/>
And the ‘Meditation for Kids’ collection is for the little ones, to<br/>
 help them with emotions, relaxation, and bedtime.</p>
</div>

<div>
<div className='imageflex'>
<img src={meditation4} alt="meditation4" />
    <h1 onClick={handleevidencemeditationClick }>Evidence-based <br/>meditation</h1>
</div>
<p>The effectiveness of our guided meditations<br/>
is supported by evidence-based research<br/>
studies. For example, 30 days of using the<br/>
Zenify meditation app led to a 32%<br/>
reduction in stress .</p>
</div>

<div>
<div className='imageflex'>
<img src={meditation5} alt="meditation5" />
    <h1 onClick={handlemindfulnessonClick}>Practice<br/>mindfulness<br/>meditation</h1>
</div>
<p>We make it easy to understand what kind of<br/>
meditation would best serve you. Guided vs.<br/>
unguided? Body scan vs. visualization?<br/>
Zenify helps you to integrate the rights<br/>
 tools and techniques into your practice.</p>
</div>

<div>
<div className='imageflex'>
<img src={meditation6} alt="meditation6" />
    <h1 onClick={handletechniqueonClick}>Meditation <br/>Techniques</h1>
</div>
<p>We make it easy to understand what kind of<br/>
meditation would best serve you. Guided vs.<br/>
unguided? Body scan vs. visualization?<br/>
Zenify helps you to integrate the rights<br/>
 tools and techniques into your practice.</p>
</div>
</div>

<h1>Meditations for any mind, any mood, any goal</h1>
<div class="containermeditation">
  <div class="box">
    <h2>Meditation benefits</h2>
    <p>Meditation is a straightforward practice to help you look after your mind and improve your mental health. Learn what a regular practice can do for you.</p>
    <ul>
      <li><a href="https://www.integral.global/learn/10-reasons-meditation-isnt-working-for-you#:~:text=Keeping%20a%20consistent%20meditation%20practice,day%20but%20at%20different%20times.">What if I don't notice meditation benefits right away?</a></li>
      <li><a href="https://www.mayoclinic.org/tests-procedures/meditation/in-depth/meditation/art-20045858" >Meditation for stress</a></li>
      <li><a href="https://insighttimer.com/juliepeters/guided-meditations/meditation-for-releasing-sadness">Meditation for sadness</a></li>
      <li><a href="https://siyli.org/resources/guided-meditations/guided-meditation-self-compassion?utm_term=&utm_campaign=2023+%7C+SIYLI+%7C+DSA+%7C+CA,+US,+UK,+GER,+IN&utm_source=adwords&utm_medium=ppc&hsa_acc=6144171638&hsa_cam=19613648382&hsa_grp=144007193885&hsa_ad=646246143519&hsa_src=g&hsa_tgt=dsa-19959388920&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA3ZC6BhBaEiwAeqfvys9LuJc045wF74U1p2CMbctQeJhfX5xrZQxHisJr05zfqkwTcdDrRRoCXQEQAvD_BwE">Meditation for Self-Compassion</a></li>
      <li><a href="https://contentedmind.uk/the-most-powerful-meditations-for-self-esteem/">Meditation for self-esteem</a></li>
      <li><a href="https://rickhanson.com/meditations-for-happiness-love-and-inner-peace/">Meditation for happiness</a></li>
      <li><a href="https://mindfullittles.org/resources/?gad_source=1&gclid=CjwKCAiA3ZC6BhBaEiwAeqfvyjMyZKw1VY60zXOeROATTu8mBpyzOnhASnyZO5Idi94x4BGwGOenXBoCtRQQAvD_BwE">Meditation for Parenting</a></li>
    </ul>
  </div>
  <div class="box">
    <h2>How to meditate</h2>
    <p>You couldn’t be in better hands when it comes to learning how to meditate. Read up on all the latest guidance and tips to get your practice started.</p>
    <ul>
      <li><a href="./howtomeditate">How to meditate</a></li>
      <li><a href="https://inbloomproject.com/blog-2/what-is-the-difference-between-thinking-and-meditating">What is the difference between thinking and meditating?</a></li>
      <li><a href="https://www.calm.com/blog/noting-meditation#:~:text=One%20of%20the%20best%20ways,physical%20sensations%20as%20they%20occur.">What the Noting Technique is, and how to take advantage of it</a></li>
     
    </ul>
  </div>

  <div class="box">
    <h2>Guided Meditation</h2>
    <p>From resources, single exercises, and bite-sized sessions, Zenify  provide guided meditations to help you navigate whatever life throws your way.</p>
    <ul>
      <li><a href="https://www.verywellmind.com/body-scan-meditation-why-and-how-3144782">Body scan meditation to reduce stress</a></li>
      <li><a href="https://positivepsychology.com/gratitude-meditation-happiness/">Gratitude meditation</a></li>
      <li><a href="https://buddho.org/book/walking-meditation/?gad_source=1&gclid=CjwKCAiA3ZC6BhBaEiwAeqfvyv3yuHrEfu_cBAAQXBJGvqLLR6BWV1IjdWoq0oBtt2WEyCFMls-GKhoCOrsQAvD_BwE">Walking meditation</a></li>
      <li><a href="https://www.nomeatathlete.com/how-to-meditate-while-you-run/">Running meditation</a></li>
      <li><a href="https://positivepsychology.com/compassion-meditation/">Meditation for compassion</a></li>
    </ul>
  </div>

  <div class="box">
    <h2>Timed meditations</h2>
    <p>No matter how much time you have to meditate, Zenify can help.</p>
    <ul>
      <li><a href="https://www.calm.com/blog/one-minute-meditation">1 minute</a></li>
      <li><a href="https://www.verywellmind.com/practice-5-minute-meditation-3144714">5 minute</a></li>
      <li><a href="https://www.mindful.org/a-10-minute-meditation-for-deep-relaxation/">10 minute</a></li>
      <li><a href="https://palousemindfulness.com/meditations/sittingmeditation20min.html">20 minute</a></li>
    </ul>
  </div>

  <div class="box">
    <h2>Meditation Tips</h2>
    <p>Our resources provide everything you need to build a sustainable meditation practice into your life for long lasting benefits.</p>
    <ul>
      <li><a href="https://zenhabits.net/meditation-guide/">Basic Meditation</a></li>
      <li><a href="./meditationtechnique">Starting a Meditation Practice</a></li>
      <li><a href="./guidemeditation">What is the right amount of time to meditate?</a></li>
      <li><a href="https://mindworks.org/blog/when-is-the-best-time-of-day-to-meditate/">How to find the best time to meditate</a></li>
    </ul>
  </div>
  </div>
</>
  );
};

export default Meditationdetail;





