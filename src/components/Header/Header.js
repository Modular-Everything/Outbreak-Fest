import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import OutbreakLogo from '../../images/logo.png';

// ====

const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false);
  return (
    <HeaderWrap>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-82116769-4"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'UA-82116769-4');
          `}
        </script>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '957464368067937');
            fbq('track', 'PageView');
            `}
        </script>
        <noscript>
          {`
            <img
              height="1"
              width="1"
              alt=""
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=957464368067937&ev=PageView&noscript=1"
            />
          `}
        </noscript>
      </Helmet>

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
              <Link to="/">
                <Logo>
                  <img src={OutbreakLogo} alt={siteTitle} />
                </Logo>
              </Link>
            </li>
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
              <a href="https://outbreak.seetickets.com/tour/outbreak-fest-2022">
                Tickets
              </a>
            </li>
            <li>
              <Link
                partiallyActive
                activeClassName="active"
                to="/officialresale"
              >
                Official Resale
              </Link>
            </li>
            <li>
              <Link partiallyActive activeClassName="active" to="/press">
                Press
              </Link>
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
    text-align: center;

    @media (min-width: 1024px) {
      position: relative;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
      grid-gap: 3rem;
      width: unset;
      height: unset;
    }
  }

  & li {
    justify-content: center;
  }

  & li a,
  & li button {
    font-family: 'EurostileExt', var(--font-family-sans-serif);
    font-size: 7vw;
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

  & li:last-of-type {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const Logo = styled.div`
  & img {
    width: 100%;
    max-width: 18rem;
    mix-blend-mode: screen;
    margin-bottom: 1.6rem;

    @media (min-width: 1024px) {
      margin-bottom: 0;
    }
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
