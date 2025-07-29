import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";

const CreateContact = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            to="/dashboard"
            className="text-blue-400 hover:text-blue-300 mr-3 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Contacts
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-user-plus mr-2"></i> Create New Contact
          </h1>
        </div>

        <div className="bg-gray-800/80 rounded-xl shadow-lg border border-gray-700 overflow-hidden max-w-2xl mx-auto">
          <div className="p-8">
            <form action="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <Label htmlFor="first_name" text="First Name" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-user-tag text-gray-500"></i>
                    </div>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="Enter the first name"
                      value=""
                      onChange={() => {}}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="last_name" text="Last Name" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-user-tag text-gray-500"></i>
                    </div>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      placeholder="Enter the last name"
                      value=""
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <Label htmlFor="email" text="Email" />
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-500"></i>
                  </div>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter the email"
                    value=""
                    onChange={() => {}}
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <Label htmlFor="phone_number" text="Phone Number" />
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-phone text-gray-500"></i>
                  </div>
                  <Input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Enter the phone number"
                    value=""
                    onChange={() => {}}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="reset"
                  text="Reset"
                  icon="fa-clock"
                  color="bg-red-600"
                  ring="ring-red-600"
                />
                <Button
                  type="submit"
                  text="Create Contact"
                  icon="fa-plus-circle"
                  color="bg-gradient"
                  ring="ring-blue-500"
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

export default CreateContact;
