import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: var(--iris);
  color: var(--white);
  font-weight: 600;
  border: none;
  border-radius: var(--border-radius);
  width: 80px;
  height: 40px;
`;

function ClearList({ clearAll }) {
  return (
    <Button type="button" onClick={clearAll}>
      Clear All
    </Button>
  );
}

export default ClearList;
