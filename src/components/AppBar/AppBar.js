import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { AuthNav } from './Auth';
import { UserMenu } from './UserMenu';

export const NavBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: '1400px' }}>
      <AppBar
        position="static"
        sx={{
          maxWidth: '1400px',
        }}
      >
        <Toolbar
          sx={{
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Typography variant="h6" component="span" mr={5}>
            MyPhonebook
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
