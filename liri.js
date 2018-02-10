require("dotenv").config();

var request = require("request");

var keys = require("./keys.js");

var operand = process.argv[2];
var string1 = process.argv[3];
var string2 = process.argv[4];

// var client = new Twitter(keys.twitter);


//omdb movie request
var output;

if (operand === "movie-this") {
    output = request("http://www.omdbapi.com/?t=" + string1 +"&y=&plot=short&apikey=trilogy", function(error, response, body) {

        // If there were no errors and the response code was 200 (i.e. the request was successful)...

        //(!error && response.statusCode === 200) {

        // Then we print out the imdbRating
        console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nImdb Rating: " + JSON.parse(body).imdbRating + "\nProduction Country: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors/Actresses: " + JSON.parse(body).Actors);

    });
}
 else if (operand === "movie-this" && string1 === "") {
    request("http://www.omdbapi.com/?t=Mr+Nobody=&plot=short&apikey=trilogy", function(error, response, body) {

        // If there were no errors and the response code was 200 (i.e. the request was successful)...

        //(!error && response.statusCode === 200) {

        // Then we print out the imdbRating
        console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nImdb Rating: " + JSON.parse(body).imdbRating + "\nProduction Country: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors/Actresses: " + JSON.parse(body).Actors);

    });

}

//function search ({ type, query, offset: 1 }, callback){};

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var setup = {
  "body" : {

  },
  "headers" : {

  },
  "statusCode" :{

  }
}
//if (operand === "spotify-this-song"){
spotify.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });
/*
spotify
  .request("https://api.spotify.com/v1/search?q=tania+bowra&offset=0&limit=1&type=artist")
  .then(function(data) {
    console.log(data.setup);//"Artist: " + JSON.parse(response).artist);// Song Song link, Album;
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  }); 
*/

//}