import React, { useState } from 'react';
import { Script } from 'gatsby';

import Layout from '../components/Layout/Layout';
import BigCopy from '../components/BigCopy/BigCopy';
import SEO from '../components/SEO/SEO';

// ====

const IndexPage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Layout>
      <SEO title="Tickets" />

      <BigCopy
        custom
        title="Outbreak Fest 2023"
        subtitle="Presale Tickets"
        copy="£95 + Fees<br />June 23 - 25"
      />

      <div className="container">
        <div id="dice-event-list-widget"></div>
      </div>

      <Script
        src="https://widgets.dice.fm/dice-event-list-widget.js"
        onLoad={() => setLoaded(true)}
      />
      {loaded && (
        <Script
          id="dice-widget"
          dangerouslySetInnerHTML={{
            __html: `DiceEventListWidget.create({"information":"full","eventTitle":"event","showImages":true,"showAudio":false,"showNewBadge":false,"hidePostponed":false,"hideCancelled":false,"layout":"gallery","roundButtons":false,"theme":"dark","fontFamily":"inherit","partnerId":"9c117b8e","apiKey":"gBSvpwh7LZ3OlVQTiCL6ras16RxhBU7G9tOMzNkT","version":2,"showPrice":true,"__p":true,"__pc":{"brandColor":"black","rounded":false},"highlightColour":"#fff","promoters":["Outbreak Fest"]});`,
          }}
        />
      )}
    </Layout>
  );
};

export default IndexPage;
