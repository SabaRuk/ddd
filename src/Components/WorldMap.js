import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Datamap from 'datamaps';
import programCounts from './programCounts'; // Import the counts data

const WorldMap = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const FreeB = ['DEU', 'SVN']; // Free
  const HundredB = ['FIN']; // 100%
  const MFiftyB = ['AUT', 'ARM']; // >50%
  const LFiftyB = ['SWE', 'NOR']; // <50%

  const FreeM = ['ARM', 'RUS']; // Free
  const HundredM = ['HRV']; // 100%
  const MFiftyM = ['CYP', 'DNK']; // >50%
  const LFiftyM = ['CZE', 'BEL']; // <50%

  const categories = {
    'Less than 50% scholarship': { Bachelor: LFiftyB, Master: LFiftyM },
    'More than 50% scholarship': { Bachelor: MFiftyB, Master: MFiftyM },
    '100% scholarship': { Bachelor: HundredB, Master: HundredM },
    Free: { Bachelor: FreeB, Master: FreeM },
  };

  const [originalFills] = useState({
    RUS: '#FFFFFF',
    AUT: '#FFFFFF',
    ARM: '#FFFFFF',
    FIN: '#FFFFFF',
    SVN: '#FFFFFF',
    SWE: '#FFFFFF',
    ALB: '#FFFFFF',
    AND: '#FFFFFF',
    BLR: '#FFFFFF',
    BEL: '#FFFFFF',
    BIH: '#FFFFFF',
    BGR: '#FFFFFF',
    HRV: '#FFFFFF',
    CYP: '#FFFFFF',
    CZE: '#FFFFFF',
    DNK: '#FFFFFF',
    EST: '#FFFFFF',
    FRA: '#FFFFFF',
    GEO: '#FFFFFF',
    DEU: '#FFFFFF',
    GRC: '#FFFFFF',
    HUN: '#FFFFFF',
    ISL: '#FFFFFF',
    IRL: '#FFFFFF',
    ITA: '#FFFFFF',
    KAZ: '#FFFFFF',
    XKX: '#FFFFFF',
    LVA: '#FFFFFF',
    LIE: '#FFFFFF',
    LTU: '#FFFFFF',
    LUX: '#FFFFFF',
    MLT: '#FFFFFF',
    MDA: '#FFFFFF',
    MCO: '#FFFFFF',
    MNE: '#FFFFFF',
    NLD: '#FFFFFF',
    MKD: '#FFFFFF',
    NOR: '#FFFFFF',
    POL: '#FFFFFF',
    PRT: '#FFFFFF',
    ROU: '#FFFFFF',
    SMR: '#FFFFFF',
    SRB: '#FFFFFF',
    SVK: '#FFFFFF',
    ESP: '#FFFFFF',
    CHE: '#FFFFFF',
    TUR: '#FFFFFF',
    UKR: '#FFFFFF',
    GBR: '#FFFFFF',
    VAT: '#FFFFFF',
  });

  const [currentFills, setCurrentFills] = useState({ ...originalFills });

  const [activeCategories, setActiveCategories] = useState({
    Bachelor: null, // No category is active initially
    Master: null,
  });

  const [activeMode, setActiveMode] = useState('Bachelor'); // Default mode

  useEffect(() => {
    const map = new Datamap({
      element: mapContainerRef.current,
      scope: 'world',
      setProjection: function (element) {
        const projection = d3.geoMercator()
          .center([10, 55])
          .scale(600)
          .translate([element.offsetWidth / 2, element.offsetHeight / 1.6]);

        const path = d3.geoPath().projection(projection);
        return { path, projection };
      },
      fills: {
        defaultFill: '#FFFFFF',
        ...originalFills,
      },
      geographyConfig: {
        borderColor: '#000',
        borderWidth: 2,
        highlightFillColor: '#808080',
        highlightBorderColor: '#000',
        popupTemplate: function (geo, data) {
          const countryName = geo.properties.name;
          return `<div class="hoverinfo">${countryName}</div>`;
        },
      },
    });

    mapRef.current = map;

    return () => {
      if (map) {
        map.svg.selectAll('*').remove();
        map.svg.remove();
      }
    };
  }, [originalFills]);

  const toggleCategory = (category, mode) => {
    setActiveCategories((prev) => {
      const newCategories = { ...prev, [mode]: prev[mode] === category ? null : category };
      
      // Update the map based on newCategories and activeMode
      updateMapColors(newCategories[mode], mode);
      
      return newCategories;
    });
  };

  const updateMapColors = (activeCategory, mode) => {
    const categoryCodes = categories[activeCategory]?.[mode] || [];
    const newFills = { ...originalFills };

    // Reset all countries first
    Object.keys(newFills).forEach((code) => {
      newFills[code] = '#FFFFFF'; // Reset to white
    });

    // Apply color to active category
    categoryCodes.forEach((code) => {
      newFills[code] = '#800020'; // Highlight color
    });

    setCurrentFills(newFills);
    mapRef.current.updateChoropleth(newFills);
  };

  const handleModeChange = (mode) => {
    setActiveMode(mode);
    setActiveCategories((prev) => {
      const currentCategory = prev[mode];
      return { Bachelor: mode === 'Bachelor' ? currentCategory : null, Master: mode === 'Master' ? currentCategory : null };
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="map-container">
        <div style={{ marginTop: '310px', marginBottom: '-60px' }}>
          <button
            style={{
              width: '500px',
              height: '50px',
              fontSize: '16px',
              backgroundColor: activeMode === 'Bachelor' ? '#000' : '#800020', // Burgundy for inactive
              color: activeMode === 'Bachelor' ? 'white' : 'white',
              borderRadius: '0', // Square corners
              border: '1px solid #000', // Burgundy border
              padding: '8px 16px', // Padding for better touch target
              transition: 'background 0.3s ease, transform 0.3s ease', // Smooth transitions
            }}
            onClick={() => handleModeChange('Bachelor')}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.02)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Bachelor
          </button>
          <button
            style={{
              width: '500px',
              height: '50px',
              fontSize: '16px',
              backgroundColor: activeMode === 'Master' ? '#000' : '#800020', // Burgundy for inactive
              color: activeMode === 'Master' ? 'white' : 'white',
              borderRadius: '0', // Square corners
              border: '1px solid #000', // Burgundy border
              padding: '8px 16px', // Padding for better touch target
              transition: 'background 0.3s ease, transform 0.3s ease', // Smooth transitions
            }}
            onClick={() => handleModeChange('Master')}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.02)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          >
            Master
          </button>
        </div>
        <div
          id="container"
          ref={mapContainerRef}
          style={{
            position: 'relative',
            width: '1000px',
            height: '770px',
            margin: '10vh auto',
            backgroundColor: '#000',
            border: '0px solid black',
            display: 'block', // Default display
          }}
        ></div>
        <div
          style={{
            marginTop: '-70px',
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              style={{
                width: '250px',
                height: '50px',
                fontSize: '16px',
                backgroundColor: activeCategories[activeMode] === category ? '#000' : '#800020', // Burgundy for inactive
                color: activeCategories[activeMode] === category ? 'white' : 'white',
                borderRadius: '0', // Square corners
                border: '1px solid #000', // Burgundy border
                margin: '0px', // No margin for spacing
                padding: '8px 16px', // Padding for better touch target
                transition: 'background 0.3s ease, transform 0.3s ease', // Smooth transitions
              }}
              onClick={() => toggleCategory(category, activeMode)}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.02)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .map-container {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default WorldMap;
