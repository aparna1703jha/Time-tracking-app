import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Box, Grid, ListItemButton, TableBody, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';
import { string } from 'yup';

const TimeModal = () => {
  const [dateValue, setDateValue] = useState<dayjs.Dayjs | null>(dayjs());

  const [timeValue, setTimeValue] = useState('');
  const [timeErr, setTimeErr] = useState(false);

  const [time, setTime] = useState<any[]>([]);
  console.log(time, 'check');
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditData, setIsEditData] = useState('');

  const minDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1);
  const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 15);
  const regex = new RegExp(/^([01]?\d|2[0-3])[hH]?:([0-5]\d)[mM]?$/);
  const regex1 = new RegExp(/^([01]?\d|2[0-3])[hH]$/);
  const regex2 = new RegExp(/^([0-5]\d)[mM]?$/);

  const addTime = () => {
    if (
      timeValue.match(regex) ||
      timeValue.match(regex1) ||
      timeValue.match(regex2)
    ) {
      setTime((prevTime) => {
        // const id = uuid();
        return [
          ...prevTime,
          { id: prevTime.length, time: timeValue, date: dateValue },
        ];
      });
      setTimeValue('');
      setDateValue(dayjs());

      setTimeErr(false);
    } else {
      setTimeErr(true);
    }
    setToggleSubmit(true);
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

  const deleteData = (id: string) => {
    setTime((prevTime) => {
      return prevTime.filter((val) => val.id !== id);
    });
  };

  const editData = (id: string) => {
    const index = time.findIndex((elem) => {
      return elem.id === id;
    });
    const newEditData = time.find((elem) => {
      return elem.id === id;
    });
    console.log(newEditData);
    setToggleSubmit(false);
    setDateValue(newEditData.date);
    setTimeValue(newEditData.time);
    setTime((prevTime) => {
      const newTime = [...prevTime];
      newTime.splice(index, 1);
      return newTime;
    });
  };

  return (
    <TableContainer component={Box}>
      <List>
        {time.map((val, index) => (
          <ListItem
            key={val.id}
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
                value={new Date(val.date).toDateString()}
                InputProps={{ readOnly: true }}
                fullWidth
                variant="standard"
                sx={{ mr: '8rem', border: 'none' }}
              />
              <TextField
                value={val.time}
                InputProps={{ readOnly: true }}
                fullWidth
                variant="standard"
                sx={{ mr: '8rem', border: 'none' }}
              />

              <Grid alignSelf={'center'}>
                <ListItemButton>
                  <AutoDeleteIcon
                    sx={{ color: 'primary.light', mr: '1rem' }}
                    onClick={() => {
                      deleteData(val.id);
                    }}
                  />
                </ListItemButton>
              </Grid>
              <Grid alignSelf={'center'}>
                <ListItemButton>
                  <EditIcon
                    sx={{ color: 'primary.light', mr: '1rem' }}
                    onClick={() => {
                      editData(val.id);
                    }}
                  />
                </ListItemButton>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ ml: 2 }}>
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
            {toggleSubmit ? (
              <TableCell>
                <AddIcon sx={{ color: 'primary.light' }} onClick={addTime} />
              </TableCell>
            ) : (
              <TableCell>
                {' '}
                <EditIcon
                  sx={{ color: 'primary.light', mr: '1rem' }}
                  onClick={addTime}
                />
              </TableCell>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TimeModal;
