import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

// ====

const Posters = () => {
  const DATA = useStaticQuery(graphql`
    query OutbreakHistory {
      allFile(
        filter: { relativeDirectory: { eq: "posters" }, name: { ne: "2021" } }
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
    <div className="container">
      <PostersWrap>
        {DATA.allFile.edges.map(edge => {
          return (
            <li>
              <Img fluid={edge.node.childImageSharp.fluid} alt="" />
            </li>
          );
        })}
      </PostersWrap>
    </div>
  );
};

export default Posters;

// ====

const PostersWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  a {
    position: relative;
    display: block;

    .overlay {
      position: absolute;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.85);
      color: var(--light);
      transition: opacity 0.25s ease;
    }

    &:hover {
      .overlay {
        opacity: 1;
      }
    }
  }

  & li {
    padding: 1rem;
    background-color: var(--light);

    img {
      width: 100%;
    }
  }
`;
