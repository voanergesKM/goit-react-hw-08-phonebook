import styled from 'styled-components';

export const StyledFormTitle = styled.label`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
