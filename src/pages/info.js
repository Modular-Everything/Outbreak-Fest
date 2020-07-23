import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import FAQ from '../components/FAQ/FAQ';

// ====

const IndexPage = () => (
  <Layout mask>
    <SEO title="Home" />
    <Divider />
    <BigCopy />
    <Divider />
    <FAQ />
    <SocialMedia />
  </Layout>
);

export default IndexPage;
