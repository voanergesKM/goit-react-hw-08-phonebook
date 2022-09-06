import { StyledFormTitle } from './FormTitle.styled';

export const FormTitle = ({ title, children }) => {
  return (
    <StyledFormTitle>
      {title}
      {children}
    </StyledFormTitle>
  );
};
