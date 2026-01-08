'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, User, Briefcase, Mail, Home } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#skill", label: "Skills", icon: Code },
    { href: "#project", label: "Projects", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (href) => {
    setIsSidebarOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-accent-cyan/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              onClick={() => handleNavClick("#")}
            >
              <div className="relative">
                <Image
                  src="/header.jpeg"
                  alt="Arshdeep Singh"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-accent-cyan/30 group-hover:border-accent-cyan transition-colors duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="font-display font-bold text-lg gradient-text">
                Arshdeep Singh
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="group relative px-4 py-2 rounded-lg text-text-primary hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                  <div className="absolute inset-0 bg-accent-cyan/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className="group relative px-6 py-2 bg-accent-cyan text-dark-950 font-semibold rounded-lg overflow-hidden btn-hover"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-accent-cyan/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative z-50 p-2 rounded-lg text-text-secondary hover:text-accent-cyan transition-colors duration-300"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isSidebarOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-dark-950/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-80 h-full bg-dark-950/95 backdrop-blur-md border-l border-accent-cyan/20 z-50 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Logo in sidebar */}
                <div className="flex items-center space-x-3 mb-8">
                  <Image
                    src="/header.jpeg"
                    alt="Arshdeep Singh"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-accent-cyan/30"
                  />
                  <span className="font-display font-bold text-lg gradient-text">
                    Arshdeep Singh
                  </span>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className="group flex items-center gap-3 px-4 py-3 rounded-lg text-text-primary hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Button in sidebar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Link
                    href="#contact"
                    onClick={() => handleNavClick("#contact")}
                    className="block w-full text-center px-6 py-3 bg-accent-cyan text-dark-950 font-semibold rounded-lg btn-hover"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
