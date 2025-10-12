'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCode, 
  FaDatabase, 
  FaMobile, 
  FaRocket,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const experiences = [
  {
    year: "July 2024 - Present",
    title: "Full Stack Developer",
    company: "ND Care PVT Limited",
    location: "Amritsar, Punjab",
    type: "Full-time",
    icon: FaBuilding,
    color: "accent-cyan",
    achievements: [
      "Designed and implemented affiliate dashboard with QR code-based lead tracking",
      "Automated lead processing from Facebook via Pabbly integration",
      "Built real-time, multi-currency invoice generator",
      "Developed event form with automated email and WhatsApp workflows",
      "Integrated Ozentel call functions and comprehensive database updates"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Pabbly", "Exotel API", "QR Codes"],
    description: `As a Full Stack Developer at ND Care Nirogam, I designed and implemented an affiliate dashboard panel utilizing a QR code-based lead tracking system, streamlining affiliate management and lead generation. I automated lead processing from Facebook via Pabbly, facilitating seamless handling of national and international leads with integrated email notifications, Ozentel call functions, and comprehensive database updates. Additionally, I developed an event form that automates workflows by sending emails and WhatsApp messages via the Exotel API while securely storing data. I also built a real-time, multi-currency invoice generator, enhancing financial processes and international transaction capabilities.`
  },
  {
    year: "2023 - 2024",
    title: "Freelance Developer",
    company: "Various Clients",
    location: "Remote",
    type: "Freelance",
    icon: FaCode,
    color: "accent-magenta",
    achievements: [
      "Delivered 20+ web applications for diverse clients",
      "Specialized in e-commerce and business automation solutions",
      "Maintained 100% client satisfaction rate",
      "Built scalable applications using modern tech stack"
    ],
    technologies: ["Next.js", "React", "MongoDB", "Express", "Tailwind CSS", "Vercel"],
    description: `During my freelance career, I worked with various clients to deliver custom web applications and digital solutions. I specialized in building e-commerce platforms, business automation tools, and modern web applications using cutting-edge technologies.`
  },
  {
    year: "2022 - 2023",
    title: "Frontend Developer",
    company: "Tech Solutions Inc",
    location: "Remote",
    type: "Full-time",
    icon: FaRocket,
    color: "accent-neon",
    achievements: [
      "Developed responsive user interfaces for web applications",
      "Collaborated with design team to implement pixel-perfect designs",
      "Optimized application performance and user experience",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "TypeScript", "CSS3", "Figma", "Git", "Jest"],
    description: `As a Frontend Developer, I focused on creating exceptional user experiences through modern web technologies. I worked closely with design teams to implement pixel-perfect interfaces and collaborated with backend developers to integrate APIs and services.`
  }
];

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-8 lg:px-20 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My professional journey in building innovative digital solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-magenta to-accent-neon transform md:-translate-x-0.5"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-cyan rounded-full border-4 border-dark-950 transform -translate-x-2 md:-translate-x-2 z-10">
                  <div className="w-full h-full rounded-full bg-accent-cyan animate-pulse"></div>
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="group relative bg-dark-900/50 backdrop-blur-sm border border-accent-cyan/20 rounded-2xl p-6 hover:border-accent-cyan/40 transition-all duration-300 card-hover"
                    whileHover={{ y: -5 }}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-accent-cyan/20 text-accent-cyan">
                          <exp.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-accent-cyan font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="p-2 rounded-lg hover:bg-accent-cyan/10 transition-colors duration-300"
                      >
                        {expandedCard === index ? (
                          <FaChevronUp className="w-4 h-4 text-accent-cyan" />
                        ) : (
                          <FaChevronDown className="w-4 h-4 text-accent-cyan" />
                        )}
                      </button>
                    </div>

                    {/* Card Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{exp.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-dark-800 text-foreground/80 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-accent-cyan mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                            <span className="text-accent-cyan mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                      className="overflow-hidden"
                      initial={false}
                      animate={{
                        height: expandedCard === index ? 'auto' : 0,
                        opacity: expandedCard === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pt-4 border-t border-accent-cyan/20">
                        <h4 className="text-sm font-semibold text-accent-cyan mb-2">Additional Achievements:</h4>
                        <ul className="space-y-1 mb-4">
                          {exp.achievements.slice(2).map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                              <span className="text-accent-cyan mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan/5 via-accent-magenta/5 to-accent-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
