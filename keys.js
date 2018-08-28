console.log('this is loaded');

// exports.spotify = {
//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET
// };



exports.spotify = {
    SPOTIFY_ID: '67382ac864cf4dd8927fac14f8d31918',
    secret: '7c5d4aba1fbe441b9ffad319288c2147'
};

var spotify = new Spotify(keys.spotify);