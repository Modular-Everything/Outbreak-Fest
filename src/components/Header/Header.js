import React from 'react';
// import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// ====

const Header = ({ siteTitle }) => <header>{siteTitle}</header>;

export default Header;

// ====

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
