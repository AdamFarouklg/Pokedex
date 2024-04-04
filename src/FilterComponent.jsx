import React, { useState } from 'react';
import './index.css'; 

const FilterComponent = ({ options, onFilter }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFilter = () => {
    
    onFilter(selectedOption);
  };

  return (
    <div className="filter-container">
      <select value='Lowest Number First' onChange={handleOptionChange} className="select-box">
        <option value="" className="filter-content"></option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <button onClick={handleFilter} className="filter-button"><img src='https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/432798087_403905448924426_3766766428931072276_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aOnVN9nmKTYAb4j9grs&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdWrENH5wv7OWj5fEUxycFkcewFBfOmvwcSuaN6u8Pb7Bw&oe=663602C6'></img> Filter</button>
    </div>
  );
};

export default FilterComponent;