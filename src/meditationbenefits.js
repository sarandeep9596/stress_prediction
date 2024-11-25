import React from "react";
import './meditationbenefits.css';

const MeditationBenefits = () => {
  return (
    <div className="benefitcontainer">
      <aside className="benefitsidebar">
        <h3>In this article</h3>
        <ul>
          <li>Mental health benefits of meditation</li>
          <li>Physical benefits of meditation</li>
          <li>Emotional benefits of meditation</li>
          <li>Experience the benefits of meditation with Headspace</li>
        </ul>
      </aside>
      
      <main className="benefitmain-content">
        <div className="benefitheader">
          <h1>The many benefits of meditation</h1>
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
          <p>When we sit to meditate, we are looking after ourselves in ways that might not at first seem obvious. The benefits of meditation are numerous and varied, and supported by science. Many people start meditating to manage stress, reduce anxiety, and to cultivate peace of mind. But there are thousands of studies documenting other less-known mindfulness meditation benefits, which can have a positive impact on mental, physical, and emotional health. Read on to find out more about the many health benefits of meditation you may experience when you establish a practice and <a href="#">repeat it consistently</a>.</p>
        </div>
        
        <section className="benefits-section">
          <h2>Mental health benefits of meditation</h2>
          <p>
            Most people are likely familiar with the positive side effects of meditation associated 
            with mental health: increased awareness, clarity, compassion, and a sense of calm. 
            Improved focus is another benefit commonly associated with meditation. In fact, one 
            study showed that 4 weeks of using <a href="#">the Headspace app</a> can <a href="#">increase focus by 14%</a>, while 
            another showed that just a single session <a href="#">cuts mind-wandering by 22%</a>.
          </p>
          
          <p>
            But there are even more ways meditation can benefit the mind. In a study that did not 
            use the Headspace app, researchers from John Hopkins University <a href="#">found</a> general 
            meditation programs helped ease psychological symptoms of depression, anxiety, and 
            pain related to stress. A <a href="#">published study</a> conducted at Google and Roche, in which 
            employees used Headspace for 8 weeks, had similar results: participants reported a 46% 
            reduction in depression and a 31% reduction in anxiety.
          </p>
          
          <p>
            That's not all: Another study showed that 30 days of Headspace resulted in an <a href="#">11% 
            increase in mental resilience</a>. What's more, people who used the Headspace app for just 
            10 days experienced a <a href="#">7.5% increase in satisfaction with life</a>. It's clear that regularly 
            setting aside a few minutes — <a href="#">even one minute</a> — to let go, breathe, and recharge, can 
            go a long way to improve health.
          </p>
        </section>
        
        <a href="#" className="cta-button">Get 50% off</a>

        <section className="benefits-section">
          <h2>Physical benefits of meditation</h2>
          <p>
          To appreciate the profound physical benefits of meditation,
           it’s important to understand how chronic stress can wreak havoc on the body.
          </p>
          
          <p>
          Stress stimulates the sympathetic nervous system, causing a surge of natural
           stress hormones (think: epinephrine and cortisol) in the bloodstream, which
            can negatively affect the body. For example, too much epinephrine (a.k.a. adrenaline)
             can increase the risk of heart attacks and strokes; too much cortisol can increase 
             blood sugar levels, suppress the immune system, and constrict blood vessels. Eventually,
              chronic spikes in stress hormones can lead to an increase in blood pressure, heart rate, and
               cholesterol levels, disrupting immunity, energy levels, and sleep.
          </p>
          
          <p>When the body and mind are relaxed, however — whether through meditation 
          practice or other techniques — the parasympathetic nervous system is stimulated,
           causing the body to stop releasing stress hormones. Many people who meditate
            regularly have learned to condition their body to relax on demand, and,
             according to research, can more effectively manage stress. According to
              research from the University of California, Davis, people who used generalized 
              meditations programs (not specifically Headspace) have lower levels of cortisol.
             A 2018 study found that medical students who used Headspace for just 10 days had
              a 12% decrease in stress; and a separate study found that people who used
         Headspace for 30 days reduced stress by a third.
         </p>
          <p>
          Why is stress reduction so important? It lowers blood pressure,
           heart rate, and oxygen consumption, which results in higher energy levels
         and better immunity and sleep. Plus, 
          stress reduction is key for diminishing the physical symptoms of many health conditions.
          </p>
          <p>Take inflammation, for example, which is linked to stroke,
           heart disease, cancer, diabetes, and other serious diseases.
            According to a Harvard study, meditation not only can dampen the genes
             involved in the inflammatory response, but also promotes the genes associated
              with DNA stability.

</p>
        </section>
        
        <a href="#" className="cta-button">Get 50% off</a>


        <section className="benefits-section">
          <h2>Emotional benefits of meditation</h2>
          <p>
          The brain is the part of the body where meditation can really work its magic.
           It’s certainly true that we become more capable of coping with negative emotions
            when we meditate and practice viewing heightened emotions as passing states.
             But one of the most profound advantages of meditation is that it can not only
              change our mindset and perspective, it can also physically alter our brains,
               rewiring them toward more positive thoughts and emotions. Here’s how it works.
          </p>
          
          <p>
          Meditation can decrease negative neurological connections to the medial
           prefrontal cortex — or the “me center” of the brain — dampening traits
            such as fear, stress, and anxiety. Alternatively, it also builds new positive
             neurological connections to the parts of the brain
           responsible for promoting traits like focus and decision-making.
          </p>
          
          <p>Moreover, research shows that gray matter — the area of the brain
           responsible for emotional regulation, planning, and problem-solving — as well
            as the cortical thickness, responsible for learning and memory, both increase
             with regular meditation practice. Alternatively, the amygdala, which regulates
              how we feel stress,
           fear, and anxiety, responds to meditation by shrinking.
         </p>
          <p>
          Research confirms that this rewiring of the brain through meditation
           can change it for the better. In one study, participants who meditated
            with the Headspace app for 3 weeks experienced a 57% reduction in aggression
             and reactivity to negative feedback. In another,
           10 days of Headspace reduced participants’ irritability by 27%.
          </p>
          <p>It works the other way, too: research showed that using Headspace
           increased positive emotions by 16% and compassion by 21%. Of course,
            it makes sense that meditation can affect our emotions so deeply — when
             we train to be less in our head and more aware of the present moment,
              we’re better able to distance ourselves
           from negative thoughts and emotions, and feel better in the moment.

</p>
        </section>
        
        <a href="#" className="cta-button">Get 50% off</a>
      </main>
    </div>
  );
};

export default MeditationBenefits;