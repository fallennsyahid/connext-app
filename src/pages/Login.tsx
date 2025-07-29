import React, { useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../stores/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Login failed: ", error.message);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center min-h-screen p-4">
      <div className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 backdrop-blur-sm w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient rounded-full mb-4">
            <i className="fa-solid fa-address-book text-white text-3xl"></i>
          </div>
          <h1 className="text-3xl text-white font-bold">Contact Management</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <Label htmlFor="email" text="Email" />
            <Input
              type="email"
              name="email"
              id="email"
              icon="fa-user"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <PasswordInput
            name="password"
            id="password"
            placeholder="Enter your password"
            icon="fa-lock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            withToggle
          />

          <div className="my-6">
            <Button
              type="submit"
              color="bg-gradient"
              icon="fa-sign-in-alt"
              ring="ring-blue-500"
              text="Login"
              width="w-full"
            />
          </div>

          <div className="text-center text-sm text-gray-500 space-x-2">
            {"Don't have a account? "}
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
