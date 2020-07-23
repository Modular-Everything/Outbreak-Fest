import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import OutbreakLogo from '../../images/logo.png';

// ====

const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: `4.5rem` }}>
    <div className="container">
      <Navigation role="navigation">
        <ul>
          <li>
            <Link activeClassName="active" to="/lineup">
              Line-up
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/history">
              History
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/">
              <Logo src={OutbreakLogo} alt={siteTitle} />
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/tickets">
              Tickets
            </Link>
          </li>
          <li>
            <Link activeClassName="active" to="/info">
              Info
            </Link>
          </li>
        </ul>
      </Navigation>
    </div>
  </header>
);

export default Header;

// ====

const Navigation = styled.nav`
  & ul {
    display: grid;
    grid-template-columns: 1fr 1fr 300px 1fr 1fr;
    grid-gap: 3rem;
    margin: 0;
    list-style: none;
  }

  & a {
    font-family: 'EurostileExt', var(--font-family-sans-serif);
    font-weight: 900;
    text-transform: uppercase;
    color: var(--light);
    text-decoration: none;

    &:hover {
      color: var(--secondary);
    }

    &.active {
      color: var(--secondary);

      &:hover {
        color: var(--dark);
      }
    }
  }

  & li {
    display: flex;
    align-items: center;
  }

  & li:nth-of-type(1),
  & li:nth-of-type(2) {
    justify-content: flex-end;
  }

  & li:nth-of-type(3),
  & li:nth-of-type(4) {
    justify-content: flex-start;
  }
`;

const Logo = styled.img`
  width: 100%;
  mix-blend-mode: screen;
`;

// ====

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
