import React from 'react';
import styled from 'styled-components';

// ====

const LargeCopy = ({ children }) => (
  <div className="container">
    <Copy>{children}</Copy>
  </div>
);

export default LargeCopy;

// ====

const Copy = styled.section`
  & h2 {
    font-family: 'EurostileExt', Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    color: var(--light);
  }

  & a {
    color: var(--light);
  }

  & ol {
    font-size: 1.125rem;
    color: var(--light);
    list-style: decimal;

    & li {
      margin-bottom: 1rem;
    }
  }
`;
