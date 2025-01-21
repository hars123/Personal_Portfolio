import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-20">
      <div className="container mx-auto flex items-center justify-between p-2 sm:p-2">
        {/* Logo */}
        <div className="text-xl font-bold text-yellow-400">H Shukla</div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="sm:hidden cursor-pointer text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </div>

        {/* Navbar Links */}
        <ul
          className={`sm:flex sm:space-x-3 space-y-4 sm:space-y-0 absolute sm:static bg-gray-800 w-full sm:w-auto left-0 ${
            isOpen ? "top-14" : "-top-96"
          } transition-all duration-300 ease-in-out`}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-700 rounded sm:inline cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-700 rounded sm:inline cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-700 rounded sm:inline cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-700 rounded sm:inline cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
