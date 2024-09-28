import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import WorldMap from './Components/WorldMap';
import UniversitySearch from './Components/UniversitySearch';
import BottomNavbar from './Components/BottomNavbar';

function App() {
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
      <BottomNavbar />
    </Router>
  );
}

export default App;