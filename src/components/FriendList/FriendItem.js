import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';
import { FriendEditor } from 'components/FriendEdit/FriendEdit';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { onDeleteContact } from 'utils/notify';

import { FriendDescription, StyledFrendItem } from './FriendItem.styled';

export const FriendItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <StyledFrendItem>
      <FriendDescription>
        {name}: {number}
      </FriendDescription>
      <Box display="flex">
        <Button
          type="button"
          onClick={() => {
            onDeleteContact(name);
            dispatch(deleteContact(id));
          }}
          text="Delete"
        />
        <Button type="button" onClick={() => setIsEditOpen(true)} text="Edit" />
      </Box>
      {isEditOpen && (
        <FriendEditor
          id={id}
          name={name}
          number={number}
          onToggle={() => setIsEditOpen(false)}
        />
      )}
    </StyledFrendItem>
  );
};

// FriendItem.propTypes = {
//   children: PropTypes.node.isRequired,
// };
