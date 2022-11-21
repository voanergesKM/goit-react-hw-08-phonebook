import { SearchInput } from 'components/ContactForm/SearchInput.styled';
import { FormTitle } from 'components/ContactForm/FormTitle';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filter/filterSlice';
import { TextField, Typography } from '@mui/material';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <Typography title="Find contacts by name"></Typography>
      <TextField
        type="text"
        name="filter"
        value={value}
        onChange={evt => dispatch(filterChange(evt.currentTarget.value))}
      />
    </>
  );
};
