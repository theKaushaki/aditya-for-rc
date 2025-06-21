import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PillarsSection from './components/PillarsSection';
import WhyVoteSection from './components/WhyVoteSection';
import FinalWordsSection from './components/FinalWordsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <PillarsSection />
      <WhyVoteSection />
      <FinalWordsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;