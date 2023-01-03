import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TextField, Button } from "@mui/material";
const TodoForm = () => {
  return (
    <div className="form">
      <form autoComplete="off">
        <TextField
          sx={{ mr: 2 }}
          id="standard-basic"
          variant="standard"
          placeholder="Какие у вас планы?.."
        />
        <Button
          size="small"
          startIcon={<AddCircleIcon />}
          variant="contained"
          type="submit"
        >
          Добавить задачу
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
