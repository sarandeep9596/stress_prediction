import React from "react";
import './meditationbenefits.css';

const Howtomeditate = () => {
  return (
    <div className="benefitcontainer">
      <div className="benefitsidebar">
        <h3>In this article</h3>
        <ul>
          <li>Get settled</li>
          <li>Breath deeply</li>
          <li>Check in </li>
          <li>Scane your body</li>
          <li>Observe the breath</li>
          <li>Allow your mind to be free</li>
          <li>Prepare to finsh</li>
          <li>Congratulate yourself</li>
        </ul>
      </div>
      
      <main className="benefitmain-content">
        <div className="benefitheader">
          <h1>How to meditate in ten minutes</h1>
          <div className="author-info">
            <div className="author-avatar"></div>
            <div className="author-text">
              Researched and written by our mindfulness and meditation experts | 
              <a href="#">Learn more</a>
              <div className="date">Sep 11, 2023</div>
            </div>
          </div>
        </div>
        
        <div className="content-text">
          <p>If you’ve decided to give meditation a shot,
           congratulations! You’ve also decided to improve your sleep,
            lower your blood pressure, increase your marital harmony and 
            reduce your stress. In fact, setting aside a little time each
             day to get to know your mind is a great
           step on the path to an altogether healthier and happier life.</p>

           <p>The easiest way to get started is with the Headspace 
           app (it also offers a whole range of meditations for different topics,
            and support throughout your meditation practice), but if you’d like
             to dip your toe in the water, you can use
            a timer and follow these simple instructions.</p>
        </div>
        
        <section className="benefits-section">
          <h2>1. Get settled</h2>
          <p>
          Find a quiet space where you can relax. Sit comfortably in a chair
           with your hands resting in your lap or on your knees. Keep your back
         straight – sitting at the front of the seat might help. Your neck should be relaxed,
          with your chin slightly tucked in.
           Commit to spending the full time on the meditation, whether you find it difficult or easy.
          </p>
        </section>
    
        <section className="benefits-section">
          <h2>2. Breathe deeply</h2>
          <p>
          Defocus your eyes, gazing softly into the middle distance.
           Take five deep, audible breaths: in through the nose and out through the mouth.
           On the last exhalation, let your eyes gently close.
          </p>
   
        </section>

        <section className="benefits-section">
          <h2>3. Check-in</h2>
          <p>
          Take a few moments to settle into your body. Gently observe your posture,
           and notice the sensations where your body touches the chair and your feet meet
            the ground. Feel the weight of your arms and hands resting on your legs.
        Acknowledge your senses:
           notice anything you can smell, hear or taste, sensations of heat or cold.
          </p>
     
        </section>
        <section className="benefits-section">
          <h2>4. Scan your body</h2>
          <p>
          Slowly turn your mind inwards. Scan your body from head to toe,
           observing any tension or discomfort. Don’t try to change what you find,
            simply take note of it. Scan again, although this time notice which parts
             of the body feel relaxed. Take about 20 seconds for each scan. Now turn
              your awareness to your thoughts. Notice any thoughts that arise without
             attempting to alter them. Gently note your underlying mood, just becoming 
             aware of what’s there without judgment. If there’s nothing obvious, that’s fine, too.
          </p>
     
        </section>

        <section className="benefits-section">
          <h2>5. Observe the breath</h2>
          <p>
          Bring your attention to your breathing. Don’t make any effort to change it,
           just observe the rising and falling sensation that it creates in the body.
            Notice where these sensations occur – be it your belly, your chest, your shoulders,
             or anywhere else. For a few moments, focus on the quality of each breath, noting whether
              it’s deep or shallow, long or short, fast or slow. Begin silently counting the breaths:
               1 as you inhale, 2 as you exhale, 3 on the next inhalation, and so on, up to 10.
                Then start again at 1. While doing this, it’s completely normal for thoughts to bubble up.
                 You don’t need to ‘do’ anything – just guide your attention back to the breath when you realise
                  the mind has wandered off. If you can remember the number you’d counted up to and start again from
                   there, or simply start from 1 again.
           Don’t rush the breathing and just allow it to continue at
            its own pace and rhythm. Continue until the timer sounds.
          </p>
     
        </section>

        <section className="benefits-section">
          <h2>6. Allow your mind to be free</h2>
          <p>
          Spend 20-30 seconds just sitting. You might find yourself inundated with thoughts
           and plans, or feel calm and focused.
           Whatever happens is completely fine. Enjoy the rare chance to let your mind simply be.
          </p>
     
        </section>
        <section className="benefits-section">
          <h2>7. Prepare to finish</h2>
          <p>
        Become aware once more of the physical feelings:
        of the chair beneath you, where your feet make contact with the floor,
         your arms and your hands resting in your lap. Notice anything you can hear, smell,
        taste or feel. When you’re ready, slowly open your eyes.
          </p>
     
        </section>

        <section className="benefits-section">
          <h2>8. Congratulate yourself</h2>
          <p>
          Well done! You just meditated for a full 10 minutes.
           Recognize how you feel—is it different from when you first sat down to meditate?
            Remind yourself of this feeling the next time you feel stressed or worried,
             and know that with just 10 minutes of meditation, you might feel a little bit better.
            
          </p>
     
        </section>
        <a href="#" className="cta-button">Get 50% off</a>
      </main>
    </div>
  );
};
export default Howtomeditate;