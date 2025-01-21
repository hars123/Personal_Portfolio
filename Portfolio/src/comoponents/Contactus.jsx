import React, { useState } from "react";
import emailjs from "emailjs-com";

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

    const templateParams = {
      from_name: name, // Matches the placeholder in your EmailJS template
      from_email: email, // Matches the placeholder in your EmailJS template
      message: message, // Matches the placeholder in your EmailJS template
    };

    emailjs
      .send(
        "service_0ay7z6m", // Your provided service ID
        "your_template_id", // Replace with your EmailJS Template ID
        templateParams,
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSent(true);
          e.target.reset(); // Clear form fields
          setTimeout(() => setIsSent(false), 3000); // Hide popup after 3 seconds
        },
        (error) => {
          console.error("Error while sending email:", error.text);
          setFormError("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 py-8 relative">
      <div className="bg-gray-700 text-white shadow-lg rounded-lg p-8 w-full max-w-[70%]">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
          {formError && <div className="text-red-500 text-sm mb-4">{formError}</div>}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Send Message
          </button>
        </form>
      </div>
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
