import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/Layout/Layout';
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
        filter: { relativeDirectory: { eq: "gallery/2012" } }
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
      <SEO title="2012" />
      <Divider />
      <BigCopy
        custom
        title="September 2012"
        subtitle="The Well"
        copy="Leeds, UK"
      />
      <Divider />
      <Gallery set={DATA} />
      <SocialMedia />
    </Layout>
  );
};

export default IndexPage;
