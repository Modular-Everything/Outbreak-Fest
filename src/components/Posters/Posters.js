import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

// ====

const Posters = () => {
  const DATA = useStaticQuery(graphql`
    query OutbreakHistory {
      allFile(
        filter: { relativeDirectory: { eq: "posters" }, name: { ne: "2020" } }
        sort: { fields: name, order: DESC }
      ) {
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

  const options = {
    settings: {},
    caption: {
      showCaption: false,
      disableKeyboardControls: true,
      disableWheelControls: true,
    },
    buttons: {
      showAutoplayButton: false,
      showCloseButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
    progressBar: {
      showProgressBar: false,
    },
  };

  return (
    <div className="container">
      <PostersWrap>
        <SimpleReactLightbox>
          {DATA.allFile.edges.map((edge) => (
            <SRLWrapper options={options}>
              <li>
                <Img fluid={edge.node.childImageSharp.fluid} alt="" />
              </li>
            </SRLWrapper>
          ))}
        </SimpleReactLightbox>
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
