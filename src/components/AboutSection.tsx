import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-12 text-center">
            Why Am I Here - Because I Care
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-sm border border-gray-100">
            
            {/* Photo */}
            <div className="w-64 md:w-70 aspect-[3/4] flex-shrink-0 overflow-hidden shadow-xl border-4 border-white rounded-xl hover:scale-105 transition-transform duration-300">
              <img 
                src="/images/IMG-20250614-WA0051.jpg"
                alt="Aditya Hrudaya Sahoo" 
                className="object-cover w-full h-full" 
              />
            </div>

            {/* Text */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                As a student pursuing this BS degree, I've experienced firsthand how <span className="font-bold">isolating and overwhelming</span> it can be to juggle multiple academic fronts, especially when most of the coursework is virtual and most of our friends are scattered across regions. But while attending Paradox '25, I saw the power of community - how even a single conversation over chai can completely change someone's trajectory.
              </p>
              
              <p>
                My core <span className="font-bold">vision is simple: connection.</span> I want to ensure that no student in our region feels like they're walking this path alone. Whether you're in Kolkata, Bhubaneswar, or Guwahati - you should feel seen, supported, and celebrated.
              </p>
              
              <p>
                And that's why I'm running - not just to represent a few, but to <span className="font-bold">unite all of us</span> in Nallamala House across Bengal, Odisha, and the North-East.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
