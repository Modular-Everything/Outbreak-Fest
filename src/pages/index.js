import React from 'react';

import Layout from '../components/Layout/Layout';
import Image from '../components/Image/Image';
import SEO from '../components/SEO/SEO';

// ====

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
