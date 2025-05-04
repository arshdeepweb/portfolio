'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon library you like

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-black text-white relative z-50">
      <nav className="max-w-6xl mx-auto px-4 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/header.jpeg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-semibold text-sm sm:text-base">Arshdeep Singh</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 text-sm sm:text-base">
          <li><Link href="#about" className="hover:text-gray-400 transition">About</Link></li>
          <li><Link href="#skill" className="hover:text-gray-400 transition">Skills</Link></li>
          <li><Link href="#project" className="hover:text-gray-400 transition">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-gray-400 transition">Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden fixed top-0 left-0 w-64 h-full bg-black text-white shadow-lg transition-transform duration-300 z-50">
          <div className="p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white mb-6"
            >
              <X size={24} />
            </button>
            <ul className="flex flex-col space-y-6 text-lg">
              <li><Link href="#about" onClick={() => setIsSidebarOpen(false)}>About</Link></li>
              <li><Link href="#skill" onClick={() => setIsSidebarOpen(false)}>Skills</Link></li>
              <li><Link href="#project" onClick={() => setIsSidebarOpen(false)}>Projects</Link></li>
              <li><Link href="#contact" onClick={() => setIsSidebarOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
