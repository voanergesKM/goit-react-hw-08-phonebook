import { SearchInput } from 'components/Form/SearchInput.styled';
import { FormTitle } from 'components/Form/FormTitle';

export const Filter = ({ value, onFilterChange }) => {
  return (
    <FormTitle title="Find contacts by name">
      <SearchInput
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </FormTitle>
  );
};
