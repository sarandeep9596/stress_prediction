import React from 'react';
import './mentalhealthdetail.css';
import mentalhealthphone from './mentalhealthphone.png';
const Mentalhealth = () => {
  
  return (
    <>
    <div className='mentalpage'>
<div className='mentalhealth'>
<h1>Supporting your mental health</h1>
<br/>
<br/>
<h3>Checking in with yourself is important for your mental health.</h3>
 <p>So learn to pay attention to your state of mind — detecting everyday anxiety,<br/>
  changing moods, or conflicting feelings -- and turn to Headspace’s tools and<br/>
   evidence-based practices.</p>
<button></button>
</div>
<div className='whatimage'>
<img src={mentalhealthphone} alt="mentalhealthphone" />
</div>
<a href="https://mindworks.org/blog/what-is-guided-meditation/" className="cta-button">Visit resource</a>
    </div>
  </>
  );
};
export default Mentalhealth;


