import { ModeEdit, PersonRemove } from '@mui/icons-material';
import { Box, IconButton, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { FriendEditor } from 'components/FriendEdit/FriendEdit';
import { onDeleteContact } from 'utils/notify';

export const FriendItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <ListItem>
      <Box maxWidth={'400px'}>
        <Typography variant="h5" component="p">
          {name}:
        </Typography>
        <Typography variant="h5" component="span">
          {number}
        </Typography>
      </Box>
      <Box display="flex">
        <IconButton
          type="button"
          onClick={() => setIsEditOpen(true)}
          color="inherit"
        >
          <ModeEdit />
        </IconButton>
        <IconButton
          type="button"
          onClick={() => {
            onDeleteContact(name);
            dispatch(deleteContact(id));
          }}
          color="inherit"
        >
          <PersonRemove />
        </IconButton>
      </Box>
      {isEditOpen && (
        <FriendEditor
          id={id}
          name={name}
          number={number}
          onToggle={() => setIsEditOpen(false)}
        />
      )}
    </ListItem>
  );
};

FriendItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
