import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BigCopy from '../components/BigCopy/BigCopy';
import Divider from '../components/Divider/Divider';
import Poster from '../components/Poster/Poster';
import SocialMedia from '../components/SocialMedia/SocialMedia';

// ====

const IndexPage = () => {
  const DATA = useStaticQuery(graphql`
    query Posters2022 {
      allFile(
        filter: { name: { regex: "/2022/" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

  return (
    <Layout mask>
      <SEO title="Home" />

      <Divider />
      {DATA.allFile.nodes.map(poster => (
        <Poster key={poster.id} poster={poster.childImageSharp.fluid} />
      ))}
      <Divider />
      <BigCopy />
      <SocialMedia />
    </Layout>
  );
};

export default IndexPage;
