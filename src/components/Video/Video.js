import React from 'react';

// ====

const Video = () => {
  return (
    <div className="container">
      <div
        style={{
          width: '100%',
          height: '0',
          paddingBottom: 'calc(900 / 1600 * 100%)',
          position: 'relative',
        }}
      >
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/K1i1fzLM07o"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Outbreak Video"
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            height: '100%',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default Video;
