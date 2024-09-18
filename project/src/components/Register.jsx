import React, { useState } from 'react';
import './Register.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // If using npm
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    collegeEmail: '',
    password: '',
    confirmPassword: '',
    collegeName: '',
    currentWork: '',
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!formData.agree) {
      alert('Please agree to the Terms & Privacy');
      return;
    }

    // Handle form submission
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="register-page-container">
      {/* Left Section */}
      <div className="login-link-container">
        <p className="login-text">
          Already have an account?
        </p>
        <p  className="login-link">
          <NavLink to='/login'>Login</NavLink>
        </p>
      </div>

      {/* Register Form */}
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>College Email</label>
            <input
              type="email"
              name="collegeEmail"
              value={formData.collegeEmail}
              onChange={handleChange}
              placeholder="Enter your college email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <i
                className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="form-group">
            <label>College Name</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="Enter your college name"
              required
            />
          </div>

          <div className="form-group">
            <label>Currently Working At</label>
            <input
              type="text"
              name="currentWork"
              value={formData.currentWork}
              onChange={handleChange}
              placeholder="Where are you currently working?"
            />
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label>
              By creating an account you agree to our{' '}
              <a href="#!">Terms & Privacy</a>
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
