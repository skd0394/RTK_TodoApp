import React, { useState } from "react";
import { useAddTodoMutation } from "../features/todoApi";
import { TextField, Button, Grid } from "@mui/material";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [addTodo] = useAddTodoMutation();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      addTodo({ text ,completed:false});
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            label="Add Todo"
            variant="outlined"
            fullWidth
            value={text}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoForm;
