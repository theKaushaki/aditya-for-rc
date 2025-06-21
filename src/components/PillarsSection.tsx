import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Eye } from 'lucide-react';

const PillarsSection = () => {
  const pillars = [
    {
      title: "Connection Across States",
      icon: Users,
      content: [
        "At least one offline meetup in Odisha, West Bengal, and the North East every term",
        "Monthly online bonding sessions - whether casual, academic, or creative",
        "Mandate for casual theme-based meetups to celebrate regional cultures and stories"
      ],
      italicText: "Because distance should never mean disconnection."
    },
    {
      title: "Academic and Mentorship Support",
      icon: BookOpen,
      content: [
        "Study buddy pairing by course or level",
        "Pre-exam crash sessions and doubt rooms",
        "Open peer-led tutorial sessions – no hierarchy, just help"
      ],
      italicText: "For we'll rise higher when we stop struggling alone."
    },
    {
      title: "Visibility and Accountability",
      icon: Eye,
      content: [
        "You'll know who's leading, someone you can turn to - with a real face, not just a WhatsApp number",
        "Anonymous monthly sentiment check-ins to listen, reflect, and act together as a house and region"
      ],
      italicText: "Let's make leadership visible - not just when deadlines are near."
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-gradient-to-b from-gray-50 via-indigo-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            What We'll Build – A Region That Feels Like Home
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            This isn't about ticking boxes. It's about shifting the culture.
          </p>
          <p className="text-xl font-semibold text-indigo-700">
            Three Pillars: Connect, Support, Represent
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between min-h-[460px] h-full bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div>
                <div className="flex items-center mb-4">
                  <pillar.icon className="w-8 h-8 text-indigo-700 mr-3" />
                  <h3 className="text-xl font-bold text-indigo-900">
                    {pillar.title}
                  </h3>
                </div>

                <ul className="space-y-3 mb-4 leading-loose text-gray-700">
                  {pillar.content.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              {pillar.italicText && (
                <div className="mt-auto pt-4 border-t border-indigo-100">
                  <p className="text-indigo-600 italic text-sm mt-2">
                    {pillar.italicText}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
