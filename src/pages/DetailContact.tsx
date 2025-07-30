import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddAddressCard from "../components/AddAddressCard";
import AddressListCard from "../components/AddressListCard";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Loading from "../components/Loading";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

const DetailContact = () => {
  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "contacts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContact({ id: docSnap.id, ...docSnap.data() } as Contact);
        } else {
          setContact(null);
        }
      } catch (err) {
        console.error("Error fetching data" + err);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  if (loading) return <Loading />;

  if (!contact) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <i className="fas fa-exclamation-circle text-4xl text-red-400 mb-4"></i>
        <p className="text-gray-400 text-lg font-semibold text-center">
          Contact not found.
        </p>
        <Link
          to="/dashboard"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Contacts
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/dashboard"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Contacts
          </Link>
          <h1 className="text-2xl font-bold text-white flex items-center">
            <i className="fas fa-id-card mr-3 text-blue-400"></i> Detail Contact
          </h1>
        </div>

        <div className="bg-gray-800/80 rounded-xl shadow-lg border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in">
          <div className="p-8">
            <div className="mb-8 text-center">
              <div className="w-20 h-20 bg-gradient rounded-full mx-auto flex justify-center items-center mb-4 shadow-lg">
                <i className="fas fa-user text-3xl text-white"></i>
              </div>
              <h1 className="text-white text-2xl font-bold mb-2">
                {contact.firstName} {contact.lastName}
              </h1>
              <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
            </div>

            <div className="space-y-5 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gray-700/50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-gray-700/70">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-user-tag text-blue-400 mr-2"></i>
                    <h1 className="text-sm font-medium text-gray-300">
                      First Name
                    </h1>
                  </div>
                  <p className="text-lg text-white ml-6">{contact.firstName}</p>
                </div>
                <div className="bg-gray-700/50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-gray-700/70">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-user-tag text-blue-400 mr-2"></i>
                    <h1 className="text-sm font-medium text-gray-300">
                      Last Name
                    </h1>
                  </div>
                  <p className="text-lg text-white ml-6">{contact.lastName}</p>
                </div>
              </div>

              <div className="bg-gray-700/50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-gray-700/70">
                <div className="flex items-center mb-2">
                  <i className="fas fa-envelope text-blue-400 mr-2"></i>
                  <h1 className="text-sm font-medium text-gray-300">Email</h1>
                </div>
                <p className="text-lg text-white ml-6">{contact.email}</p>
              </div>

              <div className="bg-gray-700/50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-200 hover:bg-gray-700/70">
                <div className="flex items-center mb-2">
                  <i className="fas fa-phone text-blue-400 mr-2"></i>
                  <h1 className="text-sm font-medium text-gray-300">
                    Phone Number
                  </h1>
                </div>
                <a
                  href={`https://wa.me/${contact.phoneNumber}`}
                  target="_blank"
                  className="text-lg text-white ml-6 hover:underline"
                >
                  {contact.phoneNumber}
                </a>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-5">
                  <i className="fa-solid fa-map-marker-alt text-blue-400 mr-3"></i>
                  <h1 className="text-xl font-semibold text-white">
                    Addresses
                  </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <AddAddressCard contactId={contact.id} />
                  <AddressListCard />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Link
                to="/dashboard"
                className="px-5 py-3 text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back
              </Link>
              <Link
                to={`/edit-contact/${contact.id}`}
                className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center"
              >
                <i className="fas fa-user-edit mr-2"></i>Edit Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailContact;
