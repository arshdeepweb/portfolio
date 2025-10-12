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
      value: "+91 98765 43210",
      link: "tel:+919876543210",
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
                    Full Name *
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
                    Email Address *
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
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-accent-cyan/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                      placeholder="Your phone number (optional)"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <FaEdit className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
                    <input
                      type="text"
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-accent-cyan/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-3 text-foreground/40 w-4 h-4" />
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-accent-cyan/20 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
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
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
            border: '1px solid #00f0ff',
            color: '#f0f6fc'
          }}
        />
      </div>
    </section>
  );
};

export default Contact;