import React from 'react';
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
  padding: 10px;
  border-radius: 7px;
  margin-right: 7px;
`;

const StyledButton = styled.input`
  background-color: var(--fern-green);
  color: var(--bone-white);
  font-weight: 600;
  border: none;
  padding: 10px 25px;
  min-width: 100px;
  border-radius: 7px;
`;

function TodoForm() {
  return (
    <Form>
      <InputContainer>
        <StyledInput id="todo" type="text" placeholder="Add a todo item" />
        <StyledButton type="submit" value="Submit" />
      </InputContainer>
    </Form>
  );
}

export default TodoForm;
