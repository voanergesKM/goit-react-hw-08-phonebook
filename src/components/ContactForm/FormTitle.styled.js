import styled from 'styled-components';

export const StyledInputTitle = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
