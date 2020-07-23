import React from 'react';
import styled from 'styled-components';

// ====

const Divider = () => {
  return (
    <div className="container">
      <Dash />
    </div>
  );
};

export default Divider;

// ====

const Dash = styled.hr`
  width: 100%;
  max-width: 38rem;
  height: 1px;
  margin: 0 auto;
  border: 0;
  background-color: var(--light);
`;
