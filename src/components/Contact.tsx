// src/components/Contact.tsx

import { FaEnvelope } from 'react-icons/fa'; // Importing mail icon from React Icons

const Contact = () => {
  const emailAddress = 'demirel.stefan@yahoo.com'; // Your actual email

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-[50vh] bg-white dark:bg-blue-800 px-4"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-gray-800 dark:text-gray-100">
        Contact Me
      </h2>

      {/* Email Display */}
      <a
        href={`mailto:${emailAddress}`}
        className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        aria-label={`Send an email to ${emailAddress}`}
      >
        {/* Mail Icon */}
        <FaEnvelope className="text-blue-500 text-3xl" />

        {/* Email Text */}
        <span className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-200">
          {emailAddress}
        </span>
      </a>
    </div>
  );
};

export default Contact;
