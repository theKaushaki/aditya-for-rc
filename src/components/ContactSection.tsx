import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-indigo-50 via-indigo-700 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get Involved
          </h2>
          
          <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
            Have ideas or want to volunteer? Reach out and let's co-create the future of Nallamala House.
          </p>
          
          <motion.a
            href="mailto:24f2002151@ds.study.iitm.ac.in"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-amber-500 text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-3" />
            Email Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;