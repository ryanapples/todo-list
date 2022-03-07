import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 513px;
  width: 100%;
  margin-top: 10px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  border: none;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  margin-right: 8px;
`;

const StyledButton = styled.input`
  background-color: var(--fern-green);
  color: var(--bone-white);
  font-weight: 600;
  border: none;
  padding: 12px;
  min-width: 75px;
  border-radius: 5px;
`;

function TodoForm({ addToDo }) {
  // state - value of input
  // setValue - dispatch function to update
  // value state on input change
  // handle form data with component
  const [value, setValue] = useState('');

  // handle form submit
  function handleSubmit(e) {
    // prevents page refresh
    e.preventDefault();
    if (!value) return; // if no value, exit out
    addToDo(value); // lift up state to App 'addToDo' fxn
    setValue(''); // reset value to empty string on submit
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <StyledInput
          id="todo"
          type="text"
          placeholder="Add a todo item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <StyledButton type="submit" value="Submit" />
      </InputContainer>
    </Form>
  );
}

export default TodoForm;
