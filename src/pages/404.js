import React, { useEffect } from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import SocialMedia from '../components/SocialMedia/SocialMedia';

// ====

const IndexPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.location = '/';
      }, [3000]);
    }
  }, []);

  return (
    <Layout>
      <SEO title="Page Not Found" />
      <Divider />
      <BigCopy
        custom
        copy="This page doesn't exist. Redirecting you in 3 seconds..."
      />
      <Divider />
      <SocialMedia />
    </Layout>
  );
};

export default IndexPage;
