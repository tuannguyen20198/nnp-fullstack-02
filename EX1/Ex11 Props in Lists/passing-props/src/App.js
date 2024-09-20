import React from "react";

// Take static values and make them dynamic using props
// For example: label id, label text, input placeholder, input description
function FormInput() {
  return (
    <div className="max-w-sm p-8">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Email
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        We'll only use this for spam.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <form>
      <FormInput />
      <FormInput />
    </form>
  );
}
