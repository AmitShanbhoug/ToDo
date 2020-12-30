import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        id = "filled-Add a Task"
        variant="filled"
        label="Add a Task"
        placeholder=""
        margin="normal"
        onChange={onChange}
        value={value}

      />
    </form>
  );
};

export default TodoForm;
