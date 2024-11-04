import React, { useEffect, useState } from "react";

// Fetch all todos from the todos endpoint and display them in the todo component
// API endpoint: https://jsonplaceholder.typicode.com/users/1/todos
export default function Todos() {
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  // }[]

  return (
    <div className="flex justify-center flex-col items-center py-8">
      <h1 className="text-2xl font-bold pb-4">My Todo List</h1>
      <div className="space-y-5">{/* todos here */}</div>
    </div>
  );
}

function Todo() {
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id="completed"
          name="completed"
          type="checkbox"
          defaultChecked={false}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <div className="font-medium text-gray-900">Title</div>
      </div>
    </div>
  );
}
