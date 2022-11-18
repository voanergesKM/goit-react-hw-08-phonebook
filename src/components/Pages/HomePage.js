import { Box } from 'components/Box';

export const WelcomePage = () => {
  return (
    <Box as={'main'} maxWidth="400px" mx="auto" textAlign="center">
      <p>Welcome to your phone book page.</p>
      <p>Please register or login.</p>
    </Box>
  );
};
