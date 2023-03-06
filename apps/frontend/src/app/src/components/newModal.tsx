
import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, Grid, ListItemButton, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import dayjs from 'dayjs';

const TimeModal = () => {
  const [dateValue, setDateValue] = useState<dayjs.Dayjs | null>(dayjs());

  const [timeValue, setTimeValue] = useState('');
  console.log(dateValue);
  console.log(timeValue);
  const [timeErr, setTimeErr] = useState(false);

  const [time, setTime] = useState<any[]>([]);

  const minDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1);
  const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 15);
  const regex   = new RegExp(/^([01]?\d|2[0-3])[hH]?:([0-5]\d)[mM]?$/);
  const regex1  = new RegExp(/^([01]?\d|2[0-3])[hH]$/);
  const regex2  = new RegExp(/^([0-5]\d)[mM]?$/);

  const addTime = () => {
    if (
      dateValue &&
      (timeValue.match(regex) ||
        timeValue.match(regex1) ||
        timeValue.match(regex2))
    ) {
      // const dateTime = `${dayjs(dateValue).format('YYYY-MM-DD')} ${timeValue}`;
      setTime((prevTime) => {
        return [...prevTime];
      });
      setTimeValue('');
      // setDateValue(dayjs());
      setTimeErr(false);
    } else {
      setTimeErr(true);
    }
  };
  const handleTime = (e: any) => {
    const timeValue = e.target.value;
    if (
      !(
        timeValue.match(regex) ||
        timeValue.match(regex1) ||
        timeValue.match(regex2)
      )
    ) {
      setTimeErr(true);
    } else {
      setTimeErr(false);
    }

    setTimeValue(timeValue);
  };

  return (
   
    <TableContainer component={Box}>
    <List>
        {time.map((val, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              flexDirection: 'column',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Grid display="flex" flexDirection="row">
              <TextField
                value={val}
                InputProps={{ readOnly: true }}
                fullWidth
                variant="standard"
                sx={{ mr: '8rem', border: 'none' }}
              />
              <Grid alignSelf={'center'}>
                <ListItemButton>
                  <AutoDeleteIcon sx={{ color: 'primary.light', mr: '1rem' }} />
                </ListItemButton>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ ml: 2 }}>
              {/* <HourglassTopIcon sx={{ mt: 3, mr: 3, color: 'secondary.dark' }} /> */}
              <DatePicker
                label="Select-date"
                minDate={dayjs(minDate)}
                maxDate={dayjs(maxDate)}
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
                renderInput={(props) => <TextField {...props} />}
              />
            </TableCell>
            <TableCell>
              <TextField
                required
                fullWidth
                variant="outlined"
                id="Time-required"
                label="(hh:mm)"
                name="Time-required"
                autoComplete="Time-required"
                value={timeValue}
                onChange={handleTime}
              />
              {timeErr ? (
                <Box component="span" sx={{ color: 'error.main' }}>
                  Invalid time
                </Box>
              ) : (
                ''
              )}
            </TableCell>

            <TableCell>
              <AddIcon sx={{ color: 'primary.light' }} onClick={addTime} />
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      
    </TableContainer>
  
  );
};
export default TimeModal;
