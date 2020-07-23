import React from 'react';
import styled from 'styled-components';

// ====

const Footer = () => {
  return (
    <FooterWrap>
      <div className="container">
        <P>© {new Date().getFullYear()}</P>
      </div>
    </FooterWrap>
  );
};

export default Footer;

// ====

const FooterWrap = styled.footer`
  margin-bottom: 4.5rem;
`;

const P = styled.p`
  font-size: 1.125;
  text-align: center;
  margin: 0;
  color: var(--light);
`;
