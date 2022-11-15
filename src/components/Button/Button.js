import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ text, onClick, type, disabled = false }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
