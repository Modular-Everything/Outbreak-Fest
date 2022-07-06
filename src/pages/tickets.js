import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import SocialMedia from '../components/SocialMedia/SocialMedia';

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
      <Divider />
      <BigCopy />
      <SocialMedia />
    </Layout>
  );
};

export default IndexPage;
