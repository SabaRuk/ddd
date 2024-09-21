import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>

            <section className="contact-section">
                <h2 className="contact-subtitle">Get In Touch</h2>
                <p>We are here to help you every step of the way. If you have any questions, need assistance, or simply want to share your success story, feel free to get in touch with us:</p>
                <ul className="contact-list">
                    <li><strong>Email</strong>: sabarukhadze2021@gmail.com</li>
                    <li><strong>Phone</strong>: +358 417 216 660</li>
                    <li><strong>Address</strong>: Tampere</li>
                </ul>
            </section>

            <section className="contact-section">
                <h2 className="contact-subtitle">Follow Us</h2>
                <p>Follow us on social media for the latest updates and scholarship news:</p>
                <ul className="contact-list">
                    <li><strong>Facebook</strong>: <a href="https://facebook.com">Facebook Page</a></li>
                    <li><strong>Twitter</strong>: <a href="https://twitter.com">Twitter Handle</a></li>
                    <li><strong>LinkedIn</strong>: <a href="https://linkedin.com">LinkedIn Page</a></li>
                </ul>
            </section>
        </div>
    );
}