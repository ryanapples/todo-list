import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 513px;
  width: 100%;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 7px;
`;

const StyledButton = styled.input`
  margin-top: 5px;
  border: none;
  padding: 10px 25px;
  min-width: 120px;
  border-radius: 7px;
`;

function TodoForm() {
  return (
    <Form>
      <StyledInput id="todo" type="text" placeholder="Add a todo item" />
      <StyledButton type="submit" value="Submit" />
    </Form>
  );
}

export default TodoForm;
