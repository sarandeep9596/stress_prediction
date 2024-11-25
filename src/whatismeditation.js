import React from 'react';
import './whatismeditation.css';
import whatismeditationmain from './whatismeditationmain.png';
import mindfulness from './mindfulness.png';
import meditationskill from './meditationskill.png';
import meditationpractice from './meditationpractice.png';
import mind from './mind.png';
const Whatismeditation = () => {

    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const plusIcon = question.querySelector('.plus-icon');
            
            // Toggle active class
            question.classList.toggle('active');
            answer.classList.toggle('active');
            
            
            // Close other open answers
            questions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

    return (
      <>
    <div className='meditationpage'>
<div className='whatmeditation'>
<h1>What is meditation?</h1>
<p>Meditation isn’t about becoming a different person, a new<br/>
 person, or even a better person. It’s about training in<br/>
awareness and getting a healthy sense of perspective. You’re<br/>
not trying to turn off your thoughts or feelings. You’re learning<br/>
to observe them without judgment. And eventually, you may<br/>
start to better understand them as well.</p>
<button > <a href="https://my.clevelandclinic.org/health/articles/17906-meditation">Know more</a></button>
</div>
<div className='whatimage'>
<img src={whatismeditationmain} alt="whatismeditationmain" />
</div>
    </div>

    <div className='section_left'>
    <a href="https://www.sleephealthfoundation.org.au/sleep-topics/mindfulness-and-sleep#:~:text=Things%20you%20should%20know%3A,letting%20go%2C%20acceptance%2C%20trust">
    <img src={mindfulness} alt="mindfulness" />
    </a>
    <div className='left_description'>
    <h1>What is mindfulness?</h1>
    <p>Mindfulness is the ability to be present, to rest in the here and<br/>
     now, fully engaged with whatever we’re doing in the moment.</p>

    </div>
    </div>

    <div className='section_right'>
    <a href="https://www.verywellmind.com/different-meditation-techniques-for-relaxation-3144696">
    <img src={meditationskill} alt="meditationskill" />
    </a>
    <div className='right_description'>
    <h1>Meditation is a skill</h1>
    <p>Learning to meditate is like learning any other skill. Think of it<br/>
    like exercising a muscle that you’ve never really worked out<br/>
    before. It takes consistent practice to get comfortable. And<br/>
    it’s usually easier if you have a teacher. We’ve got you covered<br/>
     there.</p>
    </div>
    </div>

    <div className='section_left'>
    <a href="https://www.onepeloton.com/blog/benefits-of-morning-meditation/">
    <img src={meditationpractice} alt="meditationpractice" />
    </a>
    <div className='left_description'>
    <h1>It's meditation practice, not<br/> meditation perfect</h1>
    <p>There’s no such thing as perfect meditation. Sometimes your<br/>
     focus will wander or you’ll forget to follow your breath. That’s<br/>
      OK. It’s part of the experience. What’s most important is to<br/>
       meditate consistently. It’s one of those things where the<br/>
        journey is more important than the destination.</p>
    </div>
    </div>

    <div className='section_right'>
    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6557693/">
    <img src={mind} alt="mind" />
    </a>
    <div className='right_description'>
    <h1>The mind can be a weird<br/> place</h1>
    <p>It takes time to get comfortable with your mind. There might<br/>
    be setbacks along the way but that’s part of meditating.<br/>
    Keep practicing. You’re doing great just by showing up.</p>
    </div>
    </div>
<div className='questions'>
    <h1>Questions about meditation? We have<br/> answers.</h1>
    </div>
    <div class="faq-container">
    <div class="faq-item">
        <button class="faq-question">
            <span>What's the best time to meditate?</span>
            <span class="plus-icon">+</span>
        </button>
        <div class="faq-answer">
        We recommend meditating first thing in the morning if you can. It’s a nice way to start the day and is usually the easiest time to find a few<br/>
         undisturbed minutes. The most important thing is to pick a time that works for you and try to consistently meditate at that time.
        </div>
    </div>

    <div class="faq-item">
        <button class="faq-question">
            <span>How do I find time to meditate?</span>
            <span class="plus-icon">+</span>
        </button>
        <div class="faq-answer">
        Try to anchor your practice to another part of your routine, like brushing your teeth. Wake up and think: meditate, brush teeth, drink coffee. And don’t be frustrated if you miss a session. It happens. Just start right up again the next day.
        </div>
    </div>

    <div class="faq-item">
        <button class="faq-question">
            <span>Where should I meditate?</span>
            <span class="plus-icon">+</span>
        </button>
        <div class="faq-answer">
        No need to hike to the nearest mountaintop. Any reasonably quiet, comfortable place where you’re not likely to be interrupted is just fine.
        </div>
    </div>

    <div class="faq-item">
        <button class="faq-question">
            <span>What should I wear to meditate?</span>
            <span class="plus-icon">+</span>
        </button>
        <div class="faq-answer">
        You can wear whatever you like so long as you’re comfortable. It also helps to take off uncomfortable shoes and to loosen tight clothing, like ties or belts, if they’re bothering you.
        </div>
    </div>

    <div class="faq-item">
        <button class="faq-question">
            <span>How do I sit during meditation?</span>
            <span class="plus-icon">+</span>
        </button>
        <div class="faq-answer">
        Sit in the middle of a chair with your legs uncrossed, feet flat on the floor and hands resting on the legs or on your lap. The important thing is to set your body up in a way that your muscles are able to switch off and relax.
        </div>
    </div>

    <div class="faq-item">
        <button class="faq-question">
            <span>Can I meditate lying down?</span>
            <span class="plus-icon">+</span>
        </button>
        <div class="faq-answer">
        We generally recommend sitting instead of lying down. However, if it’s too painful or uncomfortable to sit upright, you’re OK lying down. Try placing a thin pillow under your head and bending your knees so your feet are flat on the floor. It’ll help protect your lower back.
        </div>
    </div>

    <div class="faq-item">
        <button class="faq-question">
            <span>Is there a particular way I should breathe?</span>
            <span class="plus-icon">+</span>
        </button>
        <div class="faq-answer">
        Nope. When we meditate, we’re not trying to breathe in a special way. Just allow the breath to be completely natural.
        </div>
    </div>

    <div class="faq-item">
        <button class="faq-question">
            <span>How do I start meditating again after a break?</span>
            <span class="plus-icon">+</span>
        </button>
        <div class="faq-answer">
            It really depends on how long you’ve been away. If it’s only been a few days, just pick up right where you left off. If it’s been at least a week, we recommend restarting the pack. If it’s been more than a month, you should probably do the Basics pack and get comfortable meditating again before you jump into anything else.
        </div>
    </div>
</div>
  </>
    );
  };
  export default Whatismeditation;
  
  
  
  
  
  