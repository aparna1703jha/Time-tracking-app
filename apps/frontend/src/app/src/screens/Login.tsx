import { FC, memo } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/Copyright';
import { Link as RouterLink } from 'react-router-dom';

const theme = createTheme();

const LoginScreen: FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs />
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default memo(LoginScreen);



// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   CssBaseline,
//   Avatar,
//   Typography,
// } from '@mui/material';
// import { Container } from '@mui/system';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const NewSignup = () => {
//   const signUpSchema = Yup.object({
//     first_name: Yup.string()
//       .min(6)
//       .max(16)
//       .required('Please enter your first name'),
//     last_name: Yup.string()
//       .min(6)
//       .max(16)
//       .required('Please enter your last name'),
//     email: Yup.string().email().required('Please enter your email'),
//     password: Yup.string().min(6).required('Please enter your password'),
   
//   });
//   const initialValues = {
//     first_name: '',
//     last_name: '',
//     email: '',
//     password: '',
   
//   };

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: signUpSchema,
//       onSubmit: (values, action) => {
//         console.log(values);
//         action.resetForm();
//       },
//     });

//   return (
//     <Box
//       component="main"
//       height="100%"
//       // maxWidth="xs"
//       sx={{
//         backgroundImage: `url(${'https://wallpaperaccess.com/full/5651981.jpg'})`,
//         opacity: 0.9,
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//       }}
//     >
//       <CssBaseline />
//       <Box
//         component={Container}
//         height="100vh"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Box
//           component={Container}
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           maxWidth="xs"
//           borderRadius={7}
//           sx={{ backgroundColor: '#E6D8C9' }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'primary.light' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="first_name"
//                   required
//                   variant="filled"
//                   fullWidth
//                   id="name"
//                   label="First name"
//                   autoFocus
//                   value={values.first_name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.first_name && touched.first_name ? (
//                   <p className="form-error">{errors.first_name}</p>
//                 ) : null}
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   variant="filled"
//                   id="last_name"
//                   label="Last Name"
//                   name="last_name"
//                   autoComplete="family-name"
//                   value={values.last_name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.last_name && touched.last_name ? (
//                   <p className="form-error">{errors.last_name}</p>
//                 ) : null}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   variant="filled"
//                   type="email"
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.email && touched.email ? (
//                   <p className="form-error">{errors.email}</p>
//                 ) : null}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   variant="filled"
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.password && touched.password ? (
//                   <p className="form-error">{errors.password}</p>
//                 ) : null}
//               </Grid>
           
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                 mt: 3,
//                 mb: 2,
//                 bgcolor: 'primary.light',
//                 color: 'whitesmoke',
//                 '&:hover': {
//                   backgroundColor: '#fff',
//                   color: '#3c52b2',
//                 },
//               }}
//             >
//               Sign Up
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default NewSignup;
