import React from 'react';
import styled from 'styled-components';

// ====

const Footer = () => (
  <FooterWrap>
    <div className="container">
      <P>© {new Date().getFullYear()}</P>
    </div>
  </FooterWrap>
);

export default Footer;

// ====

const FooterWrap = styled.footer`
  margin: 4.5rem 0;
`;

const P = styled.p`
  font-size: 1.125;
  text-align: center;
  margin: 0;
  color: var(--light);

  & a {
    display: inline-block;
    margin-top: 1rem;
    color: var(--light);
  }
`;
