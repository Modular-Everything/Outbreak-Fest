import React from 'react';
import styled from 'styled-components';

import BG from '../../images/texture.png';

// ====

const Texture = () => {
  // let HEIGHT = null;
  // if (window !== undefined) {
  //   // TODO - Fix undefined error when building
  //   HEIGHT = window.innerHeight;
  //   window.addEventListener('resize', () => {
  //     HEIGHT = window.innerHeight;

  //     // TODO - Try using UseEffect here instead to redraw the element on resize
  //   });
  // }

  return <TextureBG BgImg={BG} style={{ height: `100vh` }} />;
};

export default Texture;

// ====

const TextureBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: ${({ height }) => (height ? `${height}px` : `100vh`)};
  opacity: 0.75;
  background-blend-mode: screen;
  background-image: url(${(props) => props.BgImg});
  pointer-events: none;
`;
