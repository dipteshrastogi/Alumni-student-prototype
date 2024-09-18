// src/AuthPage.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 30vw;
  border-radius: 10px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled(motion.button)`
  background: #ff7e5f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #feb47b;
  }
`;

const pageVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const pageTransition = {
  duration: 0.5,
};

const AuthPage = () => {

  const navigate = useNavigate();

  function registers(){
    navigate('/register'); 
  }

  function logins(){
    navigate('/login');
  }


  return (
    <Container>
      <Card
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1>Welcome!</h1>
        <p>Do you want to register or log in?</p>
        <Button onClick={registers}>
          Register
        </Button>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={logins}
        >
          Log In
        </Button>
      </Card>
    </Container>
  );
};

export default AuthPage;
