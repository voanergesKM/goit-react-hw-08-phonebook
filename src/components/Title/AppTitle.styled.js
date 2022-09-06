import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.xxl}px;
  color: ${p => p.theme.colors.text};
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
`;
