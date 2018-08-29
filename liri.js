// require("dotenv").config();
var fs = require("fs");
var request = require("request");
var spotify = require("node-spotify-api");
// var inquirer = require("inquirer"); optional

var keys = ("keys.js")

var userInput = process.argv[2];
var nodeArgs = process.argv;

var spotify = new Spotify(keys.spotify);


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

    for (var i = 2; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {

            movieName = movieName + "+" + nodeArgs[i];

        }

        else {

            movieName += nodeArgs[i];

        }
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
            var body = JSON.parse(body);

            console.log(body)
            // ^^do I still need this?

            console.log(["\n Movie Title: " + body.Title + "\n", "\n Year:  " + body.Year + "\n", "\n IMDB Rating: " + body.Rating + "\n", "\n Rotten Tomatoes Rating: " + body.Rating + "\n", "\n Country: " + body.Country + "\n", "\n Movie Language: " + body.Language + "\n", "\n Plot: " + body.Plot + "\n", "\n Actors: " + body.Actor + "\n"]);


        } else {
            console.log(error);
        }

    });
};


// my spotify API
function mySpotify() {
    spotify.search({ type: 'track', query: 'Perfect' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);

        } else {
            // not sure if I'm doing this correctly - googled this one(stackoverflow) and from our activity
            console.log("\nArtist: " + JSON.stringify(data.tracks.items[0], artist[0].name, null, 2) + "\n ");
            console.log("\nSong Title: " + JSON.stringify(data.tracks.items[0].name + "\n ");
            console.log("\nAlbum: " + JSON.stringify(data.tracks.items[0].album.name + "\n ");
            console.log("\nLink: " + JSON.stringify(data.tracks.items[0].album.preview_url + "\n ");
        }

        console.log(data);
    });// ^^Do I still need this?
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
    // this will store arguments in an array

    var dates = moment().format('MM Do YYYY');
    console.log(dates);
    // create an empty variable to hold movie name
    var bandName = "";

    for (var i = 2; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {

            bandName = bandName + "+" + nodeArgs[i];

        }

        else {

            bandName += nodeArgs[i];

        }
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + bandName + "&y=&plot=short&apikey=trilogy";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
            var body = JSON.parse(body);

            console.log(body)
            // ^^do I still need this?

            console.log(["\n Venue Name: " + body.Venue + "\n", "\n Location:  " + body.Location + "\n", "\n Event Dates: " + body.Dates = dates + "\n"]);
            //****   not sure if I pass this correctly for Moments***

            // * Date of the Event (use moment to format this as "MM/DD/YYYY")

        } else {
            console.log(error);
        }

    });
};








