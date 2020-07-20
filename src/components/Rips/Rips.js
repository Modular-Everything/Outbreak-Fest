import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RipImg from '../../images/rips.png';

// ====

const Rips = ({ children }) => {
  return (
    <>
      <Rip BgSrc={RipImg} />
      {children && <Content>{children}</Content>}
      <Rip BgSrc={RipImg} flip />
    </>
  );
};

export default Rips;

// ====

const Rip = styled.div`
  width: 100%;
  height: 5rem;
  background-image: url(${({ BgSrc }) => BgSrc});
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 40%;
  transform: ${({ flip }) => (flip ? `rotate(180deg)` : `none`)};
`;

const Content = styled.section`
  background-color: #fff;
`;

// ====

Rips.propTypes = {
  children: PropTypes.node,
};

Rips.defaultProps = {
  children: null,
};
