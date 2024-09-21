import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import WorldMap from './Components/WorldMap';
import UniversitySearch from './Components/UniversitySearch';
import BottomNavbar from './Components/BottomNavbar';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
    case "/Home": // Handles both "/" and "/Home" for the home page
      component = (
        <React.Fragment>
          <Home />
          <WorldMap />
          <UniversitySearch />
        </React.Fragment>
      );
      break;
    case "/About":
      component = <About />;
      break;
    case "/Contact":
      component = <Contact />;
      break;
    default:
      component = (
        <React.Fragment>
          <Home />
          <WorldMap />
          <UniversitySearch />
        </React.Fragment>
      ); // Default to the home page if the path doesn't match
  }

  return (
    <React.Fragment>
      <Navbar />
      {component}
      <BottomNavbar />
    </React.Fragment>
  );
}

export default App;