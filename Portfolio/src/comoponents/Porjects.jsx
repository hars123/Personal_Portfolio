import React from "react";

function Projects() {
  const projects = [
    {
      name: "TechEduca",
      description:
        "TechEduca is a platform that allows educational institutions to sell and manage their courses online. The goal is to provide a seamless, user-friendly experience for both students and instructors by enabling the discovery, purchase.",
      icon: "fas fa-laptop-code",
      image: "path/to/techeduca-image.jpg", // Add your image path
      githubLink: "https://github.com/harshit-shukla/TechEduca",
      liveLink: "https://techeduca.com"
    },
    {
      name: "Crowdfunding App",
      description:
        "A Crowdfunding App allows individuals or organizations to raise money for various causes, including startups, charitable events, or personal projects.",
      icon: "fas fa-hand-holding-usd",
      image: "path/to/crowdfunding-image.jpg", // Add your image path
      githubLink: "https://github.com/harshit-shukla/CrowdfundingApp",
      liveLink: "https://crowdfundingapp.com"
    },
    {
      name: "Hospital Management",
      description:
        "A Hospital Management System (HMS) is an integrated system designed to handle all aspects of managing a hospital’s operations.",
      icon: "fas fa-briefcase",
      image: "path/to/hospitalmanagement-image.jpg", // Add your image path
      githubLink: "https://github.com/harshit-shukla/HospitalManagement",
      liveLink: "https://hospitalmanagement.com"
    },
    {
      name: "Job Portal",
      description:
        "A Job Portal is a platform where job seekers can search and apply for jobs, and employers can post job listings and find candidates.",
      icon: "fas fa-users",
      image: "", // Add your image path
      githubLink: "https://github.com/harshit-shukla/JobPortal",
      liveLink: "https://jobportal.com"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 pb-12 pt-8">
      <div className="bg-gray-700 text-white shadow-lg rounded-lg p-8 max-w-[90%] sm:max-w-[90%]">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-600 p-6 rounded-lg shadow-md hover:bg-gray-500 transition duration-300 flex flex-col justify-between"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              
              <div className="flex items-center space-x-4 mb-4">
                <i className={`${project.icon} text-yellow-400 text-3xl`}></i>
                <h2 className="text-xl font-semibold text-white truncate">{project.name}</h2>
              </div>
              
              <p className="text-white text-lg leading-relaxed mb-4">{project.description}</p>
              
              {/* Buttons for GitHub and Live Preview */}
              <div className="flex justify-between space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 flex items-center space-x-2"
                >
                  <i className="fab fa-github text-xl"></i>
                  <span>GitHub</span>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300 flex items-center space-x-2"
                >
                  <i className="fas fa-eye text-xl"></i>
                  <span>Live Preview</span>
                </a>
              </div>

              {/* Bottom text about the project */}
              <p className="text-white text-sm mt-4">Click on the buttons above to explore the project further.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
