import PropTypes from 'prop-types';
import { StyledButton } from './FormButton.styled';

export const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
