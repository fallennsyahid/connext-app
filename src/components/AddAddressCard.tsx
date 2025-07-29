import { Link } from "react-router-dom";

const AddAddressCard = () => {
  return (
    <div className="bg-gray-700/50 p-5 rounded-lg border-2 border-dashed border-gray-600 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <Link to="/add-address" className="block h-full">
        <div className="flex flex-col justify-center items-center h-full text-center py-4">
          <div className="w-16 h-16 bg-gradient rounded-full flex justify-center items-center mb-4 shadow-lg transform transition-transform duration-300 hover:scale-110">
            <i className="fa-solid fa-plus text-2xl text-white"></i>
          </div>
          <h1 className="text-lg font-semibold text-white">Add Address</h1>
        </div>
      </Link>
    </div>
  );
};

export default AddAddressCard;
