import { StyledList } from './FriendList.styled';
import { FriendItem } from './FriendItem';
import { StyledButton } from 'components/Form/FormButton.styled';

export const ContactList = ({ list, onFriendDelete }) => {
  return (
    <StyledList>
      {list.map(({ id, name, number }) => (
        <FriendItem key={id}>
          {name}: {number}
          <StyledButton type="button" onClick={() => onFriendDelete(id)}>
            Delete
          </StyledButton>
        </FriendItem>
      ))}
    </StyledList>
  );
};
