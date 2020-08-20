import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import OutbreakLogo from '../../images/logo.png';

// ====

const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false);

  return (
    <HeaderWrap>
      <div className="container">
        <Navigation role="navigation" open={menu}>
          <MobileNav>
            <Link to="/">
              <img src={OutbreakLogo} alt={siteTitle} />
            </Link>
            <button type="button" onClick={() => setMenu(true)}>
              <svg viewBox="0 0 100 80" width="32" height="32" fill="#fff">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </button>
          </MobileNav>

          <ul>
            <li>
              <Link partiallyActive activeClassName="active" to="/lineup">
                Line-up
              </Link>
            </li>
            <li>
              <Link partiallyActive activeClassName="active" to="/history">
                History
              </Link>
            </li>
            <li>
              <Link to="/">
                <Logo>
                  <img src={OutbreakLogo} alt={siteTitle} />
                </Logo>
              </Link>
            </li>
            <li>
              <a href="https://outbreak.seetickets.com/">Tickets</a>
            </li>
            <li>
              <Link partiallyActive activeClassName="active" to="/info">
                Info
              </Link>
            </li>
            <li>
              <button type="button" onClick={() => setMenu(false)}>
                X
              </button>
            </li>
          </ul>
        </Navigation>
      </div>
    </HeaderWrap>
  );
};

export default Header;

// ====

const HeaderWrap = styled.header`
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    margin-bottom: 4.5rem;
  }
`;

// ====

const Navigation = styled.nav`
  & ul {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    display: ${({ open }) => (open ? `flex` : `none`)};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-color: var(--primary);
    list-style: none;

    @media (min-width: 1024px) {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr 300px 1fr 1fr;
      grid-gap: 3rem;
      width: unset;
      height: unset;
    }

    & li:nth-of-type(3) {
      display: none;

      @media (min-width: 1024px) {
        display: unset;
      }
    }
  }

  & li a,
  & li button {
    font-family: 'EurostileExt', var(--font-family-sans-serif);
    font-size: 10vw;
    font-weight: 900;
    text-transform: uppercase;
    border: 0;
    background: transparent;
    color: var(--light);
    cursor: pointer;
    text-decoration: none;

    @media (min-width: 1024px) {
      font-size: 18px;
      font-size: 1.125rem;
    }

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
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      margin-bottom: 0;
    }
  }

  & li:nth-of-type(1),
  & li:nth-of-type(2) {
    justify-content: flex-end;
  }

  & li:nth-of-type(3),
  & li:nth-of-type(4) {
    justify-content: flex-start;
  }

  & li:last-of-type {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const Logo = styled.div`
  & img {
    width: 100%;
    mix-blend-mode: screen;
  }
`;

const MobileNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    display: none;
  }

  & button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  & img {
    width: 100%;
    max-width: 200px;
    mix-blend-mode: screen;
  }
`;

// ====

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
