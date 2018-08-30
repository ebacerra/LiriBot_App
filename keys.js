console.log('this is loaded');


exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
}

exports.omdb = {
    api_key: process.env.API_KEY
}
exports.bandsInTown = {
    app_id: process.env.APP_ID
}
