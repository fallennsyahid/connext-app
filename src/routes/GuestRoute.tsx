import type { JSX } from "react";
import { useAuth } from "../stores/AuthContext";
import { Navigate } from "react-router-dom";

interface GuestRouteProps {
  children: JSX.Element;
}

const GuestRoute = ({ children }: GuestRouteProps) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default GuestRoute;
