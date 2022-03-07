import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: 40px;
  color: var(--bone-white);
  margin-bottom: 24px;
`;

function Header() {
  return <StyledHeader>Todo List</StyledHeader>;
}

export default Header;
