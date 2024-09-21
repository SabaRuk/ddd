import React, { useState, useEffect } from 'react';
import './BottomNavbar.css'; // Import CSS file

const BottomNavbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setIsVisible(true);
            } else {
                // Scrolling up
                setIsVisible(false);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return (
        <div className={`bottom-navbar ${isVisible ? 'visible' : ''}`}>
            <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
        </div>
    );
};

export default BottomNavbar;