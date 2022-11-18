import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AuthNav } from './Auth';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Box as="header" px={4} py={4} margin="0 auto" display="flex">
      {isLoggedIn && <NavLink to={'/contacts'}>My contacts</NavLink>}

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
