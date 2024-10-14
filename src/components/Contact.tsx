// src/components/Contact.tsx

import { FaEnvelope } from 'react-icons/fa'; // Importing mail icon from React Icons
import { motion } from 'framer-motion'; // Optional: For animations

const Contact = () => {
  const emailAddress = 'demirel.stefanl@yahoo.com'; // Replace with your actual email

  return (
    <motion.div
      id="contact"
      className="flex flex-col items-center justify-center min-h-[50vh] bg-white dark:bg-blue-800 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
        Contact Me
      </h2>

      {/* Email Display */}
      <a
        href={`mailto:${emailAddress}`}
        className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Mail Icon */}
        <FaEnvelope className="text-blue-500 text-3xl" />

        {/* Email Text */}
        <span className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200">
          {emailAddress}
        </span>
      </a>
    </motion.div>
  );
};

export default Contact;
