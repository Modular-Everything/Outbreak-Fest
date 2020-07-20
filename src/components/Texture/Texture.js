import React from 'react';
import styled from 'styled-components';

import BG from '../../images/texture.png';

// ====

const Texture = () => {
  return <TextureBG BgImg={BG} />;
};

export default Texture;

// ====

const TextureBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  opacity: 0.75;
  background-blend-mode: screen;
  background-image: url(${(props) => props.BgImg});
  pointer-events: none;
`;
