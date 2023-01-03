import React from "react";
import "./styles/TodoList.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";
const TodoList = () => {
  const iconSize = "small";
  return (
    <div className="list">
      <div className="item">
        <div>
          <p className="text">
            <span className="number">1.</span>Написать Todo
          </p>
        </div>
        <div>
          <TaskAltIcon className="complete" fontSize={iconSize} />
          <DeleteIcon className="delete" fontSize={iconSize} />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
