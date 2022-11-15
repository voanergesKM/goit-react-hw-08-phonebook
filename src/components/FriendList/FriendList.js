import { useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';

import { StyledList } from './FriendList.styled';
import { FriendItem } from './FriendItem';
import { FriendDescription } from './FriendItem.styled';
import { Button } from 'components/Button/Button';
import {
  useGetContactsQuery,
  useRemoveContactMutation,
} from 'redux/contactsSlice';
import { onDeleteContact } from 'utils/notify';

export const ContactList = () => {
  const { data, isFetching } = useGetContactsQuery();
  const [removeContact, result] = useRemoveContactMutation();

  let filteredContacts = data;

  const filter = useSelector(state => state.filter);

  if (filter !== '') {
    filteredContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }

  return (
    <StyledList>
      {isFetching && <PulseLoader color="#36d7b7" />}
      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => (
          <FriendItem key={id}>
            <FriendDescription>
              {name}: {phone}
            </FriendDescription>
            <Button
              type="button"
              onClick={() => {
                onDeleteContact(name);
                removeContact(id);
              }}
              text="Delete"
              disabled={result.isLoading}
            />
          </FriendItem>
        ))}
    </StyledList>
  );
};
