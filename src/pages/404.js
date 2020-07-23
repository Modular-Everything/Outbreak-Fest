import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import SocialMedia from '../components/SocialMedia/SocialMedia';

// ====

const IndexPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <Divider />
    <BigCopy
      custom
      title="Oh shit"
      subtitle="Someone fucked up"
      copy="This page doesn't exist"
    />
    <Divider />
    <SocialMedia />
  </Layout>
);

export default IndexPage;
