import React from 'react';
import './About.css';
import image from '../assets/1.png';  // Correct image path

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <img src={image} alt="Afra Fathima portrait" className="profile-pic" />
                <div className="about-text">
                    <h2>Hi! I’m Afra Fathima</h2>
                    <p>
                        I am a Frontend Web Developer with a passion for creating engaging, dynamic, and user-friendly websites and applications. 
                        I specialize in building clean and efficient code using modern JavaScript frameworks like React and Vue. 
                        My goal is to provide seamless user experiences while also ensuring the code is scalable and maintainable.
                    </p>
                    <p>
                        With a deep interest in web technologies and continuous learning, I am constantly enhancing my skills through coding challenges, 
                        open-source contributions, and collaboration with other developers. I believe in building solutions that are not only functional but also 
                        delightful to use.
                    </p>
                    <p>
                        I am also passionate about making the web accessible to everyone. I strongly believe in creating inclusive designs that cater to users with different needs and abilities. I continuously explore best practices for web accessibility and strive to implement them in my projects.
                    </p>
                    <p>
                        In addition to my technical skills, I am an advocate for collaboration and teamwork. I enjoy working in environments where I can learn from others, share my ideas, and contribute to innovative solutions. I believe that a strong, communicative team can produce amazing results and drive success.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
