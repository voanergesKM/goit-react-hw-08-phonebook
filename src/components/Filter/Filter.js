import { SearchInput } from 'components/Form/SearchInput.styled';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <SearchInput
      type="text"
      name="filter"
      value={value}
      onChange={onFilterChange}
    />
  );
};
