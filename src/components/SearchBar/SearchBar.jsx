import { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search ..."
          onChange={handleQuerySearch}
        />
        <button type='submit'>
            Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
