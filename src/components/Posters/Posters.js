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
              <Link to={`/history/${edge.node.name}`}>
                <Img fluid={edge.node.childImageSharp.fluid} alt="" />
              </Link>
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  & li {
    padding: 1rem;
    background-color: var(--light);
    transition: opacity 0.25s ease;

    &:hover {
      opacity: 0.5;
    }

    img {
      width: 100%;
      cursor: pointer;
    }
  }
`;
