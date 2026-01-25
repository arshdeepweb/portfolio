'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaDownload,
  FaCode,
  FaRocket,
  FaCog,
} from "react-icons/fa";

const Hero = () => {
  // Typing animation removed for cleaner business look


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-20 py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section - Content */}
        <motion.div className="space-y-4" variants={itemVariants}>
          {/* Greeting */}
          <motion.div 
            className="flex items-center gap-3 mt-4 text-accent-cyan font-mono text-sm md:text-base"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></div>
            <span>System Builder & Automation Consultant</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
            variants={itemVariants}
          >
            <span className="text-text-secondary">Building Scalable Systems for</span>
            <br />
            <span className="gradient-text">Growing Businesses</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-text-primary leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            I partner with agencies and founders to build custom web systems, automate workflows, and deploy internal tools that save time and drive revenue.
          </motion.p>

          {/* Trust Counters */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-accent-cyan/10 mt-8"
            variants={itemVariants}
          >
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent-cyan">50+</div>
              <div className="text-sm text-text-primary">Systems Built</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent-cyan">10k+</div>
              <div className="text-sm text-text-primary">Hours Automated</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent-cyan">100%</div>
              <div className="text-sm text-text-primary">Delivery Rate</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-accent-cyan">2+</div>
              <div className="text-sm text-text-primary">Years Experience</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Link
              href="#contact"
              className="group relative px-8 py-4 bg-accent-cyan text-dark-950 font-semibold rounded-lg overflow-hidden btn-hover"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaRocket className="w-4 h-4" />
                Book a Strategy Call
              </span>
              <div className="absolute inset-0 bg-accent-cyan/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="#projects"
              className="group px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan hover:text-dark-950 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaCode className="w-4 h-4" />
              View Scalable Systems
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 text-2xl"
            variants={itemVariants}
          >
            {[
              { icon: FaGithub, href: "https://github.com/arshdeepdev", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/arshdeepdev", label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:imarshdeep99@email.com", label: "Email" },
              { icon: FaTwitter, href: "https://x.com/arshdeepdev", label: "Twitter" },
              { icon: FaInstagram, href: "https://www.instagram.com/arshdeepweb", label: "Instagram" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent-cyan transition-colors duration-300 hover:scale-110 transform"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          variants={itemVariants}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-accent-cyan rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
            
            {/* Profile Image Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent-cyan/30 float-animation">
              <Image
                src="/header1.jpeg"
                alt="Arshdeep Singh - Full Stack Developer"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent-cyan/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent-cyan/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaCode className="text-accent-cyan text-xl" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-cyan/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent-cyan/30"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <FaRocket className="text-accent-cyan text-xl" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-8 w-12 h-12 bg-accent-cyan/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent-cyan/30"
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <FaCog className="text-accent-cyan text-lg" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
