import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import TodoForm from './TodoForm';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
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
`;

// App component acts as main TodoList
function App() {
  return (
    <Wrapper>
      <GlobalStyle />

      <TodoList>
        <Heading>Today's List</Heading>
        <TodoForm />
      </TodoList>
    </Wrapper>
  );
}

export default App;
