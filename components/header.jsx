'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r h-full from-gray-900 via-gray-800 to-black text-white md:h-screen flex items-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 my-[50px]">

        {/* Left Section: Text and Links */}
        <div className="space-y-4 md:w-1/2">
          <p className="text-xl md:text-2xl font-light">
            Hey 👋 I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">Arshdeep Singh</h1>
          <h2 className="text-2xl md:text-4xl font-semibold">
            Full Stack Developer
          </h2>

          {/* Links / Services Section */}
          <div className="flex space-x-4 pt-4">
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg cursor-pointer">
              <a href="#skill">
                <p className="font-semibold text-center">Skills</p>
                <div className="flex space-x-2 mt-2">
                  <Image src="/nextjs.svg" alt="nextjs" width={30} height={28} />
                  <Image src="/react.png" alt="reactjs" width={30} height={28} />
                  <Image src='/mongo.png' alt="mongo" width={30} height={30} />
                </div>
              </a>
            </div>

            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg cursor-pointer">
              <a href='#project'>
                <p className="font-semibold mb-4">Projects</p>
                <Image src="/projects.png" alt="Projects" width={70} height={70} />
              </a>
            </div>

            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg cursor-pointer">
              <a href="#about">
                <p className="font-semibold">About</p>
                <p className="text-6xl font-bold text-yellow-500">A</p>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 my-10 md:my-0 flex justify-center">
          <div className="relative">
            {/* Profile Image */}
            <Image
              src='/header.png'
              alt="Profile Picture"
              width={400}
              height={400}
              className="rounded-lg shadow-lg "
            />
            {/* Decorative Circle */}
            <div className="absolute inset-0 w-full h-full border-4 border-yellow-500 rounded-full transform rotate-12 scale-110" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;