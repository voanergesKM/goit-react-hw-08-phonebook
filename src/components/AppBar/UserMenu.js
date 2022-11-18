import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return (
    <Box display="flex" marginLeft="auto">
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logoutUser())}>
        LogOut
      </button>
    </Box>
  );
};
