import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

// ====

const Poster = ({ poster }) => {
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
            <Img fluid={poster} alt="Poster" />
          </SRLWrapper>
        </SimpleReactLightbox>
      </PosterWrap>
    </div>
  );
};

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Poster;

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
