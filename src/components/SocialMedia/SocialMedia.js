import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

import Rips from '../Rips/Rips';

// ====

const SocialMedia = () => {
  return (
    <div style={{ zIndex: '10', position: 'relative' }}>
      <Rips>
        <div className="container">
          <Title>Follow us on social media</Title>
          <SocialIcons>
            <li>
              <a
                href="https://facebook.com/outbreak.fest"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/outbreakfest"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </li>
          </SocialIcons>
        </div>
      </Rips>
    </div>
  );
};

export default SocialMedia;

// ====

const Title = styled.h3`
  font-family: 'EurostileExt', 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 1.125;
  line-height: 1.3;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 4rem;
  color: var(--primary);
`;

const SocialIcons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-top: 4rem;
  list-style: none;

  & li {
    font-size: 2rem;
    margin-left: 1rem;

    &:nth-of-type(1) {
      margin-left: 0;

      a {
        color: var(--primary);
      }
    }

    &:nth-of-type(2) a {
      color: var(--secondary);
    }
  }
`;
