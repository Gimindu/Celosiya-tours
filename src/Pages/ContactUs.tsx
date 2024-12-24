import Footer from "./Footer";

export default function ContactUs() {
  return (
    <>
      <div
        id="contact-us"
        className="relative bg-[url('./assets/images/ContactUs.png')] bg-cover bg-center min-h-screen flex flex-col"
      >
        <div className="flex-grow flex items-center justify-center">
          {/* Glassmorphic Form Container */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-10 w-[90%] max-w-4xl mt-20 mb-10">
            <p className="text-1xl font-extrabold text-center text-gray-800">
              Need Any clarifications?
            </p>
            <h2 className="text-3xl font-extrabold text-center text-white mb-6">
              Let us know your <br />
              Questions
            </h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="flex flex-col gap-5">
                <div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              {/* Right Column */}
              <div className="flex flex-col">
                <textarea
                  className="shadow appearance-none border rounded w-full h-full py-2 px-3 bg-[#EAEAEA] text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Message"
                  rows={10}
                ></textarea>
              </div>
            </form>
            <div className="mt-6 text-center">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
