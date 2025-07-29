import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 backdrop-blur-sm w-full max-w-md text-center animate-fade-in">
        <div className="inline-block p-3 bg-gradient rounded-full mb-4">
          <i className="fas fa-envelope text-white text-3xl"></i>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Verify Your Email
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          We’ve sent a verification link to your email. Please check your inbox
          or spam folder to activate your account.
        </p>

        <p className="text-gray-500 text-sm mb-6">
          After verification, you can login using your credentials.
        </p>

        <Link
          to="/login"
          className="bg-gradient text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition duration-200"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
