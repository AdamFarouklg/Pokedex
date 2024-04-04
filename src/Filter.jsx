import React, { useState, useEffect } from 'react';
import FilterComponent from './FilterComponent';
import axios from 'axios'; // Import axios for making HTTP requests

const ParentFilter = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  useEffect(() => {
    // Fetch Pokemon data from PokeAPI when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100'); // Fetching first 100 Pokemon
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (option) => {
    let sortedList = [...pokemonList];

    setFilteredPokemonList(sortedList);
  };

  return (
    <div>
      <FilterComponent
        options={['Lowest Number First', 'Highest Number First', 'Alphabetically(A-Z)', 'Alphabettically(Z-A)']}
        onFilter={handleFilter}
      />
      <ul>
        {filteredPokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentFilter;