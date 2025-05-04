import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaMailBulk,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-20 flex flex-col-reverse md:flex-row justify-around items-center gap-10 md:gap-5">
      {/* Left Section */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Software engineer by day,{" "}
          <span className="text-cyan-400"> heart debugger by night.</span>
        </h1>
        <p className="text-gray-400 mt-6 text-lg">
          Meet Arshdeep Singh — a passionate software engineer, entrepreneur,
          and digital solutions expert with a drive to build impactful
          technology. With a deep understanding of full-stack development,
          backend architecture, and advanced tech solutions, Arshdeep has a
          proven track record in crafting scalable applications and innovative
          systems.
        </p>
        <p className="text-sm text-gray-500 mt-2">~ Google AI</p>

        <p className="mt-6 text-lg">
          Building <span className="font-bold">Scalable Apps</span> that grow with you.
          ✨
        </p>

        {/* Button */}
        <Link
          href="https://linkedin.com/in/arshdeepweb"
          target="_blank"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-md shadow hover:opacity-90 transition"
        >
          <FaLinkedin size={20} />
          Connenct Now
        </Link>

        {/* Socials */}
        <div className="flex gap-5 mt-10 text-2xl text-gray-400">
          {/* <a href="https://linkedin.com/in/arshdeepweb" className="hover:text-white"><FaLinkedin /></a> */}
          <a
            href="mailto:imarshdeep99@email.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/arshdeepweb/"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a href="https://x.com/arshwebdev" className="hover:text-white">
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/arshdeepweb"
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="rounded-md overflow-hidden w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
        <Image
          src="/header1.jpeg" // replace with your image path
          alt="header Image"
          width={450}
          height={450}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
