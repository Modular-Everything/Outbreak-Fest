import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../../styles/styles.css';
import Header from '../Header/Header';
import Texture from '../Texture/Texture';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';

// ====

const Layout = ({ children }) => {
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
      <Hero />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
      <Texture />
    </>
  );
};

export default Layout;

// ====

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
