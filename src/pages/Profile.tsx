import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Label from "../components/Label";
import Navbar from "../components/Navbar";
import { useEffect, useState, type FormEvent } from "react";
import { auth } from "../config/firebase";
import { updatePassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import PasswordInput from "../components/PasswordInput";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth.currentUser?.displayName) {
      setFullName(auth.currentUser.displayName);
    }
  }, []);

  const updateFullName = async (e: FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) return;

    setLoading(true);
    try {
      await updateProfile(auth.currentUser, { displayName: fullName });
      toast.success("Full Name Updated Successfully!");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e: FormEvent) => {
    e.preventDefault();

    if (!auth.currentUser) {
      toast.error("No User Logged In");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Password do not macth");
      return;
    }

    setLoading(true);

    try {
      await updatePassword(auth.currentUser, newPassword);
      toast.success("Password update successfully!");
      setNewPassword("");
      setConfirmPassword("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/dashboard"
            className="text-blue-400 hover:text-blue-300 mr-3 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Contacts
          </Link>
          <i className="fas fa-user-cog text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-bold text-white">My Profile</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 animate-fade-in">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center mr-3 shadow-md">
                  <i className="fas fa-user-edit text-white text-xl"></i>
                </div>
                <h2 className="text-xl text-white font-semibold">
                  Edit Profile
                </h2>
              </div>

              <form onSubmit={updateFullName}>
                <div className="mb-5">
                  <Label htmlFor="name" text="Full Name" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-user text-gray-500"></i>
                    </div>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <Button
                    type="submit"
                    text={loading ? "Updating..." : "Update Profile"}
                    icon="fa-save"
                    color="bg-gradient"
                    ring="ring-blue-500"
                    width="w-full"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="bg-gray-800/80 border border-gray-700 rounded-xl shadow-xl overflow-hidden transition-all ease-in-out hover:-translate-y-1 animate-fade-in">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3 shadow-md">
                  <i className="fas fa-key text-white text-xl"></i>
                </div>
                <h1 className="text-xl text-white font-semibold">
                  Change Password
                </h1>
              </div>

              <form onSubmit={handleUpdatePassword}>
                <div className="mb-5">
                  <Label htmlFor="new_password" text="New Password" />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-lock text-gray-500"></i>
                    </div>
                    <PasswordInput
                      name="new_password"
                      id="new_password"
                      placeholder="Enter your new password"
                      icon="fa-lock"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      withToggle
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <Label
                    htmlFor="confirm_password"
                    text="Confirm New Password"
                  />
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fas fa-check-double text-gray-500"></i>
                    </div>
                    <PasswordInput
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm your new password"
                      icon="fa-check-double"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      withToggle
                    />
                  </div>
                  {confirmPassword && newPassword !== confirmPassword && (
                    <p className="text-sm text-red-500 mt-1">
                      Password do not macth
                    </p>
                  )}
                </div>

                <div className="mb-5">
                  <Button
                    type="submit"
                    text="Update Password"
                    icon="fa-key"
                    color="bg-gradient"
                    ring="ring-blue-500"
                    width="w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
