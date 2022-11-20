import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const navLinkStyle = {
  color: 'text.secondary',
  marginRight: 4,
  '&:hover': {
    color: 'text.primary',
  },

  '&.active': {
    color: 'white',
  },
};

export const AuthNav = () => {
  return (
    <Box mx="auto" display="flex">
      <Button
        variant="text"
        component={NavLink}
        to="/register"
        sx={navLinkStyle}
      >
        Register
      </Button>
      <Button variant="text" component={NavLink} to="/login" sx={navLinkStyle}>
        Log IN
      </Button>
    </Box>
  );
};
