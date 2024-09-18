const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Path to the user data file
const userDataFile = path.join(__dirname, 'user-data.txt');

// Route to handle registration
app.post('/register', (req, res) => {
  const { name, collegeEmail, password, confirmPassword, collegeName, currentWork } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Check if user data already exists
  if (fs.existsSync(userDataFile)) {
    return res.status(400).json({ message: 'User already registered' });
  }

  // Save user data to file
  const userData = {
    name,
    collegeEmail,
    password, // Note: In production, use hashing for passwords
    collegeName,
    currentWork,
  };

  fs.writeFile(userDataFile, JSON.stringify(userData, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving user data' });
    }
    res.status(200).json({ message: 'Registration successful' });
  });
});

// Route to handle login
app.post('/login', (req, res) => {
  const { collegeEmail, password } = req.body;

  // Check if user data file exists
  if (!fs.existsSync(userDataFile)) {
    return res.status(400).json({ message: 'No user registered' });
  }

  // Read user data from file
  fs.readFile(userDataFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading user data' });
    }

    const userData = JSON.parse(data);

    // Validate user credentials
    if (collegeEmail === userData.collegeEmail && password === userData.password) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
