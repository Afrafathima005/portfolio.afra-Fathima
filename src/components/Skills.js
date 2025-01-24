import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>My Skills</h2>
            <p>I specialize in building modern, responsive, and accessible web applications. Below are some of my core skills:</p>
            <div className="skills-container">
                {/* Frontend Development */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <i className="fa fa-code"></i>
                    </div>
                    <h3>Frontend Development</h3>
                    <p>React, Vue, HTML5, CSS3, JavaScript, Sass, Bootstrap</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>

                {/* Backend Development */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <i className="fa fa-server"></i>
                    </div>
                    <h3>Backend Development</h3>
                    <p>Node.js, Express, MongoDB</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>

                {/* Version Control */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <i className="fa fa-git"></i>
                    </div>
                    <h3>Version Control</h3>
                    <p>Git, GitHub, GitLab</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>

                {/* Other Technologies */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <i className="fa fa-cogs"></i>
                    </div>
                    <h3>Other Technologies</h3>
                    <p>Python, C++, Docker, GraphQL</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>

                {/* Database Management */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <i className="fa fa-database"></i>
                    </div>
                    <h3>Database Management</h3>
                    <p>MySQL, PostgreSQL, NoSQL (MongoDB)</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>

                {/* Cloud Platforms */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <i className="fa fa-cloud"></i>
                    </div>
                    <h3>Cloud Platforms</h3>
                    <p>AWS, Google Cloud, Azure</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>

                {/* UI/UX Design */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <i className="fa fa-pencil-alt"></i>
                    </div>
                    <h3>UI/UX Design</h3>
                    <p>Figma, Adobe XD, Sketch</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>

                {/* Testing & Debugging */}
                <div className="skill-card">
                    <div className="skill-icon">
                        <i className="fa fa-bug"></i>
                    </div>
                    <h3>Testing & Debugging</h3>
                    <p>Jest, Mocha, Cypress, Chrome DevTools</p>
                    <button className="learn-more-btn">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Skills;
