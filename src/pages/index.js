import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigDate from '../components/BigDate/BigDate';
import Divider from '../components/Divider/Divider';
import Video from '../components/Video/Video';

// ====

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Divider />
    <BigDate />
    <Divider />
    <Video videoId="4auoaq1XmWQ" />
  </Layout>
);

export default IndexPage;
