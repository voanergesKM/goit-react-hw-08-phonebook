import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  display: block;
  cursor: pointer;

  transition: all 250ms linear;

  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
