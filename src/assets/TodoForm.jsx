import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./styles/TodoForm.css";
import { TextField, Button } from "@mui/material";
const TodoForm = ({ todos, setTodos, todo, setTodo }) => {
  return (
    <div className="form">
      <form autoComplete="off">
        <TextField
          sx={{ mr: 2 }}
          id="standard-basic"
          variant="standard"
          value={todo}
          placeholder="Какие у вас планы?.."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button
          style={{ opacity: 100 }}
          size="small"
          startIcon={<AddCircleIcon />}
          variant="contained"
          color="inherit"
          type="submit"
          onClick={(e) => {
            setTodo("");

            e.preventDefault();
            if (todo.trim() !== "") {
              setTodos([...todos, todo]);
            }
          }}
        >
          Добавить задачу
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
