// Skills.js
import React from "react";

function Skills() {
  const skills = [
    { name: "Java", icon: "fab fa-java", description: "Object-oriented programming language for backend development." },
    { name: "Data Structures and Algorithms (DSA)", icon: "fas fa-cogs", description: "Fundamentals of computer science, focusing on algorithms and data structures." },
    
    
    { name: "React.js", icon: "fab fa-react", description: "A JavaScript library for building user interfaces, focusing on component-based architecture." },
    { name: "Node.js", icon: "fab fa-node-js", description: "JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications." },
    { name: "Express.js", icon: "fas fa-server", description: "A minimal and flexible Node.js web application framework for building APIs." },
    { name: "MongoDB", icon: "fas fa-database", description: "A NoSQL database for handling large volumes of data with flexible schema design." },
    { name: "JavaScript", icon: "fab fa-js", description: "Programming language for building interactive websites and web applications." },
    { name: "HTML & CSS", icon: "fab fa-html5", description: "Markup language for structuring and styling web pages." }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-8 pb-10 pt-20" id="skills">
      <div className="bg-gray-700 text-white shadow-lg rounded-lg p-6 max-w-[90%] sm:max-w-[90%]">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Skills</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-600 p-6 rounded-lg shadow-md hover:bg-gray-500 transition duration-300 flex flex-col items-center justify-center"
              style={{ aspectRatio: '1' }} // Making the box square
            >
              <i className={`${skill.icon} text-yellow-400 text-4xl mb-4`}></i>
              <span className="text-xl font-semibold">{skill.name}</span>
              <p className="text-white text-lg mt-2">{skill.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
