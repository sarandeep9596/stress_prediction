import React, { useState } from 'react';
import axios from 'axios';
import './chatbotmain.css';

const Chatbotmain = () => {
    const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const fetchModelResponse = async () => {
    try {
      const res = await axios.post('https://6ffe-35-227-129-107.ngrok-free.app/', {
        input: input, // Adjust key as per your model's API
      });
      setResponse(res.data); // Update with the model's response
    } catch (error) {
      console.error('Error fetching model response:', error);
    }
  };
    return (
        <>
         <div class="chatmain">
        <div class="sidebar" id="sidebar">
            <div class="sidebar-content">
                <div class="header">
                    <h2 class="logo">Calmly</h2>
                    <button class="menu-btn">
                    <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
                
                <button class="new-chat-btn">
                <i class="fa-solid fa-circle-plus"></i>
                    New Chat
                </button>
                
                <div class="recent-chats">
                    <div class="recent-chats-header">
                    <i class="fa-regular fa-clock"></i>
                        <h3>Recent Chats</h3>
                    </div>
                    <div class="chat-list">
                        <button class="chat-item">
                            <div class="chat-title">......</div>
                            <div class="chat-date">......</div>
                        </button>
                        <button class="chat-item">
                            <div class="chat-title">.......</div>
                            <div class="chat-date">......</div>
                        </button>
                        <button class="chat-item">
                            <div class="chat-title">.......</div>
                            <div class="chat-date">.......</div>
                        </button>
                    </div>
                </div>
                
                <div class="profile-section">
                    <div class="profile-btn">
                    <i class="fa-regular fa-user"></i>
                        <span>Profile</span>
                    </div>
                </div>
            </div>
        </div>

    
        <div class="main-chat">
            <div class="chat-header">
                <div class="chat-title">
                <i class="fa-regular fa-comment"></i>
                    <h2>New Chat</h2>
                </div>
                <button class="copy-btn">
                <i class="fa-regular fa-copy"></i>
                </button>
            </div>

           
            <div class="messages-area">
                <div class="message user-message">
                    <div class="message-content">
                        Hello, I'm feeling stressed today.
                    </div>
                    <div class="message-timestamp">10:30 AM</div>
                </div>
                <div class="message bot-message">
                    <div class="message-content">
                        I understand you're feeling stressed. Let's work through this together. Would you like to try a quick breathing exercise?
                    </div>
                    <div class="message-timestamp">10:31 AM</div>
                </div>
            </div>

          
            <div class="input-area">
                <div class="input-container">
                    <input 
                        type="text" 
                        placeholder="Type your message..."
                        class="message-input"
                        onChange={(e) => setInput(e.target.value)}
                    ></input>
                    <button onClick={fetchModelResponse} class="send-btn">
                    <i class="fa-regular fa-paper-plane"></i>
                    </button>
                </div>

                <div>
        <h3>Model Output:</h3>
        <p>{response ? response : "No response yet"}</p>
      </div>

            </div>
        </div>
    </div>
</>
);
};

export default Chatbotmain;