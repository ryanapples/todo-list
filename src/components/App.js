import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import TodoForm from './TodoForm';
import Todo from './Todo';

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
  border-radius: 5px;
  padding: 10px 20px;
  max-width: 350px;
  width: 100%;
  min-height: 450px;
  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

const List = styled.ul`
  padding: 0;
`;

// App component acts as main TodoList
function App() {
  const [todos, setTodos] = useState([
    {
      item: 'Feed cats 🐱',
    },
    {
      item: 'Finish book',
    },
  ]);

  function addToDo(item) {
    console.log(item);
    setTodos([...todos, { item }]);
  }

  return (
    <Wrapper>
      <GlobalStyle />

      <TodoList>
        <Heading>Today's List</Heading>
        <TodoForm addToDo={addToDo} />
        <List>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </List>
      </TodoList>
    </Wrapper>
  );
}

export default App;
