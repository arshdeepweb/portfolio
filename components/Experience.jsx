'use client';
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "July 2024 - Present",
    title: "Full Stack Developer",
    company: "ND Care PVT Limited, Amritsar, Punjab",
    description: `As a Full Stack Developer at ND Care Nirogam, I designed and implemented an affiliate dashboard panel utilizing a QR code-based lead tracking system, streamlining affiliate management and lead generation. I automated lead processing from Facebook via Pabbly, facilitating seamless handling of national and international leads with integrated email notifications, Ozentel call functions, and comprehensive database updates. Additionally, I developed an event form that automates workflows by sending emails and WhatsApp messages via the Exotel API while securely storing data. I also built a real-time, multi-currency invoice generator, enhancing financial processes and international transaction capabilities.`,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-black max-w-7xl mx-auto px-4 md:px-10 text-white py-16 px-4 sm:px-8 md:px-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-cyan-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-12 relative border-l-2 border-cyan-400 pl-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -left-3 top-1 w-6 h-6 bg-cyan-400 rounded-full border-4 border-[#0d0d0d]"></div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="italic text-gray-400">{exp.company}</p>
              <p className="text-sm text-cyan-400">{exp.year}</p>
              <p className="text-gray-300 mt-2 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
