import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim()) {
      setTasks([...tasks, { text, completed: false }]);
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <h1 className="text-xl font-bold mb-4 text-center sm:text-2xl md:text-2xl">
        Tasks
      </h1>
      <TodoInput onAdd={addTask} />
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            onToggle={toggleTaskCompletion}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
