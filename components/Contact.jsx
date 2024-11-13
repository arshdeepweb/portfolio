import React from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


const ContactMe = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black" id="contact">
      <div className="flex flex-col justify-center items-center p-4 md:px-[10rem] py-8">
        <h2 className="text-4xl text-center text-white font-bold my-6">Contact Me</h2>
        <p className="text-white mt-[-1rem] text-center">Submit the form below to get in touch with me</p>
        <div className="flex justify-center flex-col items-center w-full mt-8">
          <form action="https://getform.io/f/pbgkxxwb" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="text-white py-4 px-6 md:w-[30vw] bg-transparent border-2 border-solid border-white rounded-md outline-none"
              autoComplete="off"
            />
            <br /><br />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="text-white py-4 px-6 md:w-[30vw] bg-transparent border-2 border-solid border-white rounded-md outline-none"
              autoComplete="off"
            />
            <br /><br />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
              className="text-white py-4 px-6 md:w-[30vw] bg-transparent border-2 border-solid border-white rounded-md outline-none"
              autoComplete="off"
            ></textarea>
            <br /><br />
            <button
              type="submit"
              className="py-4 px-6 md:w-[15vw] text-white bg-transparent border-2 border-solid border-white rounded-md outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
