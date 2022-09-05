import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl}px;
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
