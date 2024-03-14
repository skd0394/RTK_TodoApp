// TodoList.js
import React from "react";
import { useDeleteTodoMutation, useGetTodosQuery, useToggleTodoMutation } from "../features/todoApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, List, ListItem, ListItemText } from "@mui/material";

const TodoList = () => {
  const { data: todos, isLoading } = useGetTodosQuery();
  const [deleteTodo]=useDeleteTodoMutation()
  const [toggleTodo]=useToggleTodoMutation()
  console.log(todos);

  const handleDelete=(id)=>{
    console.log(id)
    deleteTodo(id)
  }

  const handleToggleTodo = (todo) => {
      toggleTodo(todo)
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          button
          onClick={() => handleToggleTodo(todo)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <ListItemText primary={todo.text} />
          <Button onClick={()=>handleDelete(todo._id)} variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
