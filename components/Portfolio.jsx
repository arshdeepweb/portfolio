"use client";
import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Inventry Management",
    image: "/inventrixpro.png",
    link: "https://inventrixpro.vercel.app/",
  },
  {
    title: "Health Care CRM",
    image: "/employee-manage-app.png",
    link: "https://acc.ndcarenirogam.com/",
  },
  {
    title: "Gadget Ecommerce",
    image: "/gadget-garage.png",
    link: "https://gadgetgarageshop.vercel.app/",
  },
  {
    title: "Affiliate Dashboard",
    image: "/affiliate.png",
    link: "https://affiliaterishtpusht.vercel.app",
  },
  {
    title: "Food Ordering",
    image: "/foodDelivery.png",
    link: "https://food-ordering-frontend-g6sb.onrender.com/",
  },
  // { title: "Safe Password", image: "/safe-password.png", link:"https://safepassword.vercel.app/" },
  {
    title: "Bg Removal",
    image: "/bg-removal.png",
    link: "https://bgeraser.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section
      id="project"
      className="bg-black text-white py-16 px-4 sm:px-8 md:px-20 text-center"
    >
      <h2 className="text-4xl text-cyan-400 font-bold mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <p className="text-xl my-2 font-bold">{project.title}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover rounded-md transition-transform duration-500 group-hover:scale-110 hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <button className="mt-4 bg-cyan-400 text-black px-4 py-2 rounded-md font-medium hover:scale-105 transition-transform">
                    Live Demo
                  </button>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
