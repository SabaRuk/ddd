import React, { useState, useEffect } from 'react';
import image1 from './Image1.jpg';
import image2 from './Image2.jpg';
import image3 from './Image3.jpg';

const Home = () => {
    const images = [
        image1,
        image2,
        image3
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 8000); // Switch every 10 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100vh', 
            margin: 0, 
            padding: 0, 
            boxSizing: 'border-box'
        }}>
            <img 
                src={images[currentImageIndex]} 
                alt="University" 
                style={{ 
                    width: '100%', 
                    height: '720px', // Set a fixed height for all images
                    objectFit: 'cover', // Ensures the image covers the area while maintaining aspect ratio
                    marginTop: '0', 
                    padding: 0 
                }} 
            />
            
            <div style={{ 
                backgroundColor: '#000', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                textAlign: 'center',
                width: '100%', 
                maxWidth: '2000px', 
                height: 'auto', 
                padding: '2rem', 
                margin: '0 auto', 
                marginTop: '0', 
                marginBottom: '0' 
            }}>
                <h1 style={{ 
                    color: '#fff', 
                    fontSize: '4.2vw', 
                    margin: '0',
                    fontFamily: 'system-ui, sans-serif',
                    position: 'relative',
                    display: 'inline-block',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    background: `
                        linear-gradient(90deg, #800020 50%, #000 50%) 
                        calc(100% - var(--_p, 0%))/200% 100%, 
                        linear-gradient(#800020 0 0) 0% 100%/var(--_p, 0%) var(--s) no-repeat
                    `,
                    WebkitBackgroundClip: 'text, padding-box',
                    backgroundClip: 'text, padding-box',
                    transition: '0.5s',
                    animation: 'shine 6s linear infinite'
                }}>
                    <span className="wave-text">STUDY IN EUROPE</span> <span className="wave-text">WITH SCHOLARSHIPS!</span>
                </h1>
            </div>

            <style>
                {`
                    @keyframes shine {
                        0% { background-position: 200% 0; }
                        100% { background-position: -200% 0; }
                    }
                    
                    @keyframes wave1 {
                        0% { color: #800020; }
                        20% { color: #800020; } /* stays burgundy */
                        40% { color: #fff; }    /* turns white */
                        60% { color: #fff; }    /* stays white */
                        80% { color: #800020; } /* turns burgundy again */
                        100% { color: #800020; } /* stays burgundy */
                    }
                    
                    @keyframes wave2 {
                        0% { color: #fff; }
                        20% { color: #fff; } /* stays white */
                        40% { color: #800020; } /* turns burgundy */
                        60% { color: #800020; } /* stays burgundy */
                        80% { color: #fff; } /* turns white again */
                        100% { color: #fff; } /* stays white */
                    }
                    
                    .wave-text:nth-of-type(1) {
                        animation: wave1 6s linear infinite;
                    }
                    
                    .wave-text:nth-of-type(2) {
                        animation: wave2 6s linear infinite;
                    }
                    
                `}
            </style>
        </div>
    );
};

export default Home;
