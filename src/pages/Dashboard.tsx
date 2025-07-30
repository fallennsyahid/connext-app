import { useNavigate } from "react-router-dom";
import ContactListCard from "../components/ContactListCard";
import CreateContactCard from "../components/CreateContactCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import { db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../stores/AuthContext";
import Swal from "sweetalert2";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userId: string;
}

const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const fetchContacts = useCallback(
    async (filters?: { name: string; email: string; phoneNumber: string }) => {
      if (!currentUser) {
        setLoading(false);
        return;
      }
      setLoading(true);

      const q = query(
        collection(db, "contacts"),
        where("userId", "==", currentUser.uid)
      );

      const querySnapshot = await getDocs(q);
      let contactData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Contact[];

      if (filters) {
        const nameFilter = filters.name?.toLowerCase() || "";
        const emailFilter = filters.email?.toLowerCase() || "";
        const phoneFilter = filters.phoneNumber.toLowerCase() || "";

        contactData = contactData.filter((c) => {
          const matchName = nameFilter
            ? (c.firstName + " " + c.lastName)
                .toLowerCase()
                .includes(nameFilter)
            : true;

          const matchEmail = emailFilter
            ? c.email.toLowerCase().includes(emailFilter)
            : true;

          const matchPhone = phoneFilter
            ? String(c.phoneNumber).includes(phoneFilter)
            : true;

          return matchName && matchEmail && matchPhone;
        });
      }

      setContacts(contactData);
      setLoading(false);
    },
    [currentUser]
  );

  useEffect(() => {
    if (!currentUser) return;
    fetchContacts();
  }, [currentUser, fetchContacts]);

  const handleSearch = (filters: {
    name: string;
    email: string;
    phoneNumber: string;
  }) => {
    fetchContacts(filters);
  };

  const handleRemoveContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const handleClickAdd = () => {
    if (!currentUser) {
      Swal.fire({
        icon: "warning",
        title: "Oops..",
        text: "you are not logged in yet!",
        confirmButtonColor: "#CC0000",
        confirmButtonText: "OK",
      });
      return;
    }
    navigate("/create-contact");
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <i className="fas fa-users text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-bold text-white">My Contacts</h1>
        </div>

        <SearchForm onSearch={handleSearch} />

        {!currentUser ? (
          <div className="p-6 bg-gray-800/80 flex flex-col items-center justify-center rounded-xl shadow-lg animate-fade-in">
            <i className="fas fa-lock text-4xl text-red-400 animate-bounce"></i>
            <p className="text-gray-400 text-center italic mt-2 text-xl">
              You must login to view your contacts
            </p>
            <button
              onClick={() => navigate("/login")}
              className="bg-red-600 text-white font-semibold rounded-full px-4 py-2 mt-2 cursor-pointer hover:bg-red-700 transition-all duration-200"
            >
              Go to Login
            </button>
          </div>
        ) : loading ? (
          <p className="text-gray-300 col-span-full text-center">
            Loading contacts...
          </p>
        ) : contacts.length === 0 ? (
          <>
            <div className="p-6 bg-gray-800/80 flex flex-col items-center justify-center rounded-xl shadow-lg transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-1">
              <i className="fas fa-address-book text-4xl text-blue-400 animate-bounce"></i>
              <p className="text-gray-400 text-center italic mt-2 text-xl">
                No Contacts Yet
              </p>
              <button
                onClick={handleClickAdd}
                className="bg-blue-800 text-lg text-white font-semibold shadow-md rounded-full px-4 py-2 mt-2 hover:bg-blue-900 hover:shadow-lg transition-all duration-200"
              >
                Add New Contact
              </button>
              <p className="text-gray-500 text-sm mt-2 text-center">
                Start by adding your first contact to manage them here.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              <CreateContactCard />
              {contacts.map((contact) => (
                <ContactListCard
                  key={contact.id}
                  contact={contact}
                  removeFromState={handleRemoveContact}
                />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
