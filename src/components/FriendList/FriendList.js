import { StyledList } from './FriendList.styled';
import { FriendItem } from './FriendItem';
import { StyledButton } from 'components/ContactForm/FormButton.styled';
import { FriendDescription } from './FriendItem.styled';

export const ContactList = ({ list, onFriendDelete }) => {
  return (
    <StyledList>
      {list.map(({ id, name, number }) => (
        <FriendItem key={id}>
          <FriendDescription>
            {name}: {number}
          </FriendDescription>
          <StyledButton type="button" onClick={() => onFriendDelete(id)}>
            Delete
          </StyledButton>
        </FriendItem>
      ))}
    </StyledList>
  );
};
