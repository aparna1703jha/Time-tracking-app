import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';

const mockData = [
  {
    id: '1',
    title: 'Free',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    language: 'JS',
  },
  {
    id: '2',
    title: 'Bug',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    language: 'TS',
  },
  {
    id: '3',
    title: 'Addon',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    language: 'Next JS',
  },
  {
    id: '4',
    title: 'Archive',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    language: '.NET',
  },
  {
    id: '5',
    title: 'Develop',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    language: 'React Native',
  },
];

const NewDashboard = () => {
  return (
    <Box
      component="main"
      // maxWidth="xs"
      sx={{
        backgroundImage: `url(${'https://static.vecteezy.com/system/resources/previews/007/167/345/original/hand-painted-brown-and-white-color-with-watercolor-texture-abstract-background-free-vector.jpg'})`,
        opacity: 0.9,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Navbar />
      <CssBaseline />

      <Box
        component={Container}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={'column'}
        marginTop="2rem"
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Projects
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Here is the list of your all projects.
        </Typography>
        <Container maxWidth="md" component="main">
          <Grid container spacing={8} alignItems="flex-end">
            {mockData.map((project) => (
              <Grid
                item
                key={project.id}
                xs={12}
                sm={6}
                md={4}
                marginTop="2rem"
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKC0R7d4-hTtczK19WQMBFd9jgyiUVKbtYg9bHyPkPcsmD3bCv2ucJJ_Cxt8n34OhDBkvRkHJ-_YY&usqp=CAU&ec=48600112"
                    alt="free code"
                  ></CardMedia>
                  <CardHeader
                    title={project.title}
                    titleTypographyProps={{ align: 'center' }}
                    action={null}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? '#3e2723'
                          : theme.palette.grey[700],
                      color: '#D8C7B5',
                    }}
                  />
                  <CardContent>{project.description}</CardContent>
                  <CardContent sx={{ fontSize: '22px', color: '#9B594A' }}>
                    {project.language}
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={'outlined'}
                      sx={{
                        backgroundColor: '#9B594A',
                        color: 'white',
                        '&:hover': { backgroundColor: 'primary.light' },
                      }}
                    >
                      Show Tasks
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </Box>
  );
};

export default NewDashboard;
