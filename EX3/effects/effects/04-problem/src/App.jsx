import React, { useEffect, useState } from "react";

// Fetch all todos from the todos endpoint and display them in the todo component
// API endpoint: https://jsonplaceholder.typicode.com/users/1/todos
export default function Todos() {
  const [todos, setTodos] = useState([]); // State to hold the todos
  const [loading, setLoading] = useState(true); // State to manage loading state

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center py-8">
      <h1 className="text-2xl font-bold pb-4">My Todo List</h1>
      {loading ? (
        <p>Loading...</p> // Show loading text while fetching
      ) : (
        <div className="space-y-5">
          {todos.map((todo) => (
            <Todo key={todo.id} title={todo.title} completed={todo.completed} />
          ))}
        </div>
      )}
    </div>
  );
}

function Todo({ title, completed }) {
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id="completed"
          name="completed"
          type="checkbox"
          defaultChecked={completed}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <div className="font-medium text-gray-900">{title}</div>
      </div>
    </div>
  );
}
