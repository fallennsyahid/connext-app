import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";

const EditAddress = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/detail-contact"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Contact Details
          </Link>
          <h1 className="text-2xl text-white font-bold flex items-center">
            <i className="fas fa-location-dot text-blue-400 mr-3"></i> Edit
            Address
          </h1>
        </div>

        <div className="bg-gray-800/80 rounded-xl shadow-xl border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
          <div className="p-8">
            <div className="mb-8 text-center">
              <div className="w-20 h-20 bg-gradient rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                <i className="fa-solid fa-user text-3xl text-white"></i>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">John Doe</h1>
              <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
            </div>

            <form>
              <div className="mb-5">
                <Label htmlFor="street" text="Street" />
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-road text-gray-500"></i>
                  </div>
                  <Input
                    type="text"
                    name="street"
                    id="street"
                    placeholder="Enter the street address"
                    value="123 Third St"
                    onChange={() => {}}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <Label htmlFor="city" text="City" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-city text-gray-500"></i>
                    </div>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter the city address"
                      value="NYC"
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="province" text="Province/State" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-map text-gray-500"></i>
                    </div>
                    <Input
                      type="text"
                      name="province"
                      id="province"
                      placeholder="Enter the province/state address"
                      value="New York"
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <Label htmlFor="country" text="Country" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-flag text-gray-500"></i>
                    </div>
                    <Input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Enter the country address"
                      value="USA"
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="postal_code" text="Postal Code" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-envelopes-bulk text-gray-500"></i>
                    </div>
                    <Input
                      type="text"
                      name="postal_code"
                      id="postal_code"
                      placeholder="Enter the postal code"
                      value="12345"
                      onChange={() => {}}
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
                  color="bg-gradient"
                  text="Save Changes"
                  icon="fa-save"
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

export default EditAddress;
