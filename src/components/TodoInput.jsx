import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    onAdd(input);
    setInput("");
  };

  return (
    <div className="flex flex-col sm:flex-row mb-4">
      <input
        type="text"
        className="flex-1 p-2 border rounded mb-2 sm:mb-0 sm:mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button
        onClick={handleAdd}
        className="w-full sm:w-auto pl-4 pr-4 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
