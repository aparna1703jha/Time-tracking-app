import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { FC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Copyright from '../components/Copyright';

const NewLogin: FC = () => {
  const LoginSchema = Yup.object({
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().min(6).required('Please enter your password'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <Box
      component="main"
      // maxWidth="xs"
      sx={{
        backgroundImage: `url(${'https://wallpaperaccess.com/full/5651981.jpg'})`,

        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.9,
      }}
    >
      <CssBaseline />
      <Box
        component={Container}
        height="100vh"
        width="40%"
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
          sx={{ bgcolor: '#E6D8C9' }}
        >
          <Avatar sx={{ m: 1, backgroundColor: 'primary.light' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
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
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
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
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="form-error">{errors.password}</p>
                ) : null}
              </Grid>
            </Grid>
            <Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: 'primary.light',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                    color: 'secondary.main',
                  },
                }}
              >
                Login
              </Button>
              <Box>
                <Link component={RouterLink} to="/signup" variant="body2">
                  <Typography sx={{ color: '#034694' }}>
                    Don't have an account? Sign Up
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </Box>
  );
};
export default memo(NewLogin);
