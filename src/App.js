import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Skills />
            <Experiences />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
