import React from 'react';
import styled from 'styled-components';

// ====

const LargeCopy = ({ children, cursor, onClick, expand }) => (
  <div
    className="container"
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={0}
  >
    <Copy cursor={cursor} expand={expand}>
      {children}
    </Copy>
  </div>
);

export default LargeCopy;

// ====

const Copy = styled.section`
  & h2 {
    position: relative;
    font-family: 'EurostileExt', Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    color: var(--light);

    ${({ cursor }) => cursor && `cursor: pointer;`}
    ${({ expand }) =>
      expand &&
      ` 
        &::after {
          content: 'Click to view ↓';
          font-size: 12px;
          display: block;
        };
      `}
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
