// About.js
import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 px-4 py-5 ">
      <div className="bg-gray-700 text-white shadow-lg rounded-lg p-8 max-w-[90%] w-full sm:max-w-[80%] mb-20  ">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">About Me</h1>
        <p className="text-lg leading-relaxed mb-6">
          Hello! I'm <span className="font-semibold text-blue-400">Harshit Shukla</span>, a passionate Java backend developer. I specialize in building scalable, efficient, and robust solutions. With a solid foundation in Data Structures and Algorithms (DSA), SQL, and modern frameworks, I focus on solving real-world problems through clean and effective code.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I have experience working with Java, Node.js, and React, building full-stack applications. I love learning new technologies and improving my problem-solving skills. Currently, I am honing my skills in backend development and looking forward to contributing to projects that make a difference.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          In my free time, I enjoy coding, exploring new tech trends, and collaborating with like-minded developers. I am always eager to improve and grow in the tech field, aiming to create software that helps people and businesses thrive.
        </p>
        <div className="mt-6 text-center">
          <button
            onClick={() => window.location.href = "#projects"}
            className="bg-yellow-400 text-black font-medium py-2 px-6 rounded-lg shadow-md transform transition-transform duration-300 hover:bg-white hover:scale-105 hover:shadow-lg"
          >
            See My Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
