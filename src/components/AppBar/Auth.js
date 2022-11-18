import { Box } from 'components/Box';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box marginLeft="auto" display="flex">
      <NavLink to={'/register'}>Register</NavLink>
      <NavLink to={'/login'}>LogIn</NavLink>
    </Box>
  );
};
