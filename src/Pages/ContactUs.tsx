import   { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // This is for the EmailJS
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setError("All fields marked with * are required.");
      setSuccess("");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }
  
    // Set loading state
    setLoading(true);
    setError("");
    setSuccess("");
  
    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_al17d27", // Replace with your EmailJS Service ID
        "template_5lnjcxo", // Replace with your EmailJS Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "i8OoDK9PJt-1kLX52" // Replace with your EmailJS User/Public Key
      );
  
      // Success
      setSuccess("Your message has been successfully sent!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div
        id="contact-us"
        className="relative bg-[url('./assets/images/ContactUs.png')] bg-cover bg-center min-h-screen flex flex-col"
      >
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-10 w-[90%] max-w-4xl mt-20 mb-10">
            <p className="text-1xl font-extrabold text-center text-gray-800">
              Need Any Clarifications?
            </p>
            <h2 className="text-3xl font-extrabold text-center text-white mb-6">
              Let us know your <br />
              Questions
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-5">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <textarea
                  className="shadow appearance-none border rounded w-full h-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Message *"
                  rows={10}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </form>
            <div className="mt-6 text-center">
              {loading ? (
                <button
                  className="bg-orange-500 text-white font-bold py-2 px-6 rounded focus:outline-none"
                  disabled
                >
                  Sending...
                </button>
              ) : (
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              )}
            </div>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            {success && <p className="text-green-500 text-center mt-4">{success}</p>}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}



// emailjs use karanna eka lesi habai email ekak nathiu ekai parashne ekai hadduwe naththe