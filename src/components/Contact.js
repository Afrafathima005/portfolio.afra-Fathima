import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Say Hello!</h2>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Write your message..." required></textarea>
                <button type="submit">Submit</button>
            </form>
            <div className="info">
                <p>Or reach me at: <a href="mailto:afrafathima.m2023ai-ds@sece.ac.in">afrafathima.m2023ai-ds@sece.ac.in</a></p>
                <p>Call: 01-0110-0220</p>
            </div>
        </section>
    );
};

export default Contact;
