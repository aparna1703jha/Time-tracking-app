import React from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';

const NewLoginScreen = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${'https://web-static.wrike.com/blog/content/uploads/2022/10/iStock-1339006822-e1664981338814.jpg?av=76fcc3553ae3b5177fe25adaed7c3e5a://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H8WuRINimqur8ud/time-background-dark-blue-background-with-digital-clock_b72tac2_thumbnail-1080_01.png'})`,
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Grid
          container
          borderRadius={20}
          justifyContent="center"
          alignItems="center"
          mt={10}
        >
          <Grid
            item
            maxWidth="65rem"
            width="100%"
            bgcolor="white"
            margin={4}
            padding={4}
            boxShadow={15}
            borderRadius={5}
          >
            <Grid container>
              <Grid item container>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sm={12}
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography variant="h6" component="h1">
                    You must govern the clock, not be governed by it.
                  </Typography>
                  <Grid border="1px solid #0d6efd" width={100} m={1}></Grid>
                  <Box
                    component="img"
                    sx={{
                      height: 450,
                      width: 430,
                      maxHeight: { xs: 400, md: 400 },
                      maxWidth: { xs: 400, md: 400 },
                    }}
                    alt="Time-tracker"
                    src="https://boombirds.com/blog/wp-content/uploads/4867780.jpg"
                  />
                </Grid>

                <Grid
                  item
                  container
                  px={4}
                  xs={12}
                  md={6}
                  sm={12}
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    borderLeft: { sm: '2px solid #ddd' },
                  }}
                >
                  <Grid container display="flex" justifyContent="center">
                    <Grid
                      fontSize={30}
                      sx={{
                        borderBottom: '2px solid #0d6efd',
                        cursor: 'pointer',
                      }}
                      width={220}
                      textAlign="center"
                      xs={6}
                      sm={6}
                    >
                      Join
                    </Grid>
                    <Grid
                      fontSize={30}
                      sx={{
                        borderBottom: '2px solid #EEEDE2',
                        cursor: 'pointer',
                      }}
                      width={220}
                      textAlign="center"
                      xs={6}
                      sm={6}
                      pb={1}
                    >
                      Login
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    maxWidth="100%"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={2}
                  >
                    <Stack
                      spacing={1}
                      direction="row"
                      justifyContent="center"
                      mt={1}
                    ></Stack>
                  </Grid>
                  <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                    </Grid>

                    <Grid container justifyContent="flex-start" xs={12} sm={12}>
                      <Grid
                        item
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: '#F07B00',
                            marginTop: '12px',
                            marginLeft: '23rem',
                            '&:hover': { backgroundColor: '#C9BFAE' },
                          }}
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewLoginScreen;
