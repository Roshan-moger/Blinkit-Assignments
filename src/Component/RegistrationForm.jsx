import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, register } from './Auth/action';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValid, setFormValid] = useState(true);
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    console.log("Inside useEffect", jwt, auth);
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };



    // Perform additional client-side validation if needed
    const isFormValid =
      userData.firstName.trim() !== '' &&
      userData.lastName.trim() !== '' &&
      userData.email.trim() !== '' &&
      userData.password.trim() !== '';

    if (isFormValid) {
       dispatch(register(userData));

       console.log("userData",userData)

      // Redirect to the upload page on successful registration
      navigate('/upload');
    } else {
      // Set the formValid state to false if the form is not valid
      setFormValid(false);
    }
  };

   // Check if registration was successful or if there was an error
   useEffect(() => {
    if (auth.registered) {
      // Registration successful, redirect to upload page
      navigate('/upload');
    } else if (auth.error && auth.error.includes("email already exists")) {
      // Show alert for email already existing
      alert("Email already exists. Please use a different email.");
    }
  }, [auth.registered, auth.error, navigate]);
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl mb-4">Registration Form</h2>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>

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
              autoComplete="new-password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155Fd] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{  bgcolor: '#9155Fd' }}
            >
              Register
            </Button>
          </Grid>
        </Grid>

        {!formValid && (
          <p className="text-red-500 mt-2">Please fill out all required fields before submitting.</p>
        )}
      </form>

      <div className="flex justify-center flex-col items-center">
     <div className="py-3 flex items-center ">
        <p className="m-0 p-0">if you have already account ?</p>
        <Button onClick={()=> navigate("/login")} className="ml-5" size="small">
          Login
        </Button>
      </div>
</div>
    </div>
  );
};

export default RegistrationForm;
