import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

const SearchForm = () => {
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
          onClick={() => setVisible(!visible)}
          className="text-gray-300 cursor-pointer hover:text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-all duration-200"
        >
          <i
            id="toggleSearchIcon"
            className={`fas ${
              visible ? "fa-chevron-up" : "fa-chevron-down"
            } text-lg font-semibold`}
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
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
            <div>
              <Label htmlFor="search_name" text="Name" />
              <Input
                type="text"
                name="search_name"
                id="search_name"
                icon="fa-user"
                placeholder="Enter name to search"
                value="Umaru"
                onChange={() => {}}
              />
            </div>

            <div>
              <Label htmlFor="search_email" text="Email" />
              <Input
                type="email"
                name="search_email"
                id="search_email"
                icon="fa-envelope"
                placeholder="Enter email to search"
                value="syahid@example.com"
                onChange={() => {}}
              />
            </div>

            <div>
              <Label htmlFor="search_phone" text="Phone" />
              <Input
                type="tel"
                name="search_phone"
                id="search_phone"
                icon="fa-phone"
                placeholder="Enter phone number to search"
                value="0896"
                onChange={() => {}}
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end mr-2 mb-2 gap-4">
            <Button
              type="reset"
              text="Reset"
              color="bg-red-600"
              icon="fa-rotate-left"
              ring="ring-red-500"
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
