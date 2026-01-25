'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRocket, FaGem, FaCogs, FaPaperPlane, FaLaptop } from 'react-icons/fa';

const packages = [
  {
    name: "Landing Page",
    description: "High-conversion single page site.",
    price: "$250",
    priceNote: "starting from",
    icon: FaPaperPlane,
    color: "accent-cyan",
    features: [
      "Modern Single Page Design",
      "Contact Form to Email",
      "Mobile Responsive",
      "Fast Turnaround (48h)",
      "Standard SEO"
    ],
    delivery: "2 Days"
  },
  {
    name: "Static Website",
    description: "Multi-page professional presence.",
    price: "$800",
    priceNote: "starting from",
    icon: FaLaptop,
    color: "accent-cyan",
    features: [
      "5 Page Website",
      "CMS Integration",
      "Blog Section",
      "Social Media Integration",
      "1 Month Support"
    ],
    delivery: "1 Week"
  },
  {
    name: "Starter System",
    description: "Dynamic web app for specific needs.",
    price: "$1,500",
    priceNote: "starting from",
    icon: FaRocket,
    color: "accent-magenta",
    popular: true,
    features: [
      "Full Web Application (Next.js)",
      "Database Integration",
      "User Authentication",
      "Admin Dashboard Basic",
      "Contact Automation"
    ],
    delivery: "2 Weeks"
  },
  {
    name: "Growth Automation",
    description: "Scalable business operations system.",
    price: "$4,000",
    priceNote: "starting from",
    popular: false,
    icon: FaGem,
    color: "accent-neon",
    features: [
      "Advanced Web App",
      "Payment Gateway (Stripe)",
      "CRM + Email Automation",
      "3 Months Priority Support",
      "Performance Optimization"
    ],
    delivery: "4-6 Weeks"
  },
  {
    name: "Custom Enterprise",
    description: "Bespoke internal tools & AI.",
    price: "Custom Scope",
    priceNote: "tailored pricing",
    icon: FaCogs,
    color: "accent-purple",
    features: [
      "Custom Internal Tools",
      "Role-Based Access Control",
      "Complex Workflows",
      "AI Agent Integration",
      "SLA Support"
    ],
    delivery: "Custom"
  }
];

const Pricing = () => {
  const [currency, setCurrency] = React.useState('USD');
  const [prices, setPrices] = React.useState({
    landing: "$250",
    static: "$800",
    starter: "$1,500",
    growth: "$4,000",
    custom: "Custom Scope"
  });

  React.useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code === 'IN') {
          setCurrency('INR');
          setPrices({
            landing: "₹5,000",
            static: "₹20,000",
            starter: "₹50,000",
            growth: "₹1,50,000",
            custom: "Custom Scope"
          });
        }
      } catch (error) {
        console.error('Failed to fetch location:', error);
      }
    };
    fetchLocation();
  }, []);

  const localizedPackages = packages.map(pkg => {
    let price = pkg.price;
    if (pkg.name === "Landing Page") price = prices.landing;
    if (pkg.name === "Static Website") price = prices.static;
    if (pkg.name === "Starter System") price = prices.starter;
    if (pkg.name === "Growth Automation") price = prices.growth;
    if (pkg.name === "Custom Enterprise") price = prices.custom;
    
    return { ...pkg, price };
  });

  return (
    <section id="pricing" className="py-20 px-4 md:px-8 lg:px-20 relative">
      <div className="max-w-[90rem] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Service Packages</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Transparent pricing for scalable business systems.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {localizedPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col bg-dark-900/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 card-hover ${
                pkg.popular 
                  ? 'border-accent-cyan shadow-lg shadow-accent-cyan/10 ring-1 ring-accent-cyan z-10 lg:scale-105 xl:scale-110' 
                  : 'border-accent-cyan/20 hover:border-accent-cyan/40'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-cyan text-dark-950 px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-accent-cyan/20 whitespace-nowrap">
                  POPULAR
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className={`w-10 h-10 rounded-xl bg-${pkg.color}/10 flex items-center justify-center mb-4 text-accent-cyan`}>
                  <pkg.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                <p className="text-foreground/70 text-xs h-8 leading-tight">{pkg.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-bold text-accent-cyan truncate">{pkg.price}</span>
                </div>
                <span className="text-foreground/50 text-xs block mt-1">{pkg.priceNote}</span>
                <div className="text-xs text-foreground/50 mt-1">Delivery: {pkg.delivery}</div>
              </div>

              {/* Features */}
              <div className="flex-grow space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                    <FaCheck className="w-3 h-3 text-accent-cyan mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full py-2.5 rounded-lg font-semibold text-sm text-center transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-accent-cyan text-dark-950 hover:shadow-lg hover:shadow-accent-cyan/25'
                    : 'bg-dark-800 text-foreground border border-accent-cyan/20 hover:border-accent-cyan hover:text-accent-cyan'
                }`}
              >
                Get Started
              </a>

               {/* Hover Glow */}
               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/5 via-accent-magenta/5 to-accent-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
