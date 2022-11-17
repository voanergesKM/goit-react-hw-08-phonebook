import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box maxWidth="1100px" margin="0 auto">
      <AppBar />
      <Outlet />
    </Box>
  );
};
