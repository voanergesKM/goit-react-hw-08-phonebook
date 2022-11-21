import { Outlet } from 'react-router-dom';
import { NavBar } from './AppBar/AppBar';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box maxWidth="1400px" margin="0 auto">
      <NavBar />
      <Outlet />
    </Box>
  );
};
