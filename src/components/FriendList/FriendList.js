import { useDispatch, useSelector } from 'react-redux';

import { StyledList } from './FriendList.styled';
import { FriendItem } from './FriendItem';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';

export const ContactList = () => {
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
