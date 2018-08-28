// require("dotenv").config();
var fs = require("fs");
var request = require("request");
var spotify = require("node-spotify-api");
// var inquirer = require("inquirer"); optional

var keys = ("keys.js")

var userInput = process.argv[2];

if (userInput === "movie-this") {
    console.log("I like this movie")


} else
    if (userInput === "spotify-this-song") {
        console.log("spotify song")



    } else
        if (userInput === "concert-this") {
            console.log("this concert is awesome")
        }

        else
            if (userInput === "do-what-it-says") {
                console.log("say it")

            }



// my movie API

function myMovie() {
    // this will store arguments in an array
    var nodeArgs = process.argv;

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

            // need to console,log:
            //     * Title of the movie.
            //    * Year the movie came out.
            //    * IMDB Rating of the movie.
            //    * Rotten Tomatoes Rating of the movie.
            //    * Country where the movie was produced.
            //    * Language of the movie.
            //    * Plot of the movie.
            //    * Actors in the movie.


        } else {
            console.log(error);
        }


    });






};



