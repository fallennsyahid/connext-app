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
import NotFound404 from "./pages/404";
import ServerError5xx from "./pages/5xx";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestRoute from "./routes/GuestRoute";

export default function App() {
  const { loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />

        <Route
          path="/register"
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/create-contact"
          element={
            <ProtectedRoute>
              <CreateContact />
            </ProtectedRoute>
          }
        />

        <Route path="/detail-contact/:id" element={<DetailContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/edit-address" element={<EditAddress />} />

        <Route path="/verify-email" element={<VerifyEmail />} />

        <Route path="5xx" element={<ServerError5xx />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}
