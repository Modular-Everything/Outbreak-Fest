import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RipImg from '../../images/rips.png';

// ====

const Rips = ({ children, hideTop }) => {
  return (
    <>
      {!hideTop && <Rip BgSrc={RipImg} />}
      {children && <Content>{children}</Content>}
      <Rip BgSrc={RipImg} flip />
    </>
  );
};

export default Rips;

// ====

const Rip = styled.div`
  width: 100%;
  height: 2.5rem;
  background-image: url(${({ BgSrc }) => BgSrc});
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 40%;
  transform: ${({ flip }) => (flip ? `rotate(180deg)` : `none`)};

  @media (min-width: 640px) {
    height: 6rem;
  }
`;

const Content = styled.section`
  padding: 2.25rem 0;
  background-color: #fff;
`;

// ====

Rips.propTypes = {
  children: PropTypes.node,
  hideTop: PropTypes.bool,
};

Rips.defaultProps = {
  children: null,
  hideTop: false,
};
