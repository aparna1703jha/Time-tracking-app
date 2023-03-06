import {
  Button,
  colors,
  Container,
  CssBaseline,
  Grid,
  Modal,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, SyntheticEvent, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';
import Typography from '@mui/material/Typography';
import TaskIcon from '@mui/icons-material/Task';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CommentIcon from '@mui/icons-material/Comment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '../components/CustomAccordian';
import TimeModal from '../components/TimeModal';
const NewTask: FC = () => {
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const inputRef = useRef(null);
  const handleChange =
    (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  // const addDateHandle = (e:any) =>{
  //   if (inputRef.current === null) return;
  //   inputRef.current.showPicker();
  // }

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dateValue, setDateValue] = useState(null);

  return (
    <Box
      component="main"
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
        height="55rem"
        maxHeight="100rem"
      >
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 2, pb: 6 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Tasks
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            Here is the list of your all the tasks belong to Project.
          </Typography>
        </Container>
        <Container maxWidth="md" component="main">
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Task 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                item
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
              <TimeModal/>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Task 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                item
                display={'flex'}
                flexDirection="column"
                xs={12}
                sm={6}
                md={4}
              ><TimeModal/>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Task 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                item
                display={'flex'}
                flexDirection="column"
                xs={12}
                sm={6}
                md={4}
              >
                
                <TimeModal/>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Container>
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </Box>
  );
};

export default NewTask;
