import {
  Box,
  Button,
  Grid,
  TextField,
  CssBaseline,
  Avatar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import Copyright from '../components/Copyright';

const NewSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleFirstName = (e: any) => {
    const firstName = e.target.value;
    if (firstName.length < 6 || firstName.length > 16) {
      setFirstNameErr(true);
    } else {
      setFirstNameErr(false);
    }

    setFirstName(firstName);
  };

  const handleLastName = (e: any) => {
    const lastName = e.target.value;
    if (lastName.length < 2 || lastName.length > 16) {
      setLastNameErr(true);
    } else {
      setLastNameErr(false);
    }
    setLastName(lastName);
  };

  const handleEmail = (e: any) => {
    const email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    setEmail(email);
  };

  const handlePassword = (e: any) => {
    const password = e.target.value;
    if (password.length < 6 || password.length > 16) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }

    setPassword(password);
  };
  const clearField = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = e.target[0].value;
    if (firstName.length < 6 || firstName.length > 16) {
      setFirstNameErr(true);
    } else {
      setFirstNameErr(false);
    }

    const lastName = e.target[1].value;
    if (lastName.length < 2 || lastName.length > 16) {
      setLastNameErr(true);
    } else {
      setLastNameErr(false);
    }

    const email = e.target[2].value;
    if (!email.match(emailRegex)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    const password = e.target[3].value;
    if (password.length < 6 || password.length > 16) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    clearField();
  };

  return (
    <Box
      component="main"
      height="100%"
      // maxWidth="xs"
      sx={{
        backgroundImage: `url(${'https://wallpaperaccess.com/full/5651981.jpg'})`,
        opacity: 0.9,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <CssBaseline />
      <Box
        component={Container}
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={'column'}
      >
        <Box
          component={Container}
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth="xs"
          borderRadius={7}
          sx={{ backgroundColor: '#E6D8C9' }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="first_name"
                  required
                  variant="filled"
                  fullWidth
                  id="name"
                  label="First name"
                  value={firstName}
                  onChange={handleFirstName}
                />

                {firstNameErr ? (
                  <Box component="span" sx={{ color: 'error.main' }}>
                    First Name should be between 6-16 words
                  </Box>
                ) : (
                  ''
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={handleLastName}
                />
                {lastNameErr ? (
                  <Box component="span" sx={{ color: 'error.main' }}>
                    Last Name should be between 2-16 words
                  </Box>
                ) : (
                  ''
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmail}
                />
                {emailErr ? (
                  <Box component="span" sx={{ color: 'error.main' }}>
                    Invalid email
                  </Box>
                ) : (
                  ''
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePassword}
                />
                {passwordErr ? (
                  <Box component="span" sx={{ color: 'error.main' }}>
                    password should be between 6-16 words
                  </Box>
                ) : (
                  ''
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: 'primary.light',
                color: 'whitesmoke',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                  color: 'secondary.main',
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </Box>
  );
};

export default NewSignup;
