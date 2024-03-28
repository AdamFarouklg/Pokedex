import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search query:', query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div id ="searchbar"> {/* Adjust width and margin as per your design */}
      <div id ="searchbar-container">
        <div id="searchbar-box">
          <FaSearch style={{ marginRight: '5px', color: '#416EDF', backgroundColor: '#FFF' }} />
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Pokemon name, number or type"
            className='search-input'           
          />
        </div>
        <button id="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;