import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/styles.css';
import Texture from '../Texture/Texture';

// ====

const Layout = ({ children }) => {
  return (
    <>
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
