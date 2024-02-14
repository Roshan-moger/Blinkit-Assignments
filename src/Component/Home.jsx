import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import RegistrationForm from './RegistrationForm';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>
        Hey Welcome <br /> Login or Register to Upload Images
      </h1>
      <Button onClick={()=>navigate('/register')}>Login/Register</Button>

      
    </div>
  );
};

export default Home;
