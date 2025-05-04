import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0d0d0d] via-[#111111] to-[#0d0d0d] text-white py-10 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Arshdeep Singh. All rights reserved.</p>
        
        <div className="flex space-x-6 text-gray-400 text-xl">
          <a href="mailto:imarshdeep99@email.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaEnvelope />
          </a>
          <a href="https://github.com/arshdeepweb" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/arshdeepweb" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
