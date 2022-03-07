import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: var(--border-radius);
  list-style-type: none;
  padding: 12px;
  margin-bottom: 7px;
`;

const TodoText = styled.span`
  color: black;
  text-decoration: ${(props) => (props.isComplete ? 'line-through' : 'none')};
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius);
  width: 25px;
  height: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const EditButton = styled(Button)`
  width: auto;
  padding: 5px 15px;
  margin-right: 5px;
`;

const CompleteButton = styled(Button)`
  background-color: var(--fern-green);
  color: var(--white);
  margin-right: 5px;
`;

const DeleteButton = styled(Button)`
  background-color: red;
  color: var(--white);
`;

function Todo({ todo, index, handleEditTodo, completeToDo, deleteToDo }) {
  return (
    <ListItem>
      <TodoText isComplete={todo.isComplete}>{todo.item}</TodoText>
      <ButtonContainer>
        <EditButton
          type="button"
          disabled={todo.isComplete}
          handleEditTodo={index}
          onClick={() => handleEditTodo(index)}
        >
          Edit
        </EditButton>
        <CompleteButton type="button" onClick={() => completeToDo(index)}>
          ✓
        </CompleteButton>
        <DeleteButton type="button" onClick={() => deleteToDo(index)}>
          X
        </DeleteButton>
      </ButtonContainer>
    </ListItem>
  );
}

export default Todo;
