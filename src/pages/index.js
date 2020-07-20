import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigDate from '../components/BigDate/BigDate';
import Divider from '../components/Divider/Divider';

// ====

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Divider />
    <BigDate />
    <Divider />
  </Layout>
);

export default IndexPage;
