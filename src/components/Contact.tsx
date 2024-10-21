import { FaEnvelope } from 'react-icons/fa'; 

const Contact = () => {
  const emailAddress = 'demirel.stefan@yahoo.com';

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-b from-slate-700 to-slate-200 px-4 "
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Contact Me
      </h2>

      <a
        href={`mailto:${emailAddress}`}
        className="flex items-center space-x-4 bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-300 px-4 "
        aria-label={`Send an email to ${emailAddress}`}
      >
        <FaEnvelope className="text-blue-500 text-3xl" />

        <span className="text-xl md:text-2xl font-medium text-gray-200 dark:text-gray-200">
          {emailAddress}
        </span>
      </a>
    </div>
  );
};

export default Contact;
