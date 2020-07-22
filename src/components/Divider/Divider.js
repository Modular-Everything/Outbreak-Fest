import React from 'react';
import styled from 'styled-components';

// ====

const Divider = () => {
  return <Dash />;
};

export default Divider;

// ====

const Dash = styled.hr`
  width: 100%;
  max-width: 38rem;
  height: 1px;
  border: 0;
  background-color: var(--light);
`;