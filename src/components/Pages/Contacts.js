import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { Container } from '@mui/system';
import { Box } from 'components/Box';
import { ContactList } from 'components/FriendList/FriendList';
import { ToastContainer } from 'react-toastify';
import { filterChange } from 'redux/filter/filterSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  return (
    <Container>
      <Box as={'main'} pt={4} maxWidth="800px" mx="auto">
        <TextField
          fullWidth
          type="search"
          name="filter"
          value={value}
          onChange={evt => dispatch(filterChange(evt.currentTarget.value))}
        />
        <ContactList />
        <ToastContainer />
      </Box>
    </Container>
  );
};
