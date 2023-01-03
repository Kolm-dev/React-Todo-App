import "./App.css";
import React from "react";
import TodoForm from "./assets/TodoForm";
import TodoList from "./assets/TodoList";

const App = () => {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
