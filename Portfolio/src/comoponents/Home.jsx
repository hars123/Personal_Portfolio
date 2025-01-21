import React from "react";

function Home() {
  const handleResumeClick = () => {
    alert("Resume button clicked! Welcome to my homepage!");
  };

  const handleEmailClick = () => {
    alert("Email button clicked! Feel free to reach out at: harshit.shukla@example.com");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 w-full p-20">
      {/* Container */}
      <div className="bg-gray-700 shadow-lg rounded-lg p-8 w-[90%] h-[90%] max-w-[1000px] text-center space-y-6">
        {/* Static Name */}
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 tracking-wider">
          Harshit Shukla
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I am Harshit Shukla, a Full Stack developer dedicated to building efficient, scalable, and impactful software solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleResumeClick}
            className="bg-yellow-500 text-gray-900 font-medium py-2 px-6 rounded-lg shadow-md transform transition duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-2xl"
          >
            Resume
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Home;
