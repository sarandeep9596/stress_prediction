import React from 'react';
import './extra.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Extra = () => {
  const navigate = useNavigate();
  const handlefitnessButtonClick = () => {
      navigate('/fitness');
  }
  return (
    <div class="containerextra">
    <h1>What kind of Zenify are you looking for?</h1>
    
    <div class="grid-containerextra">
       
        <a href="#" class="cardextra">
            <div class="card-contentextra">
                <div class="card-icon stress-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 4h16v16H4z"/>
                    </svg>
                </div>
                <span class="card-title">Mental relief</span>
            </div>
            <span class="arrow">›</span>
        </a>

        <a href="#" class="cardextra">
            <div class="card-contentextra">
                <div class="card-icon sleep-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18z"/>
                    </svg>
                </div>
                <span class="card-title">Stress less</span>
            </div>
            <span class="arrow">›</span>
        </a>

        <a href="#" class="cardextra">
            <div class="card-contentextra">
                <div class="card-icon anxiety-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                </div>
                <span class="card-title">Manage fitness</span>
            </div>
            <span class="arrow">›</span>
        </a>

        
        <a href="#" class="cardextra">
            <div class="card-contentextra">
                <div class="card-icon coach-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                </div>
                <span class="card-title">Stress less</span>
            </div>
            <span class="arrow">›</span>
        </a>

        <a href="#" class="cardextra">
            <div class="card-contentextra">
                <div class="card-icon meditation-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                    </svg>
                </div>
                <span class="card-title">Practice meditation</span>
            </div>
            <span class="arrow">›</span>
        </a>

        <a href="#" class="cardextra">
            <div class="card-contentextra">
                <div class="card-icon team-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                </div>
                <span class="card-title">Resources</span>
            </div>
            <span class="arrow">›</span>
        </a>
    </div>
</div>
  );
};

export default Extra;

