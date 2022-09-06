import { StyledInputTitle } from './FormTitle.styled';

export const FormTitle = ({ title, children }) => {
  return (
    <StyledInputTitle>
      {title}
      {children}
    </StyledInputTitle>
  );
};
