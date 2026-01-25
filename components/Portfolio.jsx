'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaEye, 
  FaCode, 
  FaMobile,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaRocket
} from 'react-icons/fa';

const projects = [
  {
    title: "Kamakshi World - E-commerce Admin",
    image: "/kamakshri.png",
    link: "https://www.kamakshiworld.com/",
    github: "#",
    description: "Robust e-commerce admin panel for tracking orders, managing products with multiple images, and handling user logins.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    features: ["Order Tracking", "Product Management", "Multi-image Upload", "Admin Authentication"],
    type: "web"
  },
  {
    title: "Health Care Booking System",
    image: "/booking.png",
    link: "https://registration.rishtpusht.in/booking",
    github: "#",
    description: "Advanced healthcare appointment booking system with slot management, admin tracking, and PayU payment integration.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "PayU"],
    features: ["Appointment Booking", "Slot Management", "PayU Integration", "Admin Dashboard"],
    type: "web"
  },
  {
    title: "Notes API - Backend System",
    image: "/notes-api.png",
    github: "https://github.com/arshdeepweb/notes-api",
    description: "Secure REST API for note management with Cloudinary file integration and robust authentication.",
    category: "Backend",
    technologies: ["NestJS", "PostgreSQL", "TypeORM", "Cloudinary", "JWT"],
    features: ["Secure file handling", "JWT Authentication", "Database management", "Scalable Architecture"],
    type: "api"
  },
  {
    title: "InventrixPro - Inventory Management",
    image: "/inventrixpro.png",
    link: "https://inventrixpro.vercel.app/",
    github: "https://github.com/arshdeepweb/inventrixpro",
    description: "A comprehensive inventory management system with real-time tracking, automated alerts, and analytics dashboard.",
    category: "Full Stack",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: ["Real-time tracking", "Analytics dashboard", "Automated alerts", "Multi-user support"],
    type: "web"
  },
  {
    title: "ND Care - Healthcare CRM",
    image: "/employee-manage-app.png",
    link: "https://acc.ndcarenirogam.com/",
    github: "#",
    description: "Healthcare CRM system with patient management, appointment scheduling, and integrated communication tools.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Pabbly"],
    features: ["Patient management", "Appointment scheduling", "QR code tracking", "Automated workflows"],
    type: "web"
  },
  {
    title: "Gadget Garage - E-commerce",
    image: "/gadget-garage.png",
    link: "https://gadgetgarageshop.vercel.app/",
    github: "https://github.com/arshdeepweb/gadget-garage",
    description: "Modern e-commerce platform for electronics with advanced filtering, payment integration, and admin panel.",
    category: "Frontend",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "Vercel"],
    features: ["Advanced filtering", "Payment integration", "Admin panel", "Responsive design"],
    type: "web"
  },
  {
    title: "Affiliate Dashboard",
    image: "/affiliate.png",
    link: "https://affiliaterishtpusht.vercel.app",
    github: "#",
    description: "Affiliate management dashboard with lead tracking, commission calculations, and performance analytics.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Pabbly", "Exotel API"],
    features: ["Lead tracking", "Commission calculations", "Performance analytics", "QR code system"],
    type: "web"
  },
  {
    title: "Food Ordering System",
    image: "/foodDelivery.png",
    link: "https://food-ordering-frontend-g6sb.onrender.com/",
    github: "#",
    description: "Complete food delivery platform with restaurant management, order tracking, and real-time updates.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Express"],
    features: ["Real-time orders", "Restaurant management", "Order tracking", "Payment integration"],
    type: "web"
  },
  {
    title: "Background Remover AI",
    image: "/bg-removal.png",
    link: "https://bgeraser.vercel.app/",
    github: "#",
    description: "AI-powered background removal tool with drag-and-drop interface and batch processing capabilities.",
    category: "Frontend",
    technologies: ["Next.js", "React", "AI API", "Tailwind CSS", "Vercel"],
    features: ["AI-powered removal", "Batch processing", "High-quality output", "Easy interface"],
    type: "web"
  }
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack": return FaRocket;
      case "Frontend": return FaDesktop;
      case "Backend": return FaServer;
      case "Mobile": return FaMobile;
      default: return FaCode;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-20 relative">
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent-cyan text-dark-950 shadow-lg'
                    : 'bg-dark-900/50 text-foreground/70 hover:text-foreground hover:bg-dark-800/50'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${project.title}`}
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-dark-900/50 backdrop-blur-sm border border-accent-cyan/20 rounded-2xl overflow-hidden hover:border-accent-cyan/40 transition-all duration-300 card-hover">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan rounded-full text-xs font-medium backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-dark-950/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    >
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-accent-cyan text-dark-950 rounded-lg font-semibold hover:bg-accent-cyan/90 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Live Demo
                        </a>
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-dark-800 text-foreground rounded-lg font-semibold hover:bg-dark-700 transition-colors duration-300"
                          >
                            <FaGithub className="w-4 h-4" />
                            Code
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-accent-cyan mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-dark-800 text-foreground/80 rounded text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 2 && (
                          <span className="px-2 py-1 bg-accent-cyan/20 text-accent-cyan rounded text-xs">
                            +{project.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-accent-magenta mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-dark-800 text-foreground/80 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/5 via-accent-magenta/5 to-accent-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/50 backdrop-blur-sm border border-accent-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to See More Projects?
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Check out my GitHub profile for more projects, contributions, and open-source work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/arshdeepweb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-magenta text-dark-950 font-semibold rounded-lg btn-hover"
              >
                <FaGithub className="w-5 h-5" />
                View GitHub Profile
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan hover:text-dark-950 transition-all duration-300"
              >
                <FaRocket className="w-5 h-5" />
                Start a Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;