'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaTwitter, 
  FaInstagram,
  FaHeart,
  FaRocket,
  FaCode,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/arshdeepweb",
      label: "GitHub",
      color: "hover:text-foreground"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/arshdeepweb",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:imarshdeep99@email.com",
      label: "Email",
      color: "hover:text-accent-cyan"
    },
    {
      icon: FaTwitter,
      href: "https://x.com/arshwebdev",
      label: "Twitter",
      color: "hover:text-sky-400"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/arshdeepweb",
      label: "Instagram",
      color: "hover:text-pink-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 border-t border-accent-cyan/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-magenta/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-20 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center">
                <FaCode className="w-5 h-5 text-dark-950" />
              </div>
              <span className="text-2xl font-display font-bold gradient-text">
                Arshdeep Singh
              </span>
            </div>
            
            <p className="text-foreground/70 leading-relaxed mb-6 max-w-md">
              Full-stack developer passionate about creating innovative digital solutions 
              that make a real impact. Let's build something amazing together!
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-dark-800/50 border border-accent-cyan/20 rounded-xl text-foreground/60 ${social.color} transition-all duration-300 hover:border-accent-cyan/40 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-4"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/70">
                <FaEnvelope className="w-4 h-4 text-accent-cyan" />
                <a 
                  href="mailto:imarshdeep99@email.com"
                  className="hover:text-accent-cyan transition-colors duration-300"
                >
                  imarshdeep99@email.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <FaRocket className="w-4 h-4 text-accent-magenta" />
                <span>Available for freelance work</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 border-t border-accent-cyan/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-foreground/60">
              <span>© {currentYear} Arshdeep Singh. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>and lots of coffee.</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-dark-800/50 border border-accent-cyan/20 rounded-lg text-foreground/70 hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-8 right-8 w-2 h-2 bg-accent-cyan rounded-full opacity-60"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-1 h-1 bg-accent-magenta rounded-full opacity-40"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent-neon rounded-full opacity-50"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;