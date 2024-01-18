import React from 'react';
import Authentificate from './components/Authentificate.js';
import axios from 'axios';

const App = () => {
  const handleSignUp = (signUpData) => {
    axios.post('http://localhost:3000/api/users', signUpData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleLogin = (loginData) => {
    axios.get('http://localhost:3000/api/users', loginData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleToggleAuth = () => {
  };

  return (
    <div>
      <Authentificate onSignUp={handleSignUp} onLogin={handleLogin} onToggleAuth={handleToggleAuth} />
    </div>
  );
};

export default App;