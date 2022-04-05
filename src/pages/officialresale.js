import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import SocialMedia from '../components/SocialMedia/SocialMedia';

// ====

const ResalePage = () => {
  if (typeof window !== `undefined`) {
    window.location.href = 'http://outbreakfest.twickets.live/';
  }

  return (
    <Layout mask>
      <SEO title="Official Resale" />
      <a href="http://outbreakfest.twickets.live/">
        <BigCopy custom title="Redirecting..." />
      </a>
      <Divider />
      <BigCopy />
      <SocialMedia />
    </Layout>
  );
};

export default ResalePage;
