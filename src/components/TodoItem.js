import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
  list-style-type: none;
  padding: 15px 10px;
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
  -webkit-border-radius: var(--border-radius);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const EditButton = styled(Button)`
  width: auto;
  padding: 5px 15px;
  margin-right: 8px;
`;

const CompleteButton = styled(Button)`
  background-color: var(--fern-green);
  color: var(--white);
  margin-right: 8px;
`;

const DeleteButton = styled(Button)`
  background-color: red;
  color: var(--white);
`;

function TodoItem({
  todo,
  index,
  handleEditTodo,
  handleCompleteToDo,
  handleDeleteToDo,
  isEditingTodo,
}) {
  return (
    <ListItem>
      <TodoText isComplete={todo.isComplete}>{todo.item}</TodoText>
      {!isEditingTodo ? (
        <ButtonContainer>
          <EditButton
            type="button"
            disabled={todo.isComplete}
            handleEditTodo={index}
            onClick={() => handleEditTodo(index)}
          >
            Edit
          </EditButton>
          <CompleteButton
            type="button"
            onClick={() => handleCompleteToDo(index)}
          >
            ✓
          </CompleteButton>
          <DeleteButton type="button" onClick={() => handleDeleteToDo(index)}>
            ✕
          </DeleteButton>
        </ButtonContainer>
      ) : null}
    </ListItem>
  );
}

export default TodoItem;
