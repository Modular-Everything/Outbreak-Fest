import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

// ====

const Hero = () => {
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
    <HeroWrap>
      <HeroImages>
        {DATA.allFile.edges.map(node => (
          <li>
            <Img fluid={node.node.childImageSharp.fluid} alt="" />
          </li>
        ))}
      </HeroImages>
    </HeroWrap>
  );
};

export default Hero;

// ====

const HeroWrap = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -10.25rem;
  pointer-events: none;
`;

const HeroImages = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  width: 100vw;
  padding: 0;
  margin: 0;
  list-style: none;

  & li:last-of-type {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    & li:last-of-type {
      display: unset;
    }
  }

  & li img {
    width: 100%;
    mix-blend-mode: screen;
  }
`;

const RipDivide = styled.div`
  position: relative;
  top: -4rem;
`;
