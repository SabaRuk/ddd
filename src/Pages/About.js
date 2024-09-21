import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>

            <section className="about-section">
                <h2 className="about-subtitle">Our Mission</h2>
                <p>At <strong>Saba<sup>2</sup>,</strong> we believe that financial constraints and complicated application processes should never hinder a student's pursuit of education. Our mission is to bridge the gap between talented students and the plethora of scholarship opportunities available in Europe. By providing a comprehensive, user-friendly platform, we aim to empower students to make informed decisions and successfully navigate their educational journeys.</p>

            </section>

            <section className="about-section">
                <h2 className="about-subtitle">What We Offer</h2>
                <ul className="about-list">
                <li>Study Abroad Application Support: Get comprehensive support with your study abroad applications, including guidance on writing personal statements, preparing for interviews, and ensuring you meet all application requirements.</li>
                    <li>Extensive Scholarship Database: We provide an extensive, up-to-date database of scholarships offered by top universities across Europe. Whether you are looking for bachelor's, master's, or doctoral programs, we have got you covered.</li>
                    <li>Customized Search Filters: Our advanced search filters allow you to narrow down your options based on program, degree, country, university ranking, tuition fees, and scholarship coverage.</li>
                    <li>Interactive Map: Explore our interactive map to visualize scholarship opportunities across different European countries, making it easier to identify your preferred study destinations.</li>
                </ul>
            </section>
        </div>
    );
}
