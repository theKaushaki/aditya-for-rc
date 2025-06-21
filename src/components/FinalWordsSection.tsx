import React from 'react';
import { motion } from 'framer-motion';

const FinalWordsSection = () => {
  const voteReasons = [
    "Vote for me if you believe Nallamala can be more than just a house name.",
    "Vote for me if you want to build something that outlives a term.",
    "Vote for me if you want events you'll actually want to attend."
  ];

  return (
    <section id="final" className="py-20 bg-gradient-to-b from-white via-amber-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-12">
            Final Words – Everyone And Everything Matters
          </h2>
          
          <div className="space-y-8">
            {voteReasons.map((reason, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                {reason}
              </motion.p>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg my-12 border border-white/50"
          >
            <p className="text-xl md:text-2xl font-bold text-indigo-900 mb-6">
              Nallamala has always been a house, now let's make Nallamala a home.
            </p>
            
            <p className="text-lg text-gray-700 italic leading-relaxed">
              Let's make every conversation, every meetup, every late-night session feel like that chai at Paradox. Real. Supportive. Transformative.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalWordsSection;