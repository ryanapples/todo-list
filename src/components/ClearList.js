import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

function ClearList({ clearAll }) {
  return (
    <Button type="button" onClick={clearAll}>
      Clear All
    </Button>
  );
}

export default ClearList;
