import { CssBaseline } from '@mui/material';
import { FC, memo } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './src/routes';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'


const App: FC = () => {
  return (
   
     
    <LocalizationProvider dateAdapter = {AdapterDayjs}>
        <>
      <CssBaseline />
      <RouterProvider router={router} />
      
    </>
    </LocalizationProvider> 
   
  );
};

export default memo(App);
