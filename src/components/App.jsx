import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Publications from './Publications/Publications';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  experienceData,
  publicationsData,
} from '../data/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [experiences, setExperience] = useState([]);
  const [publications, setPublications] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setExperience([...experienceData]);
    setPublications([...publicationsData]);
  }, []);

  return (
    <PortfolioProvider
      value={{ hero, about, projects, experiences, publications, contact, footer }}
    >
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Publications />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
