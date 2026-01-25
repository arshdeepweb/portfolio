'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaCogs,
  FaTerminal,
  FaBrain,
  FaCheckCircle
} from 'react-icons/fa';

const services = [
  {
    title: "Web & App Development",
    valueProp: "Production-Grade Web Systems",
    icon: FaCode,
    color: "accent-cyan",
    outcomes: [
      "Load times under 200ms for higher conversion",
      "SEO-optimized architecture for organic growth",
      "Scalable infrastructure that handles traffic spikes",
      "Secure, compliant, and easy to maintain"
    ]
  },
  {
    title: "Business Automation",
    valueProp: "Remove manual work",
    icon: FaCogs,
    color: "accent-magenta",
    outcomes: [
      "Save 20+ hours per week on repetitive tasks",
      "Sync data instantly between CRM, Marketing, and Sales",
      "Automatic invoicing, reporting, and client onboarding",
      "Reduce operational overhead cost by 30-50%"
    ]
  },
  {
    title: "Micro-Niche Internal Tools",
    valueProp: "Custom Operations Software",
    icon: FaTerminal,
    color: "accent-neon",
    outcomes: [
      "Centralized reliable source of truth for all business data",
      "Custom workflows that generic SaaS cannot handle",
      "Role-based access control for employees and contractors",
      "Real-time analytics dashboards for better decision making"
    ]
  },
  {
    title: "AI Systems & Consulting",
    valueProp: "Practical AI Integration",
    icon: FaBrain,
    color: "accent-purple",
    outcomes: [
      "Automated customer support triage and responses",
      "Intelligent document processing and data extraction",
      "Personalized content generation at scale",
      "AI agents that handle qualified lead follow-ups"
    ]
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-dark-900/50 backdrop-blur-sm border border-accent-cyan/20 rounded-2xl p-8 hover:border-accent-cyan/40 transition-all duration-300 card-hover h-full flex flex-col"
  >
    {/* Icon */}
    <div className={`w-14 h-14 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-6 text-${service.color} group-hover:scale-110 transition-transform duration-300`}>
      <service.icon className="w-7 h-7 text-accent-cyan" />
    </div>

    {/* Content */}
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
      <p className="text-accent-cyan font-medium mb-6">{service.valueProp}</p>
      
      <ul className="space-y-3">
        {service.outcomes.map((outcome, idx) => (
          <li key={idx} className="flex items-start gap-3 text-foreground/70 text-sm">
            <FaCheckCircle className="w-4 h-4 text-accent-cyan mt-1 flex-shrink-0" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Hover Glow */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/5 via-accent-magenta/5 to-accent-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-8 lg:px-20 relative bg-dark-950/50">
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
            <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            High-impact technical solutions for scaling businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
