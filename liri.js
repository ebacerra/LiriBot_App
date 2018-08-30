require("dotenv").config();
var fs = require("fs");
var request = require("request");
var Spotify = require("node-spotify-api");
var moment = require('moment')
// var inquirer = require("inquirer"); optional
// var formatDates = require(moment().format('MM Do YYYY')
// );
var keys = require("./keys.js");
console.log(keys);
var userInput = process.argv[2];
var nodeArgs = process.argv;


if (userInput === "movie-this") {
    console.log("I like this movie")
    myMovie();


} else
    if (userInput === "spotify-this-song") {
        console.log("spotify song")
        mySpotify();



    } else
        if (userInput === "concert-this") {
            console.log("this concert is awesome")
            myBand();

        }

        else
            if (userInput === "do-what-it-says") {
                console.log("say it")
                myRandomtxt();
            }



// my movie API

function myMovie() {
    // this will store arguments in an array


    // create an empty variable to hold movie name
    var movieName = "";

    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {

            movieName = movieName + "+" + nodeArgs[i];

        }

        else {

            movieName += nodeArgs[i];

        }
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&plot=short&apikey=" + keys.omdb.api_key;

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
            var body = JSON.parse(body);

            console.log(body)
            // ^^do I still need this?

            console.log("\nMovie Title: " + body.Title + "\n", "\nYear:  " + body.Year + "\n", "\nIMDB Rating: " + body.imdbRating + "\n", "\nRotten Tomatoes Rating: " + body.Ratings[1].Value + "\n", "\n Country: " + body.Country + "\n", "\n Movie Language: " + body.Language + "\n", "\n Plot: " + body.Plot + "\n", "\n Actors: " + body.Actors + "\n");


        } else {
            console.error(error);
        }

    });
};

// my spotify API
function mySpotify() {

    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: 'Perfect', limit: 1 }, function (err, data) {
        if (err) {

            return console.log('Error occurred: ' + err);

        } else {
            // 
            var songInfo = data.tracks.items[0];
            console.log("\nArtist: " + songInfo.artists[0].name + "\n ");
            console.log("\nSong Title: " + songInfo.name + "\n ");
            console.log("\nAlbum: " + songInfo.album.name + "\n ");
            console.log("\nLink: " + songInfo.preview_url + "\n ");
        }


    });
};



//   Ramdom:
function myRandomtxt() {
    fs.readFile(`random.txt`, "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }


        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);

    });
};


// myBand
function myBand() {

    // create an empty variable to hold movie name
    var bandName = "";

    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {

            bandName = bandName + "+" + nodeArgs[i];

        }

        else {

            bandName += nodeArgs[i];

        }
    }

    var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=" + keys.bandsInTown.app_id;

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
            var body = JSON.parse(body);

            console.log(body)


            console.log("\n Venue Name: " + body.Venue + "\n", "\n Location:  " + body.country + "\n", "\n Event Dates: " + moment(body.datetime).format('MMMM Do YYYY') + "\n");
            // ^^ I tried body.Venue.Name, body.venue.name body.Venue.name, body.Venue.country, body.venue.country, body.Venue.Country -- nothing's working. The only thing that's working is the datetime. I'm data back but it's not printing the way it supposed to be

        } else {
            console.log(error);
        }

    });
};








