import { Box, Button, IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AddContact } from 'components/ContactForm/AddContact';

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

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <NavLink to={'/contacts'}>My contacts</NavLink>
      <Button
        variant="text"
        sx={navLinkStyle}
        onClick={() => setIsDrawerOpen(true)}
      >
        Add Contact
      </Button>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography mr={3} variant="h6" component="span">
          Welcome, {name}
        </Typography>

        <IconButton onClick={() => dispatch(logoutUser())} color="inherit">
          <LogoutIcon />
        </IconButton>
      </Box>

      <AddContact
        isDrawerOpen={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
      />
    </Box>
  );
};
