import React from 'react';
import styled from 'styled-components';

import '../styles/styles.css';
import OutbreakLogo from '../images/logo.png';
import SEO from '../components/SEO/SEO';

// ====

const IndexPage = () => (
  <Wrapper>
    <SEO title="Announcement Soon" />
    <Logo src={OutbreakLogo} alt="Outbreak Fest 2021" />
    <h2>Announcement soon</h2>
  </Wrapper>
);

export default IndexPage;

// ====

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & h2 {
    font-family: 'EurostileExt', 'Helvetica Neue', sans-serif;
    font-size: 1.13rem;
    text-transform: uppercase;
    margin-top: 0.3rem;
    color: var(--secondary);
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  mix-blend-mode: screen;
`;
