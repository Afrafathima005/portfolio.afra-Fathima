import React from 'react';
import './Home.css';
import backgroundImage from '../assets/2.png';  // Import the image from src/assets

function Home() {
    return (
        <section id="home" className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="home-content">
                <h1>Welcome to My Portfolio</h1>
                <h2>Hello, I'm Afra Fathima</h2>
                <p>Passionate Web Developer | Frontend Specialist | Always Learning</p>
                
                <div className="skills-summary">
                    <h3>Skills & Expertise</h3>
                    <ul>
                        <li>Frontend Development (React, Vue)</li>
                        <li>Backend Development (Node.js, Express)</li>
                        <li>Version Control (Git, GitHub)</li>
                        <li>UI/UX Design & Responsive Web Design</li>
                    </ul>
                </div>
                
                <button className="button">Get Started</button>
            </div>
        </section>
    );
}

export default Home;
