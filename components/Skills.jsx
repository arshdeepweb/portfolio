'use client';
import React from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiUbuntu,
  SiTypescript,
  SiPrisma,
  SiRedis,
  SiSocketdotio,
} from 'react-icons/si';

const skills = [
  { name: "Next.js", icon: <SiNextdotjs size={32} />, highlight: true },
  { name: "React", icon: <SiReact size={32} />, highlight: true },
  // { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "JavaScript", icon: <SiJavascript size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "MongoDB", icon: <SiMongodb size={32} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
  { name: "Prisma ORM", icon: <SiPrisma size={32} /> },
  { name: "Redis", icon: <SiRedis size={32} /> },
  { name: "Socket.IO", icon: <SiSocketdotio size={32} /> },
  {
    name: "HTML & CSS",
    icon: (
      <div className="flex items-center space-x-1">
        <SiHtml5 size={20} />
        <SiCss3 size={20} />
      </div>
    ),
  },
  { name: "Git", icon: <SiGit size={32} /> },
  { name: "Ubuntu", icon: <SiUbuntu size={32} />,},
];

const Skills = () => {
  return (
    <section
      id="skill"
      className="bg-black text-white py-16 px-4 sm:px-8 md:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-10 rounded-xl shadow-md transition-transform duration-300 hover:scale-105
                ${
                  skill.highlight
                    ? 'border-2 border-cyan-400 bg-gray-900'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
            >
              <div className="text-cyan-400 mb-3">{skill.icon}</div>
              <p className="text-base font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
