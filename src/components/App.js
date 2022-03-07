import React, { useState } from 'react';

// styles
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

// components
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';
import ClearList from './ClearList';
import EditTodoForm from './EditToDoForm';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
`;

const Heading = styled.h1`
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 10px;
  width: 100%;
  margin: 0 auto;
`;

const TodoList = styled.div`
  background-color: var(--bone-white);
  border-radius: var(--border-radius);
  position: relative;
  padding: 10px 20px;
  max-width: 350px;
  width: 100%;
  min-height: 450px;
  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const List = styled.ul`
  padding: 0;
  width: 100%;
  height: 290px;
  overflow: auto;
  box-sizing: content-box;
  &:hover {
    overflow-y: scroll;
  }
  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 15px 25px;
  text-align: center;
`;

// App component acts as main TodoList
function App() {
  const [todos, setTodos] = useState([
    {
      item: 'Feed cats 🐱',
      isComplete: false,
    },
    {
      item: 'Finish book',
      isComplete: false,
    },
  ]);
  const [isEditingTodo, setIsEditingTodo] = useState(false);

  function addToDo(item) {
    // spread operator to ensure immutability
    // of state object
    setTodos([...todos, { item, isComplete: false }]);
  }

  function completeToDo(index) {
    // on complete button click
    // update todo isComplete state
    // to TRUE
    const todosCopy = [...todos];
    !todosCopy[index].isComplete
      ? (todosCopy[index].isComplete = true)
      : (todosCopy[index].isComplete = false);
    setTodos(todosCopy);
  }

  function deleteToDo(index) {
    // state immutibility
    // create new copy of todo list
    // and update
    const todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos([...todosCopy]);
  }

  function clearTodos() {
    setTodos([]);
  }

  function editTodo(index) {
    console.log('editTodo trigger', index);
    setIsEditingTodo(true);
  }

  function cancelEditTodo() {
    setIsEditingTodo(false);
  }

  return (
    <Wrapper>
      <GlobalStyle />

      <TodoList>
        <Heading>Today's List</Heading>
        {isEditingTodo ? (
          <EditTodoForm cancelEditTodo={cancelEditTodo} />
        ) : (
          <AddTodoForm addToDo={addToDo} />
        )}
        {todos.length ? (
          <ListContainer>
            <List>
              {todos.map((todo, index) => (
                <TodoItem
                  key={index}
                  index={index}
                  todo={todo}
                  editToDo={editTodo}
                  completeToDo={completeToDo}
                  deleteToDo={deleteToDo}
                />
              ))}
            </List>
          </ListContainer>
        ) : (
          <Paragraph>You have {todos.length} pending tasks</Paragraph>
        )}
        {todos.length ? <ClearList clearTodos={clearTodos} /> : null}
      </TodoList>
    </Wrapper>
  );
}

export default App;
