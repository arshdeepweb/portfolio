import React from 'react';

const About = () => {
  return (
    <section id='about' className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-10 px-5 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 border-l-4 border-yellow-500 pl-2">
          About
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Dedicated Full Stack Developer with expertise in HTML5, CSS3,
          JavaScript (ES6+), Next js, React.js, Tailwind CSS, Node.js, Express.js, and
          MongoDB. <span className="font-semibold text-yellow-400">Skilled at building responsive, user-friendly web
          applications with a focus on backend integration, API automation, and
          project scalability.</span> Adept at version control using Git and collaboration
          via GitHub. Proven experience in managing and deploying solutions for
          E-Commerce and affiliate systems.

        </p>
        
      </div>
    </section>
  );
};

export default About;
