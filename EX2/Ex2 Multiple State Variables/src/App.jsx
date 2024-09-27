import React, { useState } from "react";
import { produce } from "immer";

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    timezone: "Pacific Standard Time",
  });

  const [savedData, setSavedData] = useState(null);

  // Function to handle input changes using Immer
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value, 
    // }));
    setFormData(
      produce((draft) => {
        draft[name] = value; 
      })
    );
  };

  // Check if any value is missing
  const isFormValid =
    formData.firstName && formData.lastName && formData.timezone;

  // Handle save button click
  const handleSave = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setSavedData(formData);
    }
  };

  return (
    <div className="bg-gray-800 h-screen divide-y divide-white/5">
      <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-base font-semibold leading-7 text-white">
            {savedData
              ? `${savedData.firstName} ${savedData.lastName}`
              : "FirstName LastName"}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            {savedData ? savedData.timezone : "Timezone"}
          </p>
        </div>

        <form className="md:col-span-2" onSubmit={handleSave}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="timezone"
                className="block text-sm font-medium leading-6 text-white"
              >
                Timezone
              </label>
              <div className="mt-2">
                <select
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                >
                  <option>Pacific Standard Time</option>
                  <option>Eastern Standard Time</option>
                  <option>Greenwich Mean Time</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 flex">
            <button
              type="submit"
              disabled={!isFormValid} // Disable the button if any value is missing
              className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${
                isFormValid
                  ? "bg-indigo-500 hover:bg-indigo-400"
                  : "bg-gray-500 cursor-not-allowed"
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
