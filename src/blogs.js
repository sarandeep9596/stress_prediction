import React from 'react';
import './blogs.css';
import { useNavigate } from 'react-router-dom';
import articlesresources from './articlesresources.png';
const Blogs = () => {
  const topics = [
    { title: 'Meditation', icon: '😊', backgroundColor: '#FF704315', buttonColor: '#FF7043' },
    { title: 'Mindfulness', icon: '🎈', backgroundColor: '#29B6F615', buttonColor: '#29B6F6' },
    { title: 'Sleep', icon: '🌙', backgroundColor: '#7E57C215', buttonColor: '#7E57C2' },
    { title: 'Mental Health', icon: '🧠', backgroundColor: '#42A5F515', buttonColor: '#42A5F5' },
    { title: 'Explore our content', icon: '🔍', backgroundColor: '#FF572215', buttonColor: '#FF5722' }
  ];

  const trendingTopics = [
    'Meditation Quotes',
    'Mindful Ringtones and Alarms',
    'Sunday Scaries',
    'Flow State',
    'Relationship Issues',
    'Meditating with Kids'
  ];

  const navigate = useNavigate();
  const handleexplorearticleButtonClick = () => {
      navigate('/explorearticles');
  }
  return (
    
    <div className="content-grid">
       
        <section className="articles-section">
            <h1>Articles</h1>
            <p>Explore all articles on every topic</p>
            <button onClick={handleexplorearticleButtonClick} className="view-all" >
                View all articles
                <svg class="arrow-icon" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </section>

        
        <section className="topics-section">
            <h2>Choose your topic</h2>
            <div className="topics-grid">
               
                <div className="topic-card meditation">
                    <div className="topic-info">
                        <span className="topic-icon">😊</span>
                        <span className="topic-title">Meditation</span>
                    </div>
                    <button classNamen="topic-button">
                        <svg className="arrow-icon" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>

               
                <div className="topic-card mindfulness">
                    <div className="topic-info">
                        <span className="topic-icon">🎈</span>
                        <span className="topic-title">Mindfulness</span>
                    </div>
                    <button className="topic-button">
                        <svg className="arrow-icon" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
                <div className="topic-card sleep">
                    <div className="topic-info">
                        <span className="topic-icon">🌙</span>
                        <span className="topic-title">Sleep</span>
                    </div>
                    <button className="topic-button">
                        <svg className="arrow-icon" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>

               
                <div className="topic-card mental-health">
                    <div className="topic-info">
                        <span className="topic-icon">🧠</span>
                        <span className="topic-title">Mental Health</span>
                    </div>
                    <button className="topic-button">
                        <svg className="arrow-icon" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>

                
                <div className="topic-card explore">
                    <div className="topic-info">
                        <span className="topic-icon">🔍</span>
                        <span className="topic-title">Explore our content</span>
                    </div>
                    <button className="topic-button">
                        <svg className="arrow-icon" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

       
        <section className="trending-section">
            <h2>Trending</h2>
            <ul className="trending-list">
                <li><a href="#">Meditation Quotes</a></li>
                <li><a href="#">Mindful Ringtones and Alarms</a></li>
                <li><a href="#">Sunday Scaries</a></li>
                <li><a href="#">Flow State</a></li>
                <li><a href="#">Relationship Issues</a></li>
                <li><a href="#">Meditating with Kids</a></li>
            </ul>
        </section>
        <img src={articlesresources} alt="articlesresources" className="articlesresources" /> 
    </div>
  );
};

export default Blogs;
