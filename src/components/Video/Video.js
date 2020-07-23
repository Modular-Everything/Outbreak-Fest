import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import styled from 'styled-components';

// ====

const Video = ({ videoId, caption }) => {
  const opts = {
    playerVars: {
      modestbranding: 1,
      controls: 0,
      rel: 0,
    },
  };

  return (
    <YouTubeWrap>
      <YouTube videoId={videoId} opts={opts} />
      {caption && <Caption>{caption}</Caption>}
    </YouTubeWrap>
  );
};

export default Video;

// ====

const YouTubeWrap = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Caption = styled.p`
  font-size: 1.125;
  text-align: center;
  margin-top: 2rem;
  color: var(--light);
`;

// ====

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

Video.defaultProps = {
  caption: null,
};
