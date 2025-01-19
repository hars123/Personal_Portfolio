// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8  border-t">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side: Contact Information */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">Contact</h3>
          <p className="text-lg">harshitshukla4513@gmail.com</p>
          <p className="text-lg"></p>
        </div>

        {/* Center: Copyright */}
        <div className="text-center mb-6 sm:mb-0">
          <p className="text-lg">
            © {new Date().getFullYear()} Harshit Shukla. All Rights Reserved.
          </p>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/harshit-shukla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a
            href="https://github.com/harshit-shukla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/harshit_shukla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
