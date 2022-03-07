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
  width: 100vw;
`;

const TodoList = styled.div`
  background-color: var(--bone-white);
  border-radius: 7px;
  padding: 7px;
  max-width: 500px;
  min-height: 450px;
  width: 100%;
`;

// App component acts as main TodoList
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <TodoList>TodoList</TodoList>
      <TodoForm />
    </Wrapper>
  );
}

export default App;
