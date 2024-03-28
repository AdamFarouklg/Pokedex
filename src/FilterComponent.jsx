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
      <select value={selectedOption} onChange={handleOptionChange} className="select-box">
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <button onClick={handleFilter} className="filter-button">Filter</button>
    </div>
  );
};

export default FilterComponent;