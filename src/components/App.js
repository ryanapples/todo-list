import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Header from './Header';
import TodoForm from './TodoForm';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-width: 450px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 40px;
  color: var(--bone-white);
  margin-top: 0;
  margin-bottom: 10px;
  width: 100%;
`;

const TodoList = styled.div`
  background-color: var(--bone-white);
  border-radius: 10px;
  padding: 7px;
  min-height: 450px;
  width: 100%;
`;

// App component acts as main TodoList
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Heading>Today's List</Heading>
      <TodoList>
        <TodoForm />
      </TodoList>
    </Wrapper>
  );
}

export default App;
