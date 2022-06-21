import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import { Link } from 'gatsby';

// ====

const BigCopy = ({ custom, title, subtitle, copy }) => {
  if (custom) {
    return (
      <div className="container">
        <BigCopyWrap>
          {title && <DateWrap>{title}</DateWrap>}
          {subtitle && <Venue>{subtitle}</Venue>}
          {copy && <Location>{copy}</Location>}
        </BigCopyWrap>
      </div>
    );
  }

  const EVENT_DATE = new Date('June 21, 2022');

  const renderer = ({ days, hours, completed }) => {
    if (completed || hours > 20) {
      return (
        <Venue style={{ marginBottom: '4rem' }}>
          <span style={{ color: 'var(--secondary)' }}>See you at the fest</span>
          <br />
          <br />
          Check the <Link to="/info">FAQ</Link> for more info
        </Venue>
      );
    }
    return (
      <Venue style={{ marginBottom: '2rem' }}>
        <span style={{ color: 'var(--secondary)' }}>{days}</span>{' '}
        {days <= 1 ? 'day' : 'days'} to go
      </Venue>
    );
  };

  return (
    <div className="container">
      <BigCopyWrap>
        <Countdown date={EVENT_DATE} renderer={renderer} />

        <DateWrap>Friday 24 - Sunday 26 June 2022</DateWrap>
        <address>
          <Venue>Bowlers Exhibition Centre</Venue>
          <Location>Manchester, UK</Location>
        </address>
      </BigCopyWrap>
    </div>
  );
};

export default BigCopy;

// ====

const BigCopyWrap = styled.section`
  text-align: center;

  & p {
    font-size: 1.6rem;
    line-height: 1.2;
    font-style: normal;
    text-transform: uppercase;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 1.1;
    }

    @media (min-width: 1024px) {
      font-size: 2.5rem;
      line-height: 1.1;
    }
  }

  & a {
    color: var(--secondary);
    text-decoration: underline;
  }
`;

const DateWrap = styled.p`
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

// ====

BigCopy.propTypes = {
  custom: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  copy: PropTypes.string,
};

BigCopy.defaultProps = {
  custom: false,
  title: null,
  subtitle: null,
  copy: null,
};
