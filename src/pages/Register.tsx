import React, { useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../stores/AuthContext";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const Register = () => {
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setSubmitting(true);

    try {
      await register(email, fullName, password);
      navigate("/verify-email");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message || "Registration failed");
      setSubmitting(false);
    }
  };

  if (submitting) return <Loading />;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 backdrop-blur-sm w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient rounded-full mb-4">
            <i className="fas fa-address-book text-white text-3xl"></i>
          </div>
          <h1 className="text-3xl text-white font-bold">Contact Management</h1>
          <p className="text-gray-500 mt-2">Create a new account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email" text="Email" />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              icon="fa-user"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="full-name" text="Full Name" />
            <Input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Enter your full name"
              icon="fa-id-card"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="password" text="Password" />
            <PasswordInput
              name="password"
              id="password"
              icon="fa-lock"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              withToggle
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="confirm-password" text="Confirm Password" />
            <PasswordInput
              name="confirm-password"
              id="confirm-password"
              icon="fa-check-double"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              withToggle
            />
            {confirmPassword && password !== confirmPassword && (
              <p className="text-red-500 text-sm mt-1">Password do not macth</p>
            )}
          </div>

          <div className="my-6">
            <Button
              type="submit"
              text={loading ? "Signing Up..." : "Sign Up"}
              icon={loading ? "fa-spinner fa-spin" : "fa-sign-in-alt"}
              color="bg-gradient"
              ring="ring-blue-500"
              width="w-full"
              disable={submitting}
            />
          </div>

          <div className="text-center text-sm text-gray-500 space-x-2">
            {"Already have an account? "}
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
