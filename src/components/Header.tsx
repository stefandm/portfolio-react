import React from 'react';
import {Link} from 'react-scroll'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5 md:p-10  h-[10vh] sticky top-0 z-10 bg-white ">
      <Link to="hero" smooth={true} duration={600} offset={-100} className="text-2xl font-semibold hover:cursor-pointer">
        S.D.
      </Link>
      <nav>
        <ul className="flex space-x-3 md:space-x-6 text-sm md:text-base">
          <li>
          <Link to="aboutme" smooth={true} duration={600} offset={-60} className="hover:cursor-pointer">
              About me / Skills
          </Link>
          </li>
          <li>
          <Link to="projects" smooth={true} duration={600} offset={-20} className="hover:cursor-pointer">
              Projects
          </Link>
          </li>
          <li>
          <Link to="contact" smooth={true} duration={600} offset={-50} className="hover:cursor-pointer">
              Contact
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
