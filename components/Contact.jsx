'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaTimes,
  FaUser,
  FaComment,
  FaEdit,
  FaSpinner
} from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [budgetOptions, setBudgetOptions] = useState([
    "$1k - $3k", "$3k - $10k", "$10k - $25k", "$25k+"
  ]);

  React.useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code === 'IN') {
          setBudgetOptions([
            "₹10k - ₹50k","₹50k - ₹1L", "₹1L - ₹3L", "₹3L+"
          ]);
        }
      } catch (error) {
        console.error('Failed to fetch location:', error);
      }
    };
    fetchLocation();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('/api/contact', data);
      if (response.status === 200) {
        setFormData(data);
        setShowSuccessModal(true);
        reset();
        toast.success('Message sent successfully!');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "imarshdeep99@email.com",
      link: "mailto:imarshdeep99@email.com",
      color: "accent-cyan"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 85568 64699",
      link: "tel:+918556864699",
      color: "accent-magenta"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Amritsar, Punjab, India",
      link: "https://maps.google.com/?q=Amritsar,Punjab,India",
      color: "accent-neon"
    }
  ];

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

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-20 relative">
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a specific project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 bg-dark-900/50 backdrop-blur-sm border border-accent-cyan/20 rounded-xl hover:border-accent-cyan/40 transition-all duration-300 card-hover"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-xl bg-accent-cyan/20 text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-foreground/70 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", href: "https://github.com/arshdeepweb", color: "text-foreground/70 hover:text-foreground" },
                  { name: "LinkedIn", href: "https://linkedin.com/in/arshdeepweb", color: "text-blue-400 hover:text-blue-300" },
                  { name: "Twitter", href: "https://x.com/arshwebdev", color: "text-sky-400 hover:text-sky-300" },
                  { name: "Instagram", href: "https://www.instagram.com/arshdeepweb", color: "text-pink-400 hover:text-pink-300" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-dark-900/50 rounded-xl border border-accent-cyan/20 hover:border-accent-cyan/40 transition-all duration-300 ${social.color}`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-dark-900/50 backdrop-blur-sm border border-accent-cyan/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-accent-cyan/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Work Email *
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-accent-cyan/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                      placeholder="name@company.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Project Type Dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Project Type *
                  </label>
                  <div className="relative">
                    <select
                      {...register('projectType', { required: 'Project type is required' })}
                      className="w-full pl-4 pr-10 py-3 bg-dark-800/50 border border-accent-cyan/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-dark-900">Select a project type...</option>
                      <option value="web_app" className="bg-dark-900">Web & App Development</option>
                      <option value="automation" className="bg-dark-900">Business Automation</option>
                      <option value="internal_tool" className="bg-dark-900">Internal Tool / Dashboard</option>
                      <option value="ai_consulting" className="bg-dark-900">AI Consulting</option>
                      <option value="other" className="bg-dark-900">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-foreground/40">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  {errors.projectType && (
                    <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>
                  )}
                </div>

                {/* Budget Dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Estimated Budget *
                  </label>
                  <div className="relative">
                    <select
                      {...register('budget', { required: 'Budget is required' })}
                      className="w-full pl-4 pr-10 py-3 bg-dark-800/50 border border-accent-cyan/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-dark-900">Select a budget range...</option>
                      {budgetOptions.map((option, index) => (
                        <option key={index} value={option} className="bg-dark-900">
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-foreground/40">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  {errors.budget && (
                    <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>
                  )}
                </div>

                {/* Project Details (Message) */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Project Details *
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-3 text-foreground/40 w-4 h-4" />
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-accent-cyan/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about the business problem you are trying to solve..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-magenta text-dark-950 font-semibold rounded-lg overflow-hidden btn-hover disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <FaSpinner className="w-4 h-4 animate-spin" />
                    ) : (
                      <FaPaperPlane className="w-4 h-4" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Request Strategy Call'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-magenta to-accent-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccessModal && (
            <motion.div
              className="fixed inset-0 bg-dark-950/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
            >
              <motion.div
                className="bg-dark-900 border border-accent-cyan/20 rounded-2xl p-8 max-w-md w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-accent-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <FaCheckCircle className="w-8 h-8 text-accent-cyan" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  
                  <p className="text-foreground/70 mb-6">
                    Thank you for reaching out, {formData.name}! I'll get back to you within 24 hours.
                  </p>
                  
                  <button
                    onClick={() => setShowSuccessModal(false)}
                    className="px-6 py-3 bg-accent-cyan text-dark-950 font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <ToastContainer 
          position="top-right"
          theme="dark"
          toastStyle={{
            background: '#0d1117',
            border: '1px solid #21c063',
            color: '#f0f6fc'
          }}
        />
      </div>
    </section>
  );
};

export default Contact;