import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 300px;

  font-size: ${p => p.theme.fontSizes.s}px;
  padding: ${p => p.theme.space[3]}px;

  :focus {
    border-color: ${p => p.theme.colors.primary};
    outline: none;
  }
`;
