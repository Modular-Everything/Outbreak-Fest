import React from 'react';

import Layout from '../../components/Layout/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../../components/SEO/SEO';
import BigCopy from '../../components/BigCopy/BigCopy';
import Divider from '../../components/Divider/Divider';
import Gallery from '../../components/Gallery/Gallery';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

// ====

const IndexPage = () => {
  const DATA = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { eq: "gallery/2014" } }
        sort: { fields: name, order: DESC }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout mask>
      <SEO title="2014" />
      <Divider />
      <BigCopy custom title="April 2014" subtitle="The Vox" copy="Leeds, UK" />
      <Divider />
      <Gallery set={DATA} />
      <SocialMedia />
    </Layout>
  );
};

export default IndexPage;
