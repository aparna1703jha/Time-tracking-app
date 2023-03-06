import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC, memo } from 'react';

const Navbar: FC = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: '#9B594A',
      }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="#D8C7B5" noWrap sx={{ flexGrow: 1 }}>
          Time Tracking App
        </Typography>
        <nav>
          <Link
            variant="button"
            color="#D8C7B5"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Page 1
          </Link>
          <Link
            variant="button"
            color="#D8C7B5"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Page 2
          </Link>
          <Link
            variant="button"
            color="#D8C7B5"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Page 3
          </Link>
        </nav>
        <Button
          href="#"
          variant="outlined"
          sx={{
            my: 1,
            mx: 1.5,
            backgroundColor: 'secondary.main',
            color: 'secondary.dark',
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
