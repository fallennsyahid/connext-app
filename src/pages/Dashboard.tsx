import { Link } from "react-router-dom";
import ContactListCard from "../components/ContactListCard";
import CreateContactCard from "../components/CreateContactCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  userId: string;
}

const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(
          collection(db, "contacts"),
          where("userId", "==", user.uid)
        );

        const querySnapshot = await getDocs(q);
        const contactData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Contact[];
        setContacts(contactData);
      } else {
        setContacts([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleRemoveContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <i className="fas fa-users text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-bold text-white">My Contacts</h1>
        </div>

        <SearchForm />

        {loading ? (
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
              <Link
                to="/create-contact"
                className="bg-blue-800 text-lg text-white font-semibold shadow-md rounded-full px-4 py-2 mt-2 hover:bg-blue-900 hover:shadow-lg transition-all duration-200"
              >
                Add New Contact
              </Link>
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
