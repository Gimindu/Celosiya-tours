export default function ContactUs() {
    return (
      <>
        <div id ="contact-us" className="relative bg-[url('./assets/images/ContactUs.png')] bg-cover bg-center h-screen">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Glassmorphic Form Container */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-10 w-[90%] max-w-4xl ">
                <p className="text-1xl font-extrabold text-center  text-gray-800  ">Need Any clarifications?</p>
                <h2 className="text-3xl font-extrabold text-center text-white mb-6">
                    Let us know your <br/>Questions
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
          <footer className="absolute bottom-0 w-full bg-white bg-opacity-10 backdrop-blur-md py-4">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-center md:text-left">
              <div>
                <h3 className="font-bold text-lg text-gray-800">Travel</h3>
                <p className="text-gray-600 text-sm">
                  Travel helps companies manage payments easily.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Company</h3>
                <ul className="text-gray-600 text-sm">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Upcoming Packages</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Destination</h3>
                <ul className="text-gray-600 text-sm">
                  <li>Maldives</li>
                  <li>Los Angeles</li>
                  <li>Toronto</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
  