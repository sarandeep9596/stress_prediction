
import React, { useState } from 'react';
import './login.css'; // CSS for styling
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  // Regular expressions for email and password validation
  const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login validation
      if (!emailRegex.test(email)) {
        alert('Invalid email format. Use only letters and numbers before @gmail.com');
        return;
      }

      if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long, contain 1 uppercase, 1 lowercase, 1 numeric digit, and 1 special character.');
        return;
      }

      alert('Login successful!');
      navigate("/home"); // Redirect to home after successful login

    } else {
      // Signup validation
      if (!emailRegex.test(email)) {
        alert('Invalid email format. Use only letters and numbers before @gmail.com');
        return;
      }

      if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long, contain 1 uppercase, 1 lowercase, 1 numeric digit, and 1 special character.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      alert('Sign up successful! You can now log in.');
      setIsLogin(true); // Switch back to login form after signup
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {!isLogin && ( // Show confirm password field only for sign up
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className="btn">{isLogin ? 'Login' : 'Sign Up'}</button>
        
        <p>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', color: '#007bff' }}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </form>
    </div>
  
  );
};

export default Login;
