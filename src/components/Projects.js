import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Healthcare App</h3>
                    <p>This app is designed to help individuals with disabilities. It provides personalized recommendations for various needs like health 
                       resources, accessibility tools, and social support. It uses React for the frontend and MongoDB for storing user data.</p>
                    <a href="https://github.com/your-profile/healthcare-app" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-card">
                    <h3>Portfolio Website</h3>
                    <p>A personal website to showcase my skills, experiences, and projects. Built using React, it is fully responsive and showcases my best work. 
                       This project also demonstrates my expertise in frontend technologies.</p>
                    <a href="https://github.com/your-profile/portfolio" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-card">
                    <h3>Weather App</h3>
                    <p>An app that fetches weather data from an API and displays it in a user-friendly interface. Built using React and integrated with the OpenWeather API, 
                       this project showcases my ability to handle third-party API integration and responsive design.</p>
                    <a href="https://github.com/your-profile/weather-app" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
