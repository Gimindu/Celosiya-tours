import logo from '@/assets/images/logo design t.avif';

export default function Footer() {
  return (
    <footer className="w-full bg-white bg-opacity-10 backdrop-blur-md py-4 sm:mt-20 gap-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-center md:text-left gap">
        <div>
          <img
            src={logo}
            alt="Travel Logo"
            className="h-16 mx-auto md:mx-0"
          />
          <p className="text-blue-950 text-sm mt-2">
            The world is full of wonderful things you haven't seen yet.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-4"> 
            <a
              href="https://www.facebook.com/share/1Dns44gFNd/?mibextid=wwXIfr/"
              aria-label="Messenger"
              className="text-blue-950 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/celosia_tours?igsh=MWs0a21jam4weGJvMQ%3D%3D&utm_source=qr"
              aria-label="Instagram"
              className="text-blue-950 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://www.yourwebsite.com/"
              aria-label="Other"
              className="text-blue-950 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe fa-lg"></i>
            </a>
          </div>
          <div className="mt-4 text-blue-950 text-sm">
            <p>Email: <a href="mailto:celosiatour@gmail.com" className="text-blue-950 hover:underline">celosiatour@gmail.com</a></p>
            <p>Phone: <a href="tel:+94742338208" className="text-blue-950 hover:underline">+94742338208</a></p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg text-blue-950 mt-10">Company</h3>
          <ul className="text-blue-950 text-sm">
            <li>About Us</li>
            <li>Services</li>
            <li>Upcoming Packages</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-blue-950 mt-10">Recommend Destination</h3>
          <ul className="text-blue-950 text-sm">
            <li>Ella</li>
            <li>Nuwara Eliya</li>
            <li>Kandy</li>
          </ul>
        </div>
      </div>

      <div className="border-4 border-blue-950 mt-8"></div>

      <p className="text-white text-center text-sm mt-4">
          Copyright ©{' '}
          <a 
            href="https://www.servmind.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className=" hover:text-gray-300"
          >
            Servmind
          </a>{' '}
          2025. All Rights Reserved.
      </p>

    </footer>
  );
}
