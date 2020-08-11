import React from 'react';
import styled from 'styled-components';

// ====

const LargeCopy = ({ children }) => (
  <div class="container">
    <Copy>{children}</Copy>
  </div>
);

export default LargeCopy;

// ====

const Copy = styled.section`
  & ol {
    font-size: 1.125rem;
    color: var(--light);
    list-style: decimal;

    & li {
      margin-bottom: 1rem;
    }
  }
`;
