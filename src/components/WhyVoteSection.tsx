import React from 'react';
import { motion } from 'framer-motion';

const WhyVoteSection = () => {
  const reasons = [
    "Inclusive representation for all Bengal, Odisha and the North-East",
    "Events that are accessible, inclusive, and enjoyable",
    "A house culture where you matter, and we all grow together"
  ];

  return (
    <section id="why-vote" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-8">
            Why It Matters – And Why Your Vote Counts
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We're not a notice board. We're a house.
              <br />
              And every house deserves more than just silence and form-filling.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you elect me as your Regional Coordinator for Nallamala, you're voting for:
            </p>
            
            <ul className="space-y-4 text-left max-w-2xl mx-auto">
              {reasons.map((reason, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="text-indigo-600 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white rounded-xl p-8 shadow-lg"
          >
            <p className="text-xl md:text-2xl font-semibold italic">
              Let's stop feeling invisible. Let's make this our space and time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyVoteSection;