import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateContact from "./pages/CreateContact";
import DetailContact from "./pages/DetailContact";
import AddAddress from "./pages/AddAddress";
import EditContact from "./pages/EditContact";
import EditAddress from "./pages/EditAddress";
import VerifyEmail from "./pages/VerifyEmail";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./stores/AuthContext";
import Loading from "./components/Loading";

export default function App() {
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-contact" element={<CreateContact />} />
        <Route path="/detail-contact/:id" element={<DetailContact />} />
        <Route path="/edit-contact" element={<EditContact />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/edit-address" element={<EditAddress />} />

        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </>
  );
}
