import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

// ====

const Gallery = ({ set }) => {
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
      <GalleryWrap>
        <SimpleReactLightbox>
          {set.allFile.edges.map(edge => (
            <SRLWrapper options={options}>
              <li>
                <Img fluid={edge.node.childImageSharp.fluid} alt="" />
              </li>
            </SRLWrapper>
          ))}
        </SimpleReactLightbox>
      </GalleryWrap>
    </div>
  );
};

export default Gallery;

// ====

const GalleryWrap = styled.ul`
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
