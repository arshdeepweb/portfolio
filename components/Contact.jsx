'use client';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // replace with your actual API route
      const response = await axios.post('/api/contact', data);
      if (response.status === 200) {
        toast.success('Message sent! Please check your email for confirmation.');
        reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-black text-white text-center px-4 sm:px-8 md:px-20"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Contact Me</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-xl mx-auto text-left">
        <input
          type="text"
          placeholder="Your Name"
          {...register('name', { required: 'Name is required' })}
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Your Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="tel"
          placeholder="Your Phone (optional)"
          {...register('phone')}
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />

        <input
          type="text"
          placeholder="Subject"
          {...register('subject', { required: 'Subject is required' })}
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}

        <textarea
          placeholder="Your Message"
          rows={5}
          {...register('message', { required: 'Message is required' })}
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-cyan-400 text-black font-semibold rounded hover:bg-cyan-500 transition disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <ToastContainer position="top-right" />
    </section>
  );
}
