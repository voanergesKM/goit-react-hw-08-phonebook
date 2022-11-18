import { useDispatch, useSelector } from 'react-redux';

import { StyledList } from './FriendList.styled';
import { FriendItem } from './FriendItem';
import { FriendDescription } from './FriendItem.styled';
import { Button } from 'components/Button/Button';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contactsOperations';
import { useEffect, useState } from 'react';
import { onDeleteContact } from 'utils/notify';
import { Box } from 'components/Box';
import { FriendEditor } from 'components/FriendEdit/FriendEdit';

export const ContactList = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactList = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => (
        <FriendItem key={id} id={id} name={name} number={number} />
      ))}
    </StyledList>
  );
};
