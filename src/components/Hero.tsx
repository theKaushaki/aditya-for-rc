import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bulletPoints = [
    "Trying to juggle coursework",
    "Trying not to burn out", 
    "And quietly wishing things felt a little more connected"
  ];

  return (
    <section className="pt-16 min-h-screen bg-gradient-to-b from-amber-50 via-cream to-white flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.90 }}
            animate={{ opacity: 1, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-indigo-900 mb-8 leading-tight"
          >
            Let's Make Nallamala our Home
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-12"
          >
            Hey, I'm Aditya Hrudaya Sahoo.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              I'm your peer — not just another candidate. And I'm just like you:
            </p>
            
            <div className="space-y-4">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.15) }}
                  className="flex items-center justify-center"
                >
                  <span className="text-amber-600 font-bold mr-3 text-xl">•</span>
                  <span className="text-lg md:text-xl text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            onClick={scrollToContact}
            className="bg-indigo-700 text-white px-10 py-4 rounded-lg font-semibold text-xl hover:bg-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Join the Movement
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;