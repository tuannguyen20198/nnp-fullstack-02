import React from "react";
import files from "./files";
import PhotoListItem from "./PhotoListItem";

// Use files array, display a PhotoListItem, passing the data down as a prop and displaying it
function PhotoList() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {files.map((file) => (
        <PhotoListItem key={file.source} file={file}/>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <div className="bg-purple-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PhotoList/>
      </div>
    </div>
  );
}
