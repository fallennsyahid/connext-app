import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";

const AddAddress = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/detail-contact"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Contacts
          </Link>
          <h1 className="font-bold text-white text-2xl flex items-center">
            <i className="fas fa-plus-circle text-blue-400 mr-3"></i>
            Add Address
          </h1>
        </div>

        <div className="bg-gray-800/80 rounded-xl shadow-xl border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
          <div className="p-8">
            <div className="mb-6 pb-6 border-b border-gray-700">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4 shadow-md">
                  <i className="fa-solid fa-user text-white"></i>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-white">John Doe</h1>
                  <p className="text-gray-300 text-sm">
                    john.example@gmail.com &bull; +62 123456789
                  </p>
                </div>
              </div>
            </div>

            <form>
              <div className="mb-5">
                <Label htmlFor="street" text="Street" />
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-road text-gray-500"></i>
                  </div>

                  <Input
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Enter the street address"
                    value=""
                    onChange={() => {}}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <Label htmlFor="city" text="City" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-city text-gray-500"></i>
                    </div>

                    <Input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter the city address"
                      value=""
                      onChange={() => {}}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="province" text="Province/State" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-map text-gray-500"></i>
                    </div>

                    <Input
                      type="text"
                      id="province"
                      name="province"
                      placeholder="Enter the province address"
                      value=""
                      onChange={() => {}}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <Label htmlFor="country" text="Country" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-flag text-gray-500"></i>
                    </div>

                    <Input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Enter the country address"
                      value=""
                      onChange={() => {}}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="postal_code" text="Postal Code" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-envelopes-bulk text-gray-500"></i>
                    </div>

                    <Input
                      type="text"
                      id="postal_code"
                      name="postal_code"
                      placeholder="Enter the postal code"
                      value=""
                      onChange={() => {}}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Link
                  to="/detail-contact"
                  className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md"
                >
                  <i className="fas fa-times mr-2"></i> Cancel
                </Link>
                <Button
                  type="submit"
                  icon="fa-plus-circle"
                  text="Add Address"
                  color="bg-gradient"
                />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AddAddress;
