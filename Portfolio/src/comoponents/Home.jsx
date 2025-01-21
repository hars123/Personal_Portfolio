import React from "react";

function Home() {
  const handleResumeClick = () => {
    alert("Resume button clicked! Welcome to my homepage!");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 w-full p-20"
      id="home"
    >
      {/* Container */}
      <div className="bg-gray-700 shadow-lg rounded-lg p-8 w-[90%] h-[90%] max-w-[1000px] text-center space-y-6">
        {/* Static Name */}
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 tracking-wider">
          Harshit Shukla
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I am Harshit Shukla, a Full Stack developer dedicated to building
          efficient, scalable, and impactful software solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Resume Button with Download functionality */}
          <a
            href="/assets/Harshit_Shukla.pdf"  // Updated path for files in public directory
            download="Harshit_Shukla.pdf" // The file will be saved with this name
            className="bg-yellow-500 text-gray-900 font-medium py-2 px-6 rounded-lg shadow-md transform transition duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-2xl"
          >
            Resume
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitshukla4513@gmail.com&su=Hello%20Harshit&body=Hi%20Harshit,%20I%20wanted%20to%20reach%20out%20to%20you."
            target="_blank" // Open in a new tab
            className="bg-green-500 text-gray-900 font-medium py-2 px-6 rounded-lg shadow-md transform transition duration-300 hover:bg-green-400 hover:scale-105 hover:shadow-2xl"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
