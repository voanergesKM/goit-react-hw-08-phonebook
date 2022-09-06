import { StyledList } from './FriendList.styled';
import { StyledFrendItem } from './FriendItem.styled';

export const ContactList = ({ list }) => {
  return (
    <StyledList>
      {list.map(contact => (
        <StyledFrendItem key={contact.id}>
          {contact.name}: {contact.number}
        </StyledFrendItem>
      ))}
    </StyledList>
  );
};
