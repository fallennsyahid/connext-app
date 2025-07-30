import React, { useEffect, useRef, useState, type FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

interface SearchFormInput {
  onSearch: (filters: {
    name: string;
    email: string;
    phoneNumber: string;
  }) => void;
}

const SearchForm = ({ onSearch }: SearchFormInput) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [visible, setVisible] = useState(false);
  const searchFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = searchFormRef.current;
    if (!content) return;

    if (visible) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
      content.style.marginTop = "1rem";
    } else {
      content.style.maxHeight = "0px";
      content.style.opacity = "0";
      content.style.marginTop = "0";
    }
  }, [visible]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
    });
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phoneNumber: "" });
    onSearch({ name: "", email: "", phoneNumber: "" });
  };

  return (
    <div className="bg-gray-800/80 rounded-xl shadow-lg border border-gray-700 p-6 mb-8 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <i className="fas fa-search text-2xl text-blue-400 mr-3"></i>
          <h1 className="text-2xl font-semibold text-white">Search Contact</h1>
        </div>

        <button
          type="button"
          id="toggleSearchForm"
          aria-label={visible ? "Hide search form" : "Show search form"}
          onClick={() => setVisible(!visible)}
          className="text-gray-300 cursor-pointer hover:text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-all duration-200"
        >
          <i
            id="toggleSearchIcon"
            className={`fas ${
              visible ? "fa-chevron-up" : "fa-chevron-down"
            } text-lg font-semibold`}
            aria-hidden="true"
          ></i>
        </button>
      </div>
      <div
        id="searchFormContent"
        ref={searchFormRef}
        className="mt-4"
        style={{
          maxHeight: "0px",
          opacity: 0,
          marginTop: 0,
          overflow: "hidden",
          transition:
            "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, margin 0.3s ease-in-out",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
            <div>
              <Label htmlFor="name" text="Name" />
              <Input
                type="text"
                name="name"
                id="name"
                icon="fa-user"
                placeholder="Enter name to search"
                value={formData.name}
                onChange={handleChange}
                required={false}
              />
            </div>

            <div>
              <Label htmlFor="email" text="Email" />
              <Input
                type="email"
                name="email"
                id="email"
                icon="fa-envelope"
                placeholder="Enter email to search"
                value={formData.email}
                onChange={handleChange}
                required={false}
              />
            </div>

            <div>
              <Label htmlFor="phoneNumber" text="Phone" />
              <Input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                icon="fa-phone"
                placeholder="Enter phone number to search"
                value={formData.phoneNumber}
                onChange={handleChange}
                required={false}
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end mr-2 mb-2 gap-4">
            <Button
              type="reset"
              text="Reset"
              color="bg-red-600"
              icon="fa-rotate-left"
              ring="focus:ring-red-500"
              onClick={handleReset}
            />
            <Button
              type="submit"
              text="Search"
              color="bg-gradient"
              icon="fa-search"
              ring="ring-blue-500"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
