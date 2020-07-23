import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../../styles/styles.css';
import Header from '../Header/Header';
import Texture from '../Texture/Texture';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';

// ====

const Layout = ({ children, mask }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Hero mask={mask} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="spacing__homepage">{children}</main>
      <Footer />
      <Texture />
    </>
  );
};

export default Layout;

// ====

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mask: PropTypes.bool,
};

Layout.defaultProps = {
  mask: false,
};
