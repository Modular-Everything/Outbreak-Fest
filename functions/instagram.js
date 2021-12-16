const axios = require('axios');
require('dotenv').config();

exports.handler = function instagram(event, context, callback) {
  const endpoint = 'https://graph.instagram.com';
  const userId = '17841401038127972';
  const fields = 'id,caption,media_url,media_type,permalink';
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const limit = 6;
  const url = `${endpoint}/${userId}/media/?fields=${fields}&access_token=${token}&limit=${limit}`;

  axios
    .get(url)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          posts.map(i => ({
            id: i.id,
            mediaUrl: i.media_url,
            mediaType: i.media_type,
            permalink: i.permalink,
            caption: i.caption,
          })),
        ),
      });
    })
    .catch(e => {
      callback(e);
    });
};
