import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './Auth/action';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formValid, setFormValid] = useState(true);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const userData = {
        email: data.get('email'), 
        password: data.get('password'),
      };
  
      const isFormValid = userData.email.trim() !== '' && userData.password.trim() !== '';
  
      if (isFormValid) {
        console.log('Dispatching login action');
        dispatch(login(userData));
        console.log('Login action dispatched');
        navigate('/upload');
      } else {
        setFormValid(false);
      }
    };
  
    console.log('Rendering LoginForm component');
  

  return (
    <div>
      <form onSubmit={handleSubmit} >

        <h2> Login Form</h2>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              type="password"
              autoComplete="current-password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155Fd] w-full px-15"
              type="submit"
              variant="contained"
              size="large"
              sx={{  bgcolor: '#9155Fd' }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      {!formValid && (
        <p className="text-red-500 mt-2">Please fill out all required fields before submitting.</p>
      )}
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>If you don't have an account? </p>
          <Button onClick={() => navigate('/register')} className="ml-5" size="small">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
