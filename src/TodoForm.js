import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import "./TodoForm.css";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form className = "form"
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
