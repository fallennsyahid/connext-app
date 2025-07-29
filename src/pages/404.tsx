import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <>
      <main className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-grow items-center justify-center">
            <div className="bg-gray-800/80 rounded-xl shadow-xl border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in p-8 text-center">
              <div>
                <div className="w-32 h-32 bg-gradient rounded-full mx-auto flex justify-center items-center mb-6 shadow-lg">
                  <i className="fas fa-exclamation-triangle text-6xl text-white"></i>
                </div>
                <h1 className="text-5xl font-bold text-white mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Page Not Found
                </h2>
                <p className="text-gray-300 mb-8">
                  The page you are looking fot doesn't exist or has been moved.
                </p>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-6 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-0.5"
                >
                  <i className="fas fa-home mr-2"></i> Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound404;
