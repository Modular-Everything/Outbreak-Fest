import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Rips from '../Rips/Rips';

// ====

const SocialMedia = () => {
  function useInstagram() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch(`/.netlify/functions/instagram`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }, []);
    return posts;
  }

  const insta = useInstagram();

  return (
    <div>
      <Rips>
        <div className="container">
          <Title>Latest from social media</Title>
          <Posts>
            {!insta.length ? (
              <p>Loading...</p>
            ) : (
              insta.map((gram) => (
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
