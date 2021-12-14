import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

import Rips from '../Rips/Rips';

// ====

const SocialMedia = () => {
  function useInstagram() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch(`/.netlify/functions/instagram`)
        .then(res => res.json())
        .then(data => {
          setPosts(data);
        });
    }, []);
    return posts;
  }

  const insta = useInstagram();

  console.log('instagram', insta);

  return (
    <div style={{ zIndex: '10', position: 'relative' }}>
      <Rips>
        <div className="container">
          <Title>Latest from social media</Title>
          <Posts>
            {!insta.length ? (
              <Loading>Loading...</Loading>
            ) : (
              insta.map(gram => (
                <li key={gram.id}>
                  <a href={gram.url} target="_blank" rel="noreferrer noopener">
                    <img
                      src={`https://images.weserv.nl/?url=${encodeURIComponent(
                        gram.thumbnail,
                      )}&w=255`}
                      alt={gram.caption}
                    />
                  </a>
                </li>
              ))
            )}
          </Posts>
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

const Posts = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding: 0;
  margin: 0;
  list-style: none;

  & li {
    padding: 0;
    margin: 0;
  }

  & img {
    width: 100%;
  }
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

const Loading = styled.li`
  display: block;
  align-self: center;
  font-family: 'EurostileExt', 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-top: 2rem;
  color: var(--secondary);
  grid-column: 2/4;
  grid-row: 1/3;
`;
