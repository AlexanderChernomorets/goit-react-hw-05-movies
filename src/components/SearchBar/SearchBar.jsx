import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormSearch, SearchButton, SearchInput } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearch = evt => {
    setSearchQuery(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please, Enter the film title');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <FormSearch onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="🔎 Enter film title for Search"
          onChange={handleQuerySearch}
        />
        <SearchButton type="submit">Search</SearchButton>
      </FormSearch>
    </>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
