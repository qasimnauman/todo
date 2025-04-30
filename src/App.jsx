// import { useState } from "react";
import React from "react";
import TodoApp from "./components/TodoApp";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="mt-10 text-2xl font-bold mb-4 text-center sm:text-3xl md:text-4xl">
        Todo App
      </h1>
      <TodoApp />
    </div>
  );
};

export default App;
