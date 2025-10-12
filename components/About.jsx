'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaRocket, 
  FaUsers, 
  FaTrophy, 
  FaHeart, 
  FaLightbulb,
  FaCog,
  FaChartLine,
  FaGlobe,
  FaCoffee
} from 'react-icons/fa';

const About = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    technologies: 0
  });

  const stats = [
    { 
      icon: FaRocket, 
      value: 50, 
      label: "Projects Completed", 
      color: "accent-cyan",
      suffix: "+"
    },
    { 
      icon: FaUsers, 
      value: 25, 
      label: "Happy Clients", 
      color: "accent-magenta",
      suffix: "+"
    },
    { 
      icon: FaTrophy, 
      value: 3, 
      label: "Years Experience", 
      color: "accent-neon",
      suffix: "+"
    },
    { 
      icon: FaCode, 
      value: 15, 
      label: "Technologies Mastered", 
      color: "accent-purple",
      suffix: "+"
    }
  ];

  const interests = [
    { icon: FaCode, text: "Clean Code", color: "accent-cyan" },
    { icon: FaRocket, text: "Innovation", color: "accent-magenta" },
    { icon: FaUsers, text: "Teamwork", color: "accent-neon" },
    { icon: FaLightbulb, text: "Problem Solving", color: "accent-purple" },
    { icon: FaChartLine, text: "Growth", color: "accent-cyan" },
    { icon: FaGlobe, text: "Global Impact", color: "accent-magenta" }
  ];

  useEffect(() => {
    const animateCounts = () => {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [stat.label.toLowerCase().replace(/\s+/g, '')]: Math.floor(current)
          }));
        }, 30);
      });
    };

    animateCounts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Hello! I'm <span className="gradient-text">Arshdeep Singh</span>
              </h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
                  With expertise in modern web technologies, I specialize in building scalable applications 
                  that solve real-world problems and deliver exceptional user experiences.
                </p>
                <p>
                  My journey in technology began with curiosity and has evolved into a career focused on 
                  continuous learning and growth. I believe in writing clean, maintainable code and 
                  creating solutions that not only meet requirements but exceed expectations.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I'm always excited to take on 
                  new challenges and collaborate with amazing people.
                </p>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-foreground mb-4">What Drives Me</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-900/50 border border-accent-cyan/20 hover:border-accent-cyan/40 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <interest.icon className="w-5 h-5 text-accent-cyan group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium text-foreground/80">{interest.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats & Visual Elements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-dark-900/50 backdrop-blur-sm border border-accent-cyan/20 rounded-2xl p-6 text-center hover:border-accent-cyan/40 transition-all duration-300 card-hover"
                  whileHover={{ y: -5 }}
                >
                  <div className="inline-flex p-4 rounded-xl bg-accent-cyan/20 text-accent-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {counts[stat.label.toLowerCase().replace(/\s+/g, '')] || 0}
                    <span className="text-accent-cyan">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-foreground/70 font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Animated Background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/5 via-accent-magenta/5 to-accent-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              className="bg-gradient-to-br from-dark-900/50 to-dark-800/50 backdrop-blur-sm border border-accent-cyan/20 rounded-2xl p-6"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <FaCoffee className="text-accent-cyan" />
                Fun Facts
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span>I drink more coffee than water ☕</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 bg-accent-magenta rounded-full"></div>
                  <span>Always learning new technologies</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 bg-accent-neon rounded-full"></div>
                  <span>Passionate about open source</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                  <span>Love solving complex problems</span>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-magenta text-dark-950 font-semibold rounded-lg btn-hover"
              >
                <FaRocket className="w-4 h-4" />
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
