import { Box } from 'components/Box';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <Box as="header" px={4} py={4} margin="0 auto" display="flex">
      <NavLink to={'/contacts'}>My contacts</NavLink>
      <Box marginLeft="auto" display="flex">
        <NavLink to={'/register'}>Register</NavLink>
        <NavLink to={'/login'}>LogIn</NavLink>
      </Box>
    </Box>
  );
};
