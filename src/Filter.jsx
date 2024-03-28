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
    
    // Sort the list based on the option (ascending or descending)
    if (option === 'asc') {
      sortedList.sort((a, b) => a.id - b.id);
    } else if (option === 'desc') {
      sortedList.sort((a, b) => b.id - a.id);
    }

    setFilteredPokemonList(sortedList);
  };

  return (
    <div>
      <h1>Pokedex Filter</h1>
      <FilterComponent
        options={['Ascending', 'Descending']}
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