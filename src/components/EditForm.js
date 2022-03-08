import React, { useRef } from 'react';
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

function EditForm({
  todoToEdit,
  setTodoToEdit,
  setIsEditingTodo,
  handleTodoUpdate,
}) {
  const inputRef = useRef();

  // handle edit form submit
  function handleSubmit(e) {
    e.preventDefault(); // prevent page refresh
    if (!inputRef.current.value) return; // if no value, exit out
    handleTodoUpdate(todoToEdit);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <StyledInput
          id="todo"
          type="text"
          placeholder="Update todo item"
          ref={inputRef}
          defaultValue={todoToEdit.item}
          onChange={(e) =>
            setTodoToEdit({ ...todoToEdit, item: e.target.value })
          }
        />
      </InputContainer>
      <ActionContainer>
        <UpdateButton type="submit" value="Update" />
        <CancelButton type="button" onClick={() => setIsEditingTodo(false)}>
          Cancel
        </CancelButton>
      </ActionContainer>
    </Form>
  );
}

export default EditForm;
