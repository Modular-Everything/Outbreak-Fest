import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import SocialMedia from '../components/SocialMedia/SocialMedia';

// ====

const PressPage = () => {
  if (typeof window !== `undefined`) {
    window.location.href = 'https://forms.gle/QtkRQrmpt6BgUgot8';
  }

  return (
    <Layout mask>
      <SEO title="Press" />
      <a href="https://forms.gle/QtkRQrmpt6BgUgot8">
        <BigCopy custom title="Redirecting..." />
      </a>
      <Divider />
      <BigCopy />
      <SocialMedia />
    </Layout>
  );
};

export default PressPage;
