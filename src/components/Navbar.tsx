import { Link } from "react-router-dom";
import { useAuth } from "../stores/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <header className="bg-gradient shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/dashboard"
          className="flex items-center hover:opacity-90 transition-opacity duration-200"
        >
          <i className="fas fa-address-book text-white text-2xl mr-3"></i>
          <div className="text-white font-bold text-xl">Connext</div>
        </Link>

        <nav>
          <ul className="flex space-x-6">
            {currentUser ? (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="text-gray-100 hover:text-white flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-user-circle mr-2"></i>
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-gray-100 hover:text-white flex items-center transition-colors duration-200 cursor-pointer"
                  >
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    <span>Logout</span>
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-gray-100 hover:text-white flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-user-circle mr-2"></i>
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
