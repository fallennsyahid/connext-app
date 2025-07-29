import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";

const EditContact = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/dashboard"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Contacts
          </Link>
          <h1 className="text-2xl text-white font-bold flex items-center">
            <i className="fa-solid fa-user-edit text-blue-400 mr-3"></i>
            Edit Contact
          </h1>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
          <div className="p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-5">
                <div>
                  <Label htmlFor="first_name" text="First Name" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-user-tag text-gray-500"></i>
                    </div>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="Enter the first name"
                      value=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="last_name" text="Last Name" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-user-tag text-gray-500"></i>
                    </div>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      placeholder="Enter the last name"
                      value=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <Label htmlFor="email" text="Email" />
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-envelope text-gray-500"></i>
                  </div>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter the email"
                    value=""
                    onChange={() => {}}
                  />
                </div>
              </div>

              <div className="mb-5">
                <Label htmlFor="phone_number" text="Phone Number" />
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-phone text-gray-500"></i>
                  </div>
                  <Input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Enter the phone number"
                    value=""
                    onChange={() => {}}
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Link
                  to="/dashboard"
                  className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md"
                >
                  <i className="fas fa-times mr-2"></i> Cancel
                </Link>
                <Button
                  type="submit"
                  color="bg-gradient"
                  icon="fa-save"
                  text="Save Changes"
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

export default EditContact;
