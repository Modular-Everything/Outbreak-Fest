import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

// ====

const BigDate = () => {
  const DATA = useStaticQuery(graphql`
    query OutbreakPoster {
      file(name: { eq: "poster_2020" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className="container">
      <PosterWrap>
        <Img
          fluid={DATA.file.childImageSharp.fluid}
          alt="Outbreak Fest 2021 Lineup Poster"
        />
      </PosterWrap>
    </div>
  );
};

export default BigDate;

// ====

const PosterWrap = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  box-shadow: 0px 0px 24px rgba(29, 32, 37, 0.15);

  & img {
    width: 100%;
  }
`;
