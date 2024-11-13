import React from 'react';
import Image from 'next/image';

const projects = [
  { title: "Safe Password", image: "/safe-password.png", link:"https://safepassword.vercel.app/" },
  { title: "Currency Converter", image: "/currencyconverter.png", link:"https://currencycheck.vercel.app/" },
  { title: "Invoice", image: "/invoice.png", link:"https://ndayurveda.vercel.app/" },
  { title: "Food Ordering", image: "/foodDelivery.png", link:"https://food-ordering-frontend-g6sb.onrender.com/" },
  { title: "Bg Removal", image: "/bg-removal.png", link:"https://bgeraser.vercel.app/" },
  { title: "Affiliate Dashboard", image: "/affiliate.png", link:"https://affiliaterishtpusht.vercel.app" },
];

const Portfolio = () => {
  return (
    <section id='project' className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-10 px-5 md:px-20 text-center">
      <h2 className="text-4xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 cursor-pointer">
        {projects.map((project, index) => (
         <div key={index}>
           <div className="relative group hover:scale-110 transition-all rounded-xl">
            <a href={project.link} target='_blank'><Image src={project.image} alt={project.title} layout="responsive" width={400} height={300} className="rounded-md object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-lg font-semibold">{project.title}</p>
            </div>
            </a>
          </div>
            <div>
              <button className="bg-yellow-500 text-black my-4 py-2 px-4 rounded-md font-semibold hover:scale-125 transition-all"><a href={project.link} target='_blank'>Live Demo</a></button>
            </div>
         </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
