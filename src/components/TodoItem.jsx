import React from "react";

const TodoItem = ({ task, index, onToggle, onDelete }) => {
  return (
    <li className="flex flex-col sm:flex-row justify-between items-center mb-2 p-4 bg-white shadow-md rounded-md">
      <span
        className={`flex-1 text-center sm:text-left ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {task.text}
      </span>
      <div className="flex mt-2 sm:mt-0">
        {!task.completed && (
          <button
            onClick={() => onToggle(index)}
            className="p-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-600 text-white hover:bg-opacity-80 sm:mr-2"
          >
            Done
          </button>
        )}
        <button
          onClick={() => onDelete(index)}
          className="p-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
