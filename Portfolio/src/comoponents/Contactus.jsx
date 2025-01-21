import React, { useState } from "react";

const Contactus = () => {
  const [isSent, setIsSent] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    // Validate mandatory fields
    if (!name || !email || !message) {
      setFormError("All fields are mandatory.");
      return;
    }

    // Clear errors and show success message
    setFormError("");
    setIsSent(true);
    e.target.reset(); // Clear form fields

    // Hide popup after 3 seconds
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 py-8 relative">
      <div className="bg-gray-700 text-white shadow-lg rounded-lg p-8 w-full max-w-[70%]">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-300"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          {/* Error Message */}
          {formError && (
            <div className="text-red-500 text-sm mb-4">{formError}</div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {isSent && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">✔</div>
            <h2 className="text-lg font-bold text-gray-900">
              Message Sent Successfully!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contactus;
