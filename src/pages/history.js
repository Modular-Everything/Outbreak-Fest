import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import Posters from '../components/Posters/Posters';
import SocialMedia from '../components/SocialMedia/SocialMedia';

// ====

const IndexPage = () => (
  <Layout mask>
    <SEO title="History" />
    <Divider />
    <BigCopy />
    <Divider />
    <Posters />
    <SocialMedia />
  </Layout>
);

export default IndexPage;
