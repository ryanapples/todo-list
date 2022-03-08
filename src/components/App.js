import React, { useState } from 'react';

// styles
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

// components
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';
import ClearList from './ClearList';
import EditForm from './EditForm';

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
      id: 0,
    },
    {
      item: 'Finish book',
      isComplete: false,
      id: 1,
    },
  ]);
  const [isEditingTodo, setIsEditingTodo] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState({});

  function addToDo(item, id) {
    // spread operator to ensure immutability
    // of state object
    setTodos([...todos, { item, isComplete: false, id: id }]);
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
    setIsEditingTodo(false);
  }

  function handleEditTodo(index) {
    setIsEditingTodo(true);
    setTodoToEdit(todos[index]);
  }

  function handleTodoUpdate(updatedTodo) {
    const updatedTodos = todos.map((todo) => {
      return todo.id === updatedTodo.id ? updatedTodo : todo;
    });
    setIsEditingTodo(false);
    setTodos(updatedTodos);
  }

  return (
    <Wrapper>
      <GlobalStyle />

      <TodoList>
        <Heading>Today's List</Heading>
        {isEditingTodo ? (
          <EditForm
            todoToEdit={todoToEdit}
            setTodoToEdit={setTodoToEdit}
            setIsEditingTodo={setIsEditingTodo}
            handleTodoUpdate={handleTodoUpdate}
          />
        ) : (
          <AddTodoForm addToDo={addToDo} todosCount={todos.length} />
        )}
        {todos.length ? (
          <ListContainer>
            <List>
              {todos.map((todo, index) => (
                <TodoItem
                  key={index}
                  index={index}
                  todo={todo}
                  handleEditTodo={handleEditTodo}
                  completeToDo={completeToDo}
                  deleteToDo={deleteToDo}
                  isEditingTodo={isEditingTodo}
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
