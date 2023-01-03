import "./App.css";
import React from "react";
import TodoForm from "./assets/TodoForm";
import TodoList from "./assets/TodoList";

const App = () => {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  return (
    <div className="App">
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
