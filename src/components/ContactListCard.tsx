import { Link } from "react-router-dom";
import Button from "./Button";
import Swal from "sweetalert2";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import toast from "react-hot-toast";
import { useState } from "react";
interface Contact {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  userId: string;
}
const ContactListCard = ({
  contact,
  removeFromState,
}: {
  contact: Contact;
  removeFromState: (id: string) => void;
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
    });

    if (confirm.isConfirmed) {
      setDeleting(true);
      try {
        removeFromState(String(contact.id));

        await deleteDoc(doc(db, "contacts", String(contact.id)));
        toast.success("Delete contact successfully");
      } catch (err) {
        console.error("Error deleting contact: " + err);
        toast.error("Error!. Failed to delete contact");
      } finally {
        setDeleting(false);
      }
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-gray-800/80 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="p-6">
          <Link
            to={`/detail-contact/${contact.id}`}
            className="block cursor-pointer hover:bg-gray-700 overflow-hidden rounded-lg transition-all duration-200 p-3"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center mr-3 shadow-md">
                <i className="fas fa-user text-white"></i>
              </div>
              <h1 className="text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-200">
                {contact.firstName} {contact.lastName}
              </h1>
            </div>
            <div className="space-y-3 text-gray-300 ml-2">
              <p className="flex items-center">
                <i className="fa-solid fa-user-tag text-gray-500 w-6 mr-2"></i>
                <span className="font-medium w-24">First Name:</span>
                <span>{contact.firstName}</span>
              </p>
              <p className="flex items-center">
                <i className="fa-solid fa-user-tag text-gray-500 w-6 mr-2"></i>
                <span className="font-medium w-24">Last Name:</span>
                <span>{contact.lastName}</span>
              </p>
              <p className="flex items-center">
                <i className="fa-solid fa-envelope text-gray-500 w-6 mr-2"></i>
                <span className="font-medium w-14">Email:</span>
                <span>{contact.email}</span>
              </p>
              <p className="flex items-center">
                <i className="fa-solid fa-phone text-gray-500 w-6 mr-2"></i>
                <span className="font-medium w-15">Phone:</span>
                <span>{contact.phoneNumber}</span>
              </p>
            </div>
          </Link>
          <div className="flex justify-end space-x-3 mt-3">
            <Link
              to={`/edit-contact/${contact.id}`}
              className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
            >
              <i className="fas fa-edit mr-2"></i>
              Edit
            </Link>
            <Button
              type="submit"
              color="bg-red-500"
              icon={deleting ? "fa-spinner fa-spin" : "fa-trash-alt"}
              text={deleting ? "Deleting" : "Delete"}
              ring="ring-red-500"
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactListCard;
