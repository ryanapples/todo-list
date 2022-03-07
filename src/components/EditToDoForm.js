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
  font-size: 14px;
  border-radius: var(--border-radius);
  margin-right: 8px;
`;

const ActionContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const UpdateButton = styled.input`
  background-color: var(--fern-green);
  color: var(--bone-white);
  border: none;
  font-weight: 600;
  padding: 12px;
  margin-right: 5px;
  min-width: 60px;
  flex-basis: 50%;
  border-radius: var(--border-radius);
  &:hover {
    cursor: pointer;
  }
`;

const CancelButton = styled.button`
  background-color: red;
  color: var(--bone-white);
  font-weight: 600;
  padding: 12px;
  min-width: 60px;
  border: none;
  border-radius: var(--border-radius);
  flex-basis: 50%;
  &:hover {
    cursor: pointer;
  }
`;

function EditTodoForm({ addEditToDo, cancelEditTodo }) {
  // state - value of input
  // setValue - dispatch function to update
  // value state on input change
  // handle form data with component
  const [value, setValue] = useState('');

  // handle form submit
  function handleEditSubmit(e) {
    // prevents page refresh
    e.preventDefault();
    if (!value) return; // if no value, exit out
    addEditToDo(value); // fxn in App component
    setValue(''); // reset value to empty string on submit
  }

  function handleCancel() {}

  return (
    <Form onSubmit={handleEditSubmit}>
      <InputContainer>
        <StyledInput
          id="todo"
          type="text"
          placeholder="Update todo item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputContainer>
      <ActionContainer>
        <UpdateButton type="submit" value="Update" />
        <CancelButton onClick={cancelEditTodo}>Cancel</CancelButton>
      </ActionContainer>
    </Form>
  );
}

export default EditTodoForm;
