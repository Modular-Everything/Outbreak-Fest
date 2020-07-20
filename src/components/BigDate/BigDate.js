import React from 'react';
import styled from 'styled-components';

// ====

const BigDate = () => {
  return (
    <BigDateWrap>
      <Date>Friday 25-Sunday 27 June 2021</Date>
      <address>
        <Venue>Bowlers Exhibition Centre</Venue>
        <Location>Manchester, UK</Location>
      </address>
    </BigDateWrap>
  );
};

export default BigDate;

// ====

const BigDateWrap = styled.section`
  text-align: center;

  & p {
    font-size: 2.5rem;
    line-height: 1.1;
    font-style: normal;
    text-transform: uppercase;
    margin: 0;
  }
`;

const Date = styled.p`
  font-family: 'EurostileExt', var(--font-family-sans-serif);
  font-weight: bold;
  color: var(--secondary);
`;

const Venue = styled.p`
  font-family: 'EurostileExt', var(--font-family-sans-serif);
  color: var(--light);
`;

const Location = styled.p`
  font-family: 'EurostileExt', var(--font-family-sans-serif);
  font-weight: bold;
  color: var(--light);
`;
