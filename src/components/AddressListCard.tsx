import { Link } from "react-router-dom";
import Button from "./Button";

const AddressListCard = () => {
  return (
    <div className="bg-gray-700/50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md">
          <i className="fa-solid fa-location-dot text-white"></i>
        </div>
        <h1 className="text-lg font-semibold text-white">Title Address</h1>
      </div>
      <div className="space-y-3 text-gray-300 ml-2 mb-4">
        <p className="flex items-center">
          <i className="fa-solid fa-road text-gray-500 w-6 mr-2"></i>
          <span className="font-medium w-24">Street:</span>
          <span>123 Second St</span>
        </p>
        <p className="flex items-center">
          <i className="fa-solid fa-city text-gray-500 w-6 mr-2"></i>
          <span className="font-medium w-24">City:</span>
          <span>NYC</span>
        </p>
        <p className="flex items-center">
          <i className="fa-solid fa-map text-gray-500 w-6 mr-2"></i>
          <span className="font-medium w-24">Province:</span>
          <span>NY</span>
        </p>
        <p className="flex items-center">
          <i className="fa-solid fa-flag text-gray-500 w-6 mr-2"></i>
          <span className="font-medium w-24">Country:</span>
          <span>USA</span>
        </p>
        <p className="flex items-center">
          <i className="fa-solid fa-envelopes-bulk text-gray-500 w-6 mr-2"></i>
          <span className="font-medium w-24">Postal Code:</span>
          <span>12345</span>
        </p>
      </div>
      <div className="flex justify-end space-x-3">
        <Link
          to="/edit-address"
          className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
        >
          <i className="fas fa-edit mr-2"></i> Edit
        </Link>
        <Button
          icon="fa-trash-alt"
          text="Delete"
          color="bg-gradient-to-r from-red-600 to-red-500"
          type="button"
        />
      </div>
    </div>
  );
};

export default AddressListCard;
