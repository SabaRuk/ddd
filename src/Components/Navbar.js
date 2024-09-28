import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import "../Styles/main.css";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    // New function to handle link clicks
    const handleLinkClick = () => {
        showNavbar(); // Close the navbar
    };

    return (
        <header>
            <h3>Saba<sup>2</sup></h3>
            <nav ref={navRef}>
                {/* Use Link instead of anchor tags */}
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
