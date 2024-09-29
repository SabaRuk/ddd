import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import WorldMap from './Components/WorldMap';
import UniversitySearch from './Components/UniversitySearch';

function App() {
  useEffect(() => {
    // Check if the viewer has already been counted in this session
    if (!localStorage.getItem('viewed')) {
      // Increment the view count
      let count = parseInt(localStorage.getItem('viewCount')) || 0;
      count++;
      localStorage.setItem('viewCount', count);
      localStorage.setItem('viewed', 'true');
      console.log(`View count: ${count}`); // For debugging
    } else {
      console.log('You have already viewed this page in this session.');
    }
  }, []); // Run this effect once on component mount

  return (
    <Router>
      <Navbar />
      
      {/* Defining Routes for Different Pages */}
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <React.Fragment>
              <Home />
              <WorldMap />
              <UniversitySearch />
            </React.Fragment>
          } 
        />
        
        {/* About Route */}
        <Route path="/about" element={<About />} />
        
        {/* Contact Route */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Catch-all Route: Default Route */}
        <Route 
          path="*" 
          element={
            <React.Fragment>
              <Home />
              <WorldMap />
              <UniversitySearch />
            </React.Fragment>
          } 
        />
      </Routes>
      
      {/* Footer Navbar */}
      
    </Router>
  );
}

export default App;  