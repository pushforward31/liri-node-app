require("dotenv").config();

var request = require("request");

var keys = require("./keys.js");

var operand = process.argv[2];
var string1 = process.argv[3];
var string2 = process.argv[4];


//omdb movie request
var output;

if (operand === "movie-this") {
    output = request("http://www.omdbapi.com/?t=" + string1 + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

        // If there were no errors and the response code was 200 (i.e. the request was successful)...

        //(!error && response.statusCode === 200) {

        // Then we print out the imdbRating
        console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nImdb Rating: " + JSON.parse(body).imdbRating + "\nProduction Country: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors/Actresses: " + JSON.parse(body).Actors);
 
        fs.appendFile("log.txt", "\nTitle: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nImdb Rating: " + JSON.parse(body).imdbRating + "\nProduction Country: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors/Actresses: " + JSON.parse(body).Actors, (error) => { /* handle error */ });

    });
} else if (operand === "movie-this" && string1 === "") {
    request("http://www.omdbapi.com/?t=Mr+Nobody=&plot=short&apikey=trilogy", function(error, response, body) {

        // If there were no errors and the response code was 200 (i.e. the request was successful)...

        //(!error && response.statusCode === 200) {

        // Then we print out the imdbRating
        console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nImdb Rating: " + JSON.parse(body).imdbRating + "\nProduction Country: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors/Actresses: " + JSON.parse(body).Actors);

        fs.appendFile("log.txt", "\nTitle: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nImdb Rating: " + JSON.parse(body).imdbRating + "\nProduction Country: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors/Actresses: " + JSON.parse(body).Actors, (error) => { /* handle error */ });
    });
fs.appendFile("log.txt", console.log());
}

//function search ({ type, query, offset: 1 }, callback){};
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


if (operand === "spotify-this-song") {
    spotify
        .search({ type: 'track', query: string1, limit: 3 })
        .then(function(response) {
            for (var i = 0; i < response.tracks.items.length; i++) {
                var track = response.tracks.items[i].name;
                var songUrl = response.tracks.items[i].href;
                var albumName = response.tracks.items[i].album.name;
                var artists = []
                for (var j = 0; j < response.tracks.items[i].artists.length; j++) {
                    var artistName = response.tracks.items[i].artists[j].name;
                    artists.push(artistName)
                }
                console.log("Track: " + track + "\nUrl: " + songUrl + "\nAlbum: " + albumName + "\nArtists: " + artists + "\n");


                fs.appendFile("log.txt", "\nTrack: " + track + "\nUrl: " + songUrl + "\nAlbum: " + albumName + "\nArtists: " + artists + "\n", (error) => { /* handle error */ });
            }
        })
        .catch(function(err) {
            console.log(err);
        });
} else if (operand === "spotify-this-song" && string1 === "") {
    spotify
        .search({ type: 'track', query: 'Sign', limit: 3 })
        .then(function(response) {
            for (var i = 0; i < response.tracks.items.length; i++) {
                var track = response.tracks.items[i].name;
                var songUrl = response.tracks.items[i].href;
                var albumName = response.tracks.items[i].album.name;
                var artists = []
                for (var j = 0; j < response.tracks.items[i].artists.length; j++) {
                    var artistName = response.tracks.items[i].artists[j].name;
                    artists.push(artistName)
                }
                console.log("Track: " + track + "\nUrl: " + songUrl + "\nAlbum: " + albumName + "\nArtists: " + artists + "\n");

                fs.appendFile("log.txt", "\nTrack: " + track + "\nUrl: " + songUrl + "\nAlbum: " + albumName + "\nArtists: " + artists + "\n", (error) => { /* handle error */ });
            }
        })
        .catch(function(err) {
            console.log(err);
        });
}
//var router = express.Router();
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var express = require('express');

if (operand === "my-tweet") {

    client.get('search/tweets', { q: string1 }, function(error, tweets, response) {
        var statuses = tweets.statuses.map(function(tweet) { return tweet.text });
        console.log(statuses);
        fs.appendFile("log.txt", statuses, (error) => { /* handle error */ });



    });
}

if (operand === "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function(error, data) {
                function data() {
                    spotify
                        .search({ type: 'track', query: 'I Want it that way', limit: 3 })
                        .then(function(response) {
                            for (var i = 0; i < response.tracks.items.length; i++) {
                                var track = response.tracks.items[i].name;
                                var songUrl = response.tracks.items[i].href;
                                var albumName = response.tracks.items[i].album.name;
                                var artists = []
                                for (var j = 0; j < response.tracks.items[i].artists.length; j++) {
                                    var artistName = response.tracks.items[i].artists[j].name;
                                    artists.push(artistName)
                                }
                                console.log("Track: " + track + "\nUrl: " + songUrl + "\nAlbum: " + albumName + "\nArtists: " + artists + "\n");

                                fs.appendFile("log.txt", "\nTrack: " + track + "\nUrl: " + songUrl + "\nAlbum: " + albumName + "\nArtists: " + artists + "\n", (error) => { /* handle error */ });	
                            }
                        })

                }

                // If the code experiences any errors it will log the error to the console.
                if (error) {
                    return console.log(error);
                }

                // We will then print the contents of data
                console.log(data());


            });
}