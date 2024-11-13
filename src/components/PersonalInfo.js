import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons
import './style/PersonalInfo.css';

const PersonalInfo = () => {
    const [typingDone, setTypingDone] = useState(false);
    const resumePath = `${process.env.PUBLIC_URL}/Website-Image.png`;

    // Set typingDone to true after the typing animation completes (3s + 1s delay)
    useEffect(() => {
        const timer = setTimeout(() => {
            setTypingDone(true);
        }, 4000); // 3s typing + 1s delay

        return () => clearTimeout(timer); // Clean up timer on unmount
    }, []);

    return (
        <section id="personal-info">
            <div className="info-container">
                <div className="text-section">
                    <h1 className={`title ${typingDone ? 'typing-done' : ''}`}>Aditya Pandya</h1>
                    <p className="details">Hello I'm a 2nd year Computer Engineering student at the University of Waterloo. I am actively looking for interesting internship opportunities. I have experience with Full-Stack, AI/ML, and Cloud Computing.</p>
                </div>
                <div className="photo-container">
                    <img 
                        src={resumePath}
                        alt="Your Name" 
                        className="profile-photo"
                    />
                </div>
            </div>
            <div className="links">
                <a 
                    href="https://github.com/pandya-aditya" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <button className="icon-button">
                        <FaGithub className="icon" />
                        GitHub
                    </button>
                </a>
                <a 
                    href="https://www.linkedin.com/in/aditya-pandya-9b326b1a0/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <button className="icon-button">
                        <FaLinkedin className="icon" />
                        LinkedIn
                    </button>
                </a>
            </div>
        </section>
    );
}

export default PersonalInfo;
