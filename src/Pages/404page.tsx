

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="text-center px-6 py-8 bg-white shadow-xl rounded-lg">
        <h1 className="text-9xl font-extrabold text-purple-600 animate-bounce">404</h1>
        <p className="text-3xl font-bold text-gray-800 mt-4">Page Not Found</p>
        <p className="text-gray-600 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="/"
            className="px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Go Back Home
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-purple-600 bg-white border border-purple-600 hover:bg-gray-100 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
