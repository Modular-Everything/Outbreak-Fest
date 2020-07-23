import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Rips from '../Rips/Rips';

// ====

const Hero = ({ mask }) => {
  const DATA = useStaticQuery(graphql`
    query HeroImagesQ {
      allFile(limit: 3, filter: { name: { glob: "brand-image_*" } }) {
        edges {
          node {
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
    <HeroWrap mask={mask}>
      <HeroImages>
        {DATA.allFile.edges.map((node) => {
          return (
            <li>
              <Img fluid={node.node.childImageSharp.fluid} alt="" />
            </li>
          );
        })}
      </HeroImages>

      <RipDivide>
        <Rips />
      </RipDivide>
    </HeroWrap>
  );
};

export default Hero;

// ====

const HeroWrap = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: ${({ mask }) => mask && `-40vh`};
`;

const HeroImages = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  width: calc(100vw - 1.5rem * 2);
  padding: 0;
  margin: 0 1.5rem;
  list-style: none;

  & li img {
    width: 100%;
    mix-blend-mode: screen;
  }
`;

const RipDivide = styled.div`
  position: relative;
  top: -4rem;
`;
