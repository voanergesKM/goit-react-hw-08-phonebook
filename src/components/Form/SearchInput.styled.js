import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 300px;
  margin-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  padding: ${p => p.theme.space[3]}px;

  :focus {
    border-color: ${p => p.theme.colors.primary};
    outline: none;
  }
`;
