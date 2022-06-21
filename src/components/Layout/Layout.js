import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.css';
import Texture from '../Texture/Texture';
import Rips from '../Rips/Rips';

// ====

const Layout = ({ children }) => {
  return (
    <>
      <Rips hideTop />
      <main className="spacing__homepage">{children}</main>
      <Texture />
    </>
  );
};

export default Layout;

// ====

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
