import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

// ====

const BigCopy = () => {
  const DATA = useStaticQuery(graphql`
    query OutbreakPoster {
      file(name: { eq: "2022" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
      <PosterWrap>
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <Img
              fluid={DATA.file.childImageSharp.fluid}
              alt="Outbreak Fest 2021 Lineup Poster"
            />
          </SRLWrapper>
        </SimpleReactLightbox>
      </PosterWrap>
    </div>
  );
};

export default BigCopy;

// ====

const PosterWrap = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  box-shadow: 0px 0px 24px rgba(29, 32, 37, 0.15);

  & img {
    width: 100%;
    cursor: pointer;
  }
`;
