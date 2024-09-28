import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file for styling
import universities from './universitiesList';

const UniversitySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [programFilter, setProgramFilter] = useState('');
  const [degreeFilter, setDegreeFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [maxRankFilter, setMaxRankFilter] = useState('');
  const [minTuitionFilter, setMinTuitionFilter] = useState('');
  const [maxTuitionFilter, setMaxTuitionFilter] = useState('');
  const [scholarshipFilter, setScholarshipFilter] = useState('');

  const [counts, setCounts] = useState({});
  const [visibleCount, setVisibleCount] = useState(8); // Initial number of universities to display

  const applyFilters = () => {
    return universities.filter(university => {
      return (
        (searchQuery === '' || 
          university.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          university.displayTitle.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (programFilter === '' || university.program === programFilter) &&
        (degreeFilter === '' || university.degree.toLowerCase() === degreeFilter.toLowerCase()) &&
        (countryFilter === '' || university.country === countryFilter) &&
        (maxRankFilter === '' || university.rank <= parseInt(maxRankFilter)) &&
        (minTuitionFilter === '' || university.tuition >= parseInt(minTuitionFilter)) &&
        (maxTuitionFilter === '' || university.tuition <= parseInt(maxTuitionFilter)) &&
        (scholarshipFilter === '' || university.scholarship === scholarshipFilter)
      );
    });
  };

  const countUniversities = () => {
    const newCounts = {};

    universities.forEach(university => {
      if (!newCounts[university.country]) {
        newCounts[university.country] = {
          'bachelor-100': 0,
          'bachelor-50+': 0,
          'bachelor-<50': 0,
          'bachelor-free': 0,
          'bachelor-100-50+': 0,
          'bachelor-100-<50': 0,
          'bachelor-100-free': 0,
          'bachelor-50+-<50': 0,
          'bachelor-50+-free': 0,
          'bachelor-<50-free': 0,
          'bachelor-100-50+-free': 0,
          'bachelor-100-<50-free': 0,
          'bachelor-50+-<50-free': 0,
          'bachelor-100-50+-<50': 0,
          'bachelor-100-50+-<50-free': 0,
          'master-100': 0,
          'master-50+': 0,
          'master-<50': 0,
          'master-free': 0,
          'master-100-50+': 0,
          'master-100-<50': 0,
          'master-100-free': 0,
          'master-50+-<50': 0,
          'master-50+-free': 0,
          'master-<50-free': 0,
          'master-100-50+-free': 0,
          'master-100-<50-free': 0,
          'master-50+-<50-free': 0,
          'master-100-50+-<50': 0,
          'master-100-50+-<50-free': 0
        };
      }

      const baseKey = `${university.degree.toLowerCase()}`;

      const combos = {
        '100': university.scholarship === '100% Scholarship',
        '50+': university.scholarship === 'More than 50% Scholarship',
        '<50': university.scholarship === 'Less than 50% Scholarship',
        'free': university.scholarship === 'Free'
      };

      const applicableCombos = Object.entries(combos).filter(([_, condition]) => condition).map(([key]) => key);
      applicableCombos.forEach((key) => newCounts[university.country][`${baseKey}-${key}`]++);
      
      // Count combinations
      for (let i = 0; i < applicableCombos.length; i++) {
        for (let j = i + 1; j < applicableCombos.length; j++) {
          newCounts[university.country][`${baseKey}-${applicableCombos[i]}-${applicableCombos[j]}`]++;
        }
      }

      // Three combinations
      if (applicableCombos.length === 3) {
        newCounts[university.country][`${baseKey}-${applicableCombos[0]}-${applicableCombos[1]}-${applicableCombos[2]}`]++;
      }

      // All four combinations
      if (applicableCombos.length === 4) {
        newCounts[university.country][`${baseKey}-100-50+-<50-free`]++;
      }
    });

    setCounts(newCounts);
  };
  
  useEffect(() => {
    countUniversities();
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'program':
        setProgramFilter(value);
        break;
      case 'degree':
        setDegreeFilter(value);
        break;
      case 'country':
        setCountryFilter(value);
        break;
      case 'scholarship':
        setScholarshipFilter(value);
        break;
      default:
        break;
    }
  };

  const handleNumericInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'max_rank':
        setMaxRankFilter(value);
        break;
      case 'min_tuition':
        setMinTuitionFilter(value);
        break;
      case 'max_tuition':
        setMaxTuitionFilter(value);
        break;
      default:
        break;
    }
  };

  const loadMoreUniversities = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Increase the number of universities displayed
  };

  const filteredUniversities = applyFilters();
  const visibleUniversities = filteredUniversities.slice(0, visibleCount);

  return (
    <div className="university-search">
      <input 
        type="text" 
        id="search-box" 
        placeholder="Search by university name or program title..." 
        value={searchQuery} 
        onChange={handleInputChange} 
      />
      <select id="program" value={programFilter} onChange={handleSelectChange}>
        <option value="">Program</option>
        <option value="Science">Science</option>
        <option value="Arts">Arts</option>
        <option value="Social Science">Social Science</option>
        <option value="Engineering">Engineering</option>
      </select>
      <select id="degree" value={degreeFilter} onChange={handleSelectChange}>
        <option value="">Degree</option>
        <option value="Bachelor">Bachelor</option>
        <option value="Master">Master</option>
      </select>
      <select id="country" value={countryFilter} onChange={handleSelectChange}>
        <option value="">Country</option>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Finland">Finland</option>
      </select>
      <select id="scholarship" value={scholarshipFilter} onChange={handleSelectChange}>
        <option value="">Scholarship</option>
        <option value="100% Scholarship">100% Scholarship</option>
        <option value="More than 50% Scholarship">More than 50% Scholarship</option>
        <option value="Less than 50% Scholarship">Less than 50% Scholarship</option>
        <option value="Free">Free</option>
      </select>
      <input 
        type="number" 
        id="max_rank" 
        placeholder="Maximum Rank" 
        value={maxRankFilter} 
        onChange={handleNumericInputChange} 
      />
      <input 
        type="number" 
        id="min_tuition" 
        placeholder="Min Tuition" 
        value={minTuitionFilter} 
        onChange={handleNumericInputChange} 
      />
      <input 
        type="number" 
        id="max_tuition" 
        placeholder="Max Tuition" 
        value={maxTuitionFilter} 
        onChange={handleNumericInputChange} 
      />

      <div className="results">
        {visibleUniversities.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {visibleUniversities.map((university, index) => (
              <li key={index}>
                <h3>{university.name}</h3>
                <p>Program: {university.displayTitle}</p>
                <p>Degree: {university.degree}</p>
                <p>Country: {university.country}</p>
                <p>Rank: {university.rank}</p>
                <p>Tuition: ${university.tuition}</p>
                <p>Scholarship: {university.scholarship}</p>
              </li>
            ))}
          </ul>
        )}
        {visibleCount < filteredUniversities.length && (
          <div className="button-container">
            <button className="load-more-btn" onClick={loadMoreUniversities}>Load More</button>
            <button 
              className="scroll-to-top" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversitySearch;
