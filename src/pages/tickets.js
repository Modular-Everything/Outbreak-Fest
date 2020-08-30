import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import SocialMedia from '../components/SocialMedia/SocialMedia';

// ====

const IndexPage = () => (
  <Layout mask>
    <SEO title="Home" />
    <BigCopy custom title="Tickets on sale Wednesday 9am" />
    <Divider />
    <BigCopy />
    <SocialMedia />
  </Layout>
);

export default IndexPage;
