import logo from '@/assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-white bg-opacity-10 backdrop-blur-md py-4 sm:mt-20 gap-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-center md:text-left gap">
        <div>
          <img
            src={logo} // Replace with the logo image
            alt="Travel Logo"
            className="h-12 mx-auto md:mx-0"
          />
          <p className="text-blue-950 text-sm">
            Travel helps companies manage payments easily.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-4"> 
            <a href="#linkedin" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="#messenger" aria-label="Messenger" className="text-gray-600 hover:text-blue-500">
              <i className="fab fa-facebook-messenger fa-lg"></i>
            </a>
            <a href="#twitter" aria-label="Twitter" className="text-gray-600 hover:text-blue-400">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#other" aria-label="Other" className="text-gray-600 hover:text-blue-400">
              <i className="fas fa-globe fa-lg"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg text-blue-950">Company</h3>
          <ul className="text-blue-950 text-sm">
            <li>About Us</li>
            <li>Services</li>
            <li>Upcoming Packages</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-blue-950">Destination</h3>
          <ul className="text-blue-950 text-sm">
            <li>Maldives</li>
            <li>Los Angeles</li>
            <li>Toronto</li>
          </ul>
        </div>
      </div>

      <div className="border-4 border-blue-950 mt-8"></div>

      <p className="text-blue-950 text-center text-sm mt-4">
        Copyright © Servmind 2025. All Rights Reserved.
      </p>
    </footer>
  );
}
