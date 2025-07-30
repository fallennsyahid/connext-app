import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import Loading from "./Loading";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

interface AddressProps {
  id: string;
  titleAddress: string;
  street: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
}

const AddressListCard = () => {
  const { id: contactId } = useParams<{ id: string }>();
  const [addresses, setAddresses] = useState<AddressProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddresses = async () => {
      if (!contactId) return;
      try {
        const q = query(
          collection(db, "addresses"),
          where("contactId", "==", contactId)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<AddressProps, "id">),
        }));
        setAddresses(data);
      } catch (err) {
        console.error("Error fething data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [contactId]);

  const handleDelete = async (addressId: string) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Are you sure want delete?",
      text: "You won't be able to revert this!",
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
    });

    if (result.isConfirmed) {
      setLoading(true);
      try {
        await deleteDoc(doc(db, "addresses", addressId));
        toast.success("Address deleted successfully!");
        setAddresses(addresses.filter((a) => a.id !== addressId));
      } catch (err) {
        console.error(err);
        toast.error("Failed to delete address");
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      {addresses.map((address) => (
        <div className="bg-gray-700/50 p-5 rounded-lg shadow-md border border-gray-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md">
              <i className="fa-solid fa-location-dot text-white"></i>
            </div>
            <h1 className="text-lg font-semibold text-white">
              {address.titleAddress || "Address"}
            </h1>
          </div>
          <div className="space-y-3 text-gray-300 ml-2 mb-4">
            <p className="flex items-center">
              <i className="fa-solid fa-road text-gray-500 w-6 mr-2"></i>
              <span className="font-medium w-24">Street:</span>
              <span>{address.street}</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-city text-gray-500 w-6 mr-2"></i>
              <span className="font-medium w-24">City:</span>
              <span>{address.city}</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-map text-gray-500 w-6 mr-2"></i>
              <span className="font-medium w-24">Province:</span>
              <span>{address.province}</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-flag text-gray-500 w-6 mr-2"></i>
              <span className="font-medium w-24">Country:</span>
              <span>{address.country}</span>
            </p>
            <p className="flex items-center">
              <i className="fa-solid fa-envelopes-bulk text-gray-500 w-6 mr-2"></i>
              <span className="font-medium w-24">Postal Code:</span>
              <span>{address.postalCode}</span>
            </p>
          </div>
          <div className="flex justify-end space-x-3">
            <Link
              to={`/edit-address/${address.id}`}
              className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
            >
              <i className="fas fa-edit mr-2"></i> Edit
            </Link>
            <Button
              type="button"
              text="Delete"
              icon="fa-trash-alt"
              color="bg-gradient-to-r from-red-600 to-red-500"
              onClick={() => handleDelete(address.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default AddressListCard;
