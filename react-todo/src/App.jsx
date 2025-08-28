import React from "react";
import TodoList from "./components/TodoList"; 

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#C15F3C]">
          React Todo List
        </h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;