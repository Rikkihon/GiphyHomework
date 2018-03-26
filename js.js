'use strict'
var apiKey = "qIg1dr99bQ5tXzJh616bdsVRKQw96ttv";
//var url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YqIg1dr99bQ5tXzJh616bdsVRKQw96ttv;&limit=10";
var topics = ["political infighting", "fist fights", "Parliament", "Washington DC", "House of Cards", "Ladders", "Lobbyist", "Corruption", "Ethics" ];
var test = "sample";
let addPhrase = topics.push();
$( document ).ready(function(){
    for (var i = 0; i < 1; i++)
$.ajax({

    url: "http://api.giphy.com/v1/gifs/search?q=" + topics[i]+ "&api_key=qIg1dr99bQ5tXzJh616bdsVRKQw96ttv&limit=10;",
    type: "GET",
    success: function(response) {

        for (var i = 0; i < topics.length; i++) {
            var giphyURL = response.data[i].images.fixed_height.url;
            console.log(response);
            console.log(giphyURL);
            var imgSrc = ('img src=""');
            var giphyRating = response.data[i].rating;
            var giphyButton = $("<button>");
            giphyButton.addClass("btn btn-primary btn-sm");
            giphyButton.html("<p>"+ topics[i]+"</p>");
            $(".jumbotron").append(giphyButton)
            $("#inputGroup-sizing-default").prepend("Rating: " + giphyRating + " ");
        }
    

             for (var i = 0; i < topics.length; i++)
             $("#inputGroup-sizing-default").prepend("Rating: " + giphyRating + " ");
             console.log(giphyRating);
            
    
    }

});

      // Part 3 - Clear the Gif using the reset_button id (#)
      $('#reset_button').on('click', function(){
        // Grab the img using the id and change the src to empty to remove the image
        $('#here_is_gif').attr("src",'');
      })
$(".clearBtn").on("click", function (event) {
    $('.footer').clear();

});
});