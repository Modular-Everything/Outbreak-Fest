require('isomorphic-fetch');

const url = `https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables={"id":"510242604","first":8}`;

function slimUpPosts(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map(edge => ({
    thumbnail: edge.node.thumbnail_resources[2].src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption:
      edge.node.edge_media_to_caption.edges.length > 0
        ? edge.node.edge_media_to_caption.edges[0].node.text
        : null,
    id: edge.node.id,
  }));
}

const cache = {
  lastFetch: 0,
  posts: [],
};

async function getPosts() {
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if (timeSinceLastFetch <= 3600000) {
    return cache.posts;
  }

  const data = await fetch(url).then(res => res.json());
  const posts = slimUpPosts(data);
  return posts;
}

exports.handler = async function posts(event, context, callback) {
  const InstaPosts = await getPosts();
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(InstaPosts),
  });
};
