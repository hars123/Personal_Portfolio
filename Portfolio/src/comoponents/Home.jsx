// App.js
import React from "react";

function Home() {
  const handleClick = () => {
    alert("Button clicked! Welcome to my homepage!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 px-4">
      <div className="bg-gray-600 shadow-lg rounded-lg p-8 w-full max-w-[90%] text-center ">
        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-yellow-400">Harshit Shukla</h1>
        <p className="text-white text-lg leading-relaxed mb-6">
          I am a passionate Java backend developer,
          aiming to create scalable and efficient solutions. With a strong
          foundation in DSA, SQL, and modern frameworks, I love building
          innovative applications that make a difference.
        </p>
        <button
          onClick={handleClick}
          className="bg-yellow-400 text-black font-medium py-2 px-6 rounded-lg shadow-md transform transition-transform duration-300 hover:bg-white hover:scale-105 hover:shadow-lg"
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Home;
