import { AppBar, Box, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { AuthNav } from './Auth';
import { UserMenu } from './UserMenu';

export const NavBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }} mb={4}>
      <AppBar
        position="static"
        sx={{
          maxWidth: '1200px',
        }}
      >
        <Toolbar
          sx={{
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
