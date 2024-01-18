// Authentificate.js
import React, { useState } from 'react';
import '../components_style/Authentificate.css';

const Authentificate = ({ onSignUp, onLogin, onToggleAuth }) => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleToggleForm = () => {
      setIsSignUp(!isSignUp);
    };
  
    const handleAuthAction = () => {
      if (isSignUp) {
        const signUpData = {
          username,
          email,
          password,
        };
        onSignUp(signUpData);
      } else {
        const loginData = {
          username, 
          password,
        };
        onLogin(loginData);
      }
    };
  
    return (
      <div className="auth-container">
        <span className="close-btn" onClick={onToggleAuth} id="back">
          Go Back
        </span>
        <h2>{isSignUp ? 'Create an account' : 'Log in'}</h2>
  
        {isSignUp && (
          <>
            <div className="input-group">
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </>
        )}
  
      {!isSignUp && (
          <div className="input-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
      )}
  
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
  
        <button onClick={handleAuthAction}>{isSignUp ? 'Create Account' : 'Log in'}</button>
        <p onClick={handleToggleForm} className="toggle-form">
          {isSignUp ? 'Already have an account? Log in here.' : 'Don\'t have an account? Sign up here.'}
        </p>
      </div>
    );
};

export default Authentificate;
