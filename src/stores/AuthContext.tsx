import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface AuthContextType {
  currentUser: User | null;
  register: (
    email: string,
    fullName: string,
    password: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (
    email: string,
    fullName: string,
    password: string
  ) => {
    try {
      setAuthLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: fullName });
      await sendEmailVerification(user);

      toast.success(
        "Verifikasi email telah dikirim. Silakan cek inbox atau spam."
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Register failed:", error.code);
      toast.error(error.message || "Registrasi gagal");
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setAuthLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await user.reload();

      if (!user.emailVerified) {
        toast.error("Please verify your email before logging in.");
        return;
      }

      toast.success(`Welcome ${user.displayName} 😉`);
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Login failed");
      console.error(error.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    const result = await Swal.fire({
      title: "Are you sure want to quit?",
      text: "You will be out from this account",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, quit",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        setAuthLoading(true);
        await signOut(auth);
        setCurrentUser(null);
        toast.success("Logged successfully, see you again 👋");
        navigate("/");
      } catch {
        toast.error("Log out failed");
      } finally {
        setAuthLoading(false);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, register, login, logout, loading: authLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
