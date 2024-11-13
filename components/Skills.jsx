import React from 'react';

const skills = [
  { name: "Next.js", icon: "⚛️" },
  { name: "React", icon: "⚛️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🗃️" },
  { name: "JavaScript", icon: "⚡" },
  { name: "HTML & CSS", icon: "🌐" },
  { name: "Ubuntu", icon: "🟧", highlight: true },
  { name: "Git Source Control", icon: "🔧" },
  { name: "Tailwind CSS", icon: "💨" }
];


const Skills = () => {
  return (
    <section id='skill' className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-10 px-5 md:px-20">
      <div className="max-w-10xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-10 rounded-md shadow-md
                hover:bg-yellow-500 cursor-pointer`}
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <p className="text-sm font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
