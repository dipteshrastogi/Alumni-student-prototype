import React, { useState } from 'react';
import './LoginPage.css'; // Make sure to link the CSS file

import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const navigate = useNavigate();

  function logins(){
    navigate('/login');
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="button" className="signup-btn" onclick={logins}>
            {/* <Link to='/dashboard'>Sign Up</Link> */}
            Sign Up
          </button>
          <p>New User then : <a href="abc">sign-in</a></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;