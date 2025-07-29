import { Link } from "react-router-dom";

const ContactListCard = () => {
  return (
    <div className="bg-gray-800/80 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <div className="p-6">
        <Link
          to="/detail-contact"
          className="block cursor-pointer hover:bg-gray-700 overflow-hidden rounded-lg transition-all duration-200 p-3"
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center mr-3 shadow-md">
              <i className="fas fa-user text-white"></i>
            </div>
            <h1 className="text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-200">
              Syahid
            </h1>
          </div>
          <div className="space-y-3 text-gray-300 ml-2">
            <p className="flex items-center">
              <i className="fa-solid fa-user-tag text-gray-500 w-6 mr-2"></i>
              <span className="font-medium w-24">First Name:</span>
              <span>Umaru</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-user-tag text-gray-500 w-6 mr-2"></i>
              <span className="font-medium w-24">Last Name:</span>
              <span>Syahid</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-envelope text-gray-500 w-6 mr-2"></i>
              <span className="font-medium w-14">Email:</span>
              <span>syahid@example.com</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-phone text-gray-500 w-6 mr-2"></i>
              <span className="font-medium w-15">Phone:</span>
              <span>+62 812345678</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactListCard;
