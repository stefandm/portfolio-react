// src/components/Footer.tsx

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const emailAddress = 'demirel.stefan@yahoo.com'; 
  const githubLink = 'https://github.com/stefandm'; 
  const linkedinLink = 'https://www.linkedin.com/in/stefan-demirel-730b9124b/'; 

  return (
    <footer className="w-full bg-slate-800 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side*/}
        <div className="mb-4 md:mb-0">
          <p className="text-gray-200 dark:text-gray-200 text-lg font-semibold">
            &copy; {new Date().getFullYear()} @Stefan Demirel
          </p>
        </div>

        {/* Right Side*/}
        <div className="flex space-x-6">
          {/* Email Link */}
          <a
            href={`mailto:${emailAddress}`}
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label="Send Email"
          >
            <FaEnvelope size={24} />
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
