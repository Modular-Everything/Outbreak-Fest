import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigDate from '../components/BigDate/BigDate';

// ====

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <BigDate />
  </Layout>
);

export default IndexPage;
