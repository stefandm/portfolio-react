import React from 'react';
import {Link} from 'react-scroll'

const Nav: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-5 md:p-10  h-[10vh] sticky top-0 z-10 bg-white opacity-95 ">
      <Link to="hero" smooth={true} duration={300} offset={-100} className="text-2xl font-semibold hover:cursor-pointer">
        S.D.
      </Link>
      <nav>
        <ul className="flex space-x-3 md:space-x-6 text-sm md:text-base">
          <li>
          <Link to="aboutme" smooth={true} duration={300} offset={-130} className="hover:cursor-pointer">
              About me 
          </Link>
          </li>
          <li>
          <Link to="skills" smooth={true} duration={300} offset={-120} className="hover:cursor-pointer">
              Skills
          </Link>
          </li>
          <li>
          <Link to="projects" smooth={true} duration={300} offset={-50} className="hover:cursor-pointer">
              Projects
          </Link>
          </li>
          <li>
          <Link to="contact" smooth={true} duration={300} offset={-10} className="hover:cursor-pointer">
              Contact
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
