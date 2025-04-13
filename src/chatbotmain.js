import React, { useState } from 'react';
import axios from 'axios';
import './chatbotmain.css';

const Chatbotmain = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchPrediction = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { type: 'user', content: input, timestamp: new Date().toLocaleTimeString() };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", {
        input: input,
      });

      const botMessage = {
        type: 'bot',
        content: res.data.prediction,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      const errorMessage = {
        type: 'bot',
        content: "Sorry, something went wrong!",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput("");
  };

  return (
    <>
      <div className="chatmain">
        <div className="sidebar" id="sidebar">
          <div className="sidebar-content">
            <div className="header">
              <h2 className="logo">Calmly</h2>
              <button className="menu-btn">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>

            <button className="new-chat-btn">
              <i className="fa-solid fa-circle-plus"></i>
              New Chat
            </button>

            <div className="recent-chats">
              <div className="recent-chats-header">
                <i className="fa-regular fa-clock"></i>
                <h3>Recent Chats</h3>
              </div>
              <div className="chat-list">
                {/* Optional: dynamically populate recent chats */}
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-btn">
                <i className="fa-regular fa-user"></i>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="main-chat">
          <div className="chat-header">
            <div className="chat-title">
              <i className="fa-regular fa-comment"></i>
              <h2>New Chat</h2>
            </div>
            <button className="copy-btn">
              <i className="fa-regular fa-copy"></i>
            </button>
          </div>

          <div className="messages-area">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.type === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">{msg.content}</div>
                <div className="message-timestamp">{msg.timestamp}</div>
              </div>
            ))}
          </div>

          <div className="input-area">
            <div className="input-container">
              <input
                type="text"
                placeholder="Type your message..."
                className="message-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && fetchPrediction()}
              />
              <button onClick={fetchPrediction} className="send-btn">
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbotmain;
