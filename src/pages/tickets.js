import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';

// ====

const IndexPage = () => {
  if (typeof window !== `undefined`) {
    window.location.href = 'https://outbreak.seetickets.com/';
  }

  return (
    <Layout mask>
      <SEO title="Home" />
      <a href="https://outbreak.seetickets.com/">
        <BigCopy custom title="Redirecting..." />
      </a>
    </Layout>
  );
};

export default IndexPage;
