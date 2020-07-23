import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigDate from '../components/BigDate/BigDate';
import Divider from '../components/Divider/Divider';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import FAQ from '../components/FAQ/FAQ';

// ====

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Divider />
    <BigDate />
    <Divider />
    <FAQ />
    <SocialMedia />
  </Layout>
);

export default IndexPage;
