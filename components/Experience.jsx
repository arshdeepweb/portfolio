import React from 'react';

const experiences = [
  {
    year: "July 2024 - Present",
    title: "Full Stack Developer",
    company: "ND Care PVT Limited, Amritsar, Punjab",
    description: `As a Full Stack Developer at ND Care Nirogam, I designed and implemented an affiliate dashboard panel utilizing a QR code-based lead tracking system, streamlining affiliate management and lead generation. I automated lead processing from Facebook via Pabbly, facilitating seamless handling of national and international leads with integrated email notifications, Ozentel call functions, and comprehensive database updates. Additionally, I developed an event form that automates workflows by sending emails and WhatsApp messages via the Exotel API while securely storing data. I also built a real-time, multi-currency invoice generator, enhancing financial processes and international transaction capabilities.`,
  },

];

const Experience = () => {
  return (
    <section id='experience' className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-10 px-5 md:px-20">
      <h2 className="text-4xl text-center font-semibold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute left-0 top-0 mt-1 w-1 h-full bg-yellow-500"></div>
            <div className="pl-8">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="italic text-gray-400">{exp.company}</p>
              <p className="text-sm text-yellow-500">{exp.year}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
