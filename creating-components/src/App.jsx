import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <Form />
    </div>
  );
}