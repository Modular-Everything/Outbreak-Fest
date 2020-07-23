import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigDate from '../components/BigDate/BigDate';
import Divider from '../components/Divider/Divider';
import Poster from '../components/Poster/Poster';
import SocialMedia from '../components/SocialMedia/SocialMedia';

// ====

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Divider />
    <BigDate />
    <Divider />
    <Poster />
    <SocialMedia />
  </Layout>
);

export default IndexPage;
