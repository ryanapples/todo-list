import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  background-color: var(--white);
  list-style-type: none;
  padding: 12px;
  margin-bottom: 7px;
`;

function Todo({ todo }) {
  return <ListItem>{todo.item}</ListItem>;
}

export default Todo;
