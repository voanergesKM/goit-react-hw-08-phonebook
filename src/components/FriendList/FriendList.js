import PropTypes from 'prop-types';
import { StyledList } from './FriendList.styled';
import { FriendItem } from './FriendItem';
import { FriendDescription } from './FriendItem.styled';
import { Button } from 'components/Button/Button';

export const ContactList = ({ list, onFriendDelete }) => {
  return (
    <StyledList>
      {list.map(({ id, name, number }) => (
        <FriendItem key={id}>
          <FriendDescription>
            {name}: {number}
          </FriendDescription>
          <Button
            type="button"
            onClick={() => onFriendDelete(id)}
            text="Delete"
          />
        </FriendItem>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onFriendDelete: PropTypes.func.isRequired,
};
