import React from "react";

// Make label id, label text, input placeholder, input description dynamic
function FormInput({ id, label, placeholder, description }) {
  return (
    <div className="max-w-sm p-8">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type="text"
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}

export default function App() {
  return (
    <form>
      <FormInput
        id="email"
        label="Email Address"
        placeholder="you@example.com"
        description="We'll only use this for spam."
      />
      <FormInput
        id="username"
        label="Username"
        placeholder="Enter your username"
        description="Your unique username for login."
      />
    </form>
  );
}
