import React, { useState } from 'react';
import countriesData from './country_names.json'; // Importing the JSON file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Function to handle search input and filtering countries
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter countries by name or capital (starts with the letter)
    if (term) {
      const filtered = countriesData.filter(
        (country) =>
          country.country.toLowerCase().startsWith(term) || 
          country.capital.toLowerCase().startsWith(term)
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries([]);
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar-wrapper">
        <span className="search-icon">
          <i className="bi bi-search"></i> {/* Bootstrap Icons search icon */}
        </span>
        <input
          type="text"
          placeholder="Search by country or capital..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <span className="microphone-icon">
          <i className="bi bi-mic"></i> {/* Bootstrap Icons microphone icon */}
        </span>
        <span className="camera-icon">
          <i className="bi bi-camera"></i> {/* Bootstrap Icons camera icon */}
        </span>
      </div>
      {filteredCountries.length > 0 && (
        <ul className="suggestions-list">
          {filteredCountries.map((country, index) => (
            <li key={index} className="suggestion-item">
              <i className="bi bi-search"></i> {/* Search icon for suggestion items */}
              <strong>{country.country}</strong> - {country.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;

