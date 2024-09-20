import React from "react";

// Pass in imageSrc and name as props
const Avatar =({imageSrc,name,profileText}) =>{
  return (
    <div className="group block p-8 flex-shrink-0">
      <div className="flex items-center">
        <div>
          <img src={imageSrc}/>
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
            {name}
          </p>
          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
          {profileText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <Avatar
    profileText="See profile"
    imageSrc = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    name = "Tom Cook"
  />;
}
