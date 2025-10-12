'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  SiNodedotjs,
  SiExpress,
  SiFigma,
  SiVercel,
  SiDocker,
} from 'react-icons/si';

const skillCategories = [
  {
    name: "Frontend",
    color: "accent-cyan",
    skills: [
      { name: "React", icon: SiReact, level: 95, years: "3+" },
      { name: "Next.js", icon: SiNextdotjs, level: 90, years: "2+" },
      { name: "JavaScript", icon: SiJavascript, level: 95, years: "3+" },
      { name: "TypeScript", icon: SiTypescript, level: 85, years: "2+" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, years: "2+" },
      { name: "HTML5", icon: SiHtml5, level: 95, years: "3+" },
      { name: "CSS3", icon: SiCss3, level: 90, years: "3+" },
    ]
  },
  {
    name: "Backend",
    color: "accent-magenta",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 90, years: "2+" },
      { name: "Express", icon: SiExpress, level: 85, years: "2+" },
      { name: "Socket.IO", icon: SiSocketdotio, level: 80, years: "1+" },
      { name: "Redis", icon: SiRedis, level: 75, years: "1+" },
    ]
  },
  {
    name: "Database",
    color: "accent-neon",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 85, years: "2+" },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80, years: "1+" },
      { name: "Prisma ORM", icon: SiPrisma, level: 75, years: "1+" },
    ]
  },
  {
    name: "Tools & Others",
    color: "accent-purple",
    skills: [
      { name: "Git", icon: SiGit, level: 90, years: "3+" },
      { name: "Docker", icon: SiDocker, level: 70, years: "1+" },
      { name: "Figma", icon: SiFigma, level: 80, years: "2+" },
      { name: "Vercel", icon: SiVercel, level: 85, years: "2+" },
      { name: "Ubuntu", icon: SiUbuntu, level: 75, years: "2+" },
    ]
  }
];

const RadialProgress = ({ percentage, size = 120, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-dark-800"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="text-accent-cyan transition-all duration-1000 ease-out"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-foreground">{percentage}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      skillCategories.forEach((category, catIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [`${catIndex}-${skillIndex}`]: true
            }));
          }, (catIndex * 200) + (skillIndex * 100));
        });
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skill" className="py-20 px-4 md:px-8 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-accent-cyan text-dark-950 shadow-lg`
                  : 'bg-dark-900/50 text-foreground/70 hover:text-foreground hover:bg-dark-800/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative bg-dark-900/50 backdrop-blur-sm border border-accent-cyan/20 rounded-2xl p-6 hover:border-accent-cyan/40 transition-all duration-300 card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-accent-cyan/20 text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{skill.name}</h3>
                    <p className="text-sm text-foreground/60">{skill.years} years</p>
                  </div>
                </div>
              </div>

              {/* Radial Progress */}
              <div className="flex justify-center mb-4">
                <RadialProgress
                  percentage={animatedSkills[`${activeCategory}-${index}`] ? skill.level : 0}
                  color="accent-cyan"
                />
              </div>

              {/* Skill Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Proficiency</span>
                  <span className="text-accent-cyan font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-dark-800 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-cyan/70"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: animatedSkills[`${activeCategory}-${index}`] ? `${skill.level}%` : 0 
                    }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/5 via-accent-magenta/5 to-accent-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/50 backdrop-blur-sm border border-accent-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              I'm passionate about staying up-to-date with the latest technologies and best practices. 
              My skill set is constantly evolving as I explore new frameworks, tools, and methodologies 
              to deliver better solutions and experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-accent-cyan">
                <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Continuous Learning</span>
              </div>
              <div className="flex items-center gap-2 text-accent-magenta">
                <div className="w-2 h-2 bg-accent-magenta rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Best Practices</span>
              </div>
              <div className="flex items-center gap-2 text-accent-neon">
                <div className="w-2 h-2 bg-accent-neon rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Innovation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;