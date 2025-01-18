// Projects.js
import React from "react";

function Projects() {
  const projects = [
    { name: "TechEduca", description: "TechEduca is a platform that allows educational institutions to sell and manage their courses online. The goal is to provide a seamless, user-friendly experience for both students and instructors by enabling the discovery, purchase", icon: "fas fa-laptop-code" },
    { name: "Crowdfunding App", description: "A Crowdfunding App allows individuals or organizations to raise money for various causes, including startups, charitable events, or personal projects.", icon: "fas fa-hand-holding-usd" },
    { name: "Hospitalmanagement", description: "A Hospital Management System (HMS) is an integrated system designed to handle all aspects of managing a hospital’s operations.", icon: "fas fa-briefcase" },
    { name: "Job Portal", description: "A Job Portal is a platform where job seekers can search and apply for jobs, and employers can post job listings and find candidates.", icon: "fas fa-users" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 px-4 pb-12 pt-8">
      <div className="bg-gray-700 text-white shadow-lg rounded-lg p-8 max-w-[90%] sm:max-w-[80%]">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-600 p-6 rounded-lg shadow-md hover:bg-gray-500 transition duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center space-x-4 mb-4">
                <i className={`${project.icon} text-yellow-400 text-3xl`}></i>
                <h2 className="text-xl font-semibold text-white truncate">{project.name}</h2>
              </div>
              <p className="text-white text-lg leading-relaxed mb-4">{project.description}</p>
              {/* Button for each project */}
              <button
                onClick={() => alert(`Learn more about ${project.name}`)}
                className="bg-yellow-400 text-black font-medium py-2 px-6 rounded-lg shadow-md transform transition-transform duration-300 hover:bg-white hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
