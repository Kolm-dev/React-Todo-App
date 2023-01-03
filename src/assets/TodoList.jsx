import React from "react";
import "./styles/TodoList.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";
const TodoList = ({ setTodos, todos }) => {
  const iconSize = "small";
  const removeTodo = (text) => {
    setTodos(todos.filter((_, index) => index != text));
  };

  return (
    <div className="list">
      {todos.length > 0 ? (
        <>
          {todos.map((el, index) => (
            <div key={Math.random()} className="item">
              <div>
                <p className={`text`}>{el.toUpperCase()}</p>
              </div>
              <div>
                <TaskAltIcon
                  fontSize={iconSize}
                  className="complete"
                />
                <DeleteIcon
                  onClick={() => removeTodo(index)}
                  fontSize={iconSize}
                  className="delete"
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text message">Добавьте задачу в список дел...</p>
      )}
    </div>
  );
};

export default TodoList;
