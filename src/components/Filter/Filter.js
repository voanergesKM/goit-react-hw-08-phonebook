import PropTypes from 'prop-types';
import { SearchInput } from 'components/ContactForm/SearchInput.styled';
import { FormTitle } from 'components/ContactForm/FormTitle';

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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
