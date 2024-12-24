export default function Footer() {
  return (
    <footer className="w-full bg-white bg-opacity-10 backdrop-blur-md py-4 sm:mt-20 gap-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-center md:text-left gap">
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
  );
}
