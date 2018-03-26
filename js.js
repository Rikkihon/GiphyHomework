'use strict'
var apiKey = "qIg1dr99bQ5tXzJh616bdsVRKQw96ttv";
var i = 0;
var topics = ["political infighting", "fist fights", "Parliament", "Washington DC", "House of Cards", "Ladders", "Lobbyist", "Corruption", "Ethics"];
var url = "http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=qIg1dr99bQ5tXzJh616bdsVRKQw96ttv&limit=10;";
let search = topics.push();
$(document).ready(function () {
    for (var i = 0; i < 1; i++)
        $.ajax({

            url: "http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=qIg1dr99bQ5tXzJh616bdsVRKQw96ttv&limit=10;",
            type: "GET",
            success: function (response) {

                for (var i = 0; i < topics.length; i++) {
                    var giphyURL = response.data[i].images.fixed_height.url;
                    var imgSrc = ('img src=""');
                    var giphyRating = response.data[i].rating;
                    var giphyButton = $("<button>");
                    giphyButton.addClass("btn btn-primary btn-sm");
                    giphyButton.html("<p>" + topics[i] + "</p>");
                    $("#main").append(giphyButton)
                }
            }
            // .fail(function (err) {
            //     throw err;
            // }
        
    });

    $.ajax({
        //This one is only displaying the buttons clicked URL 
        //for (var i = 0; i < topics.length; i++){
        url: "http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=qIg1dr99bQ5tXzJh616bdsVRKQw96ttv&limit=10;",
        type: "GET",

         //$(".btn btn-primary btn-sm").on("click", function() 
         //displays the giphy when clicked 
        success: function (response) {
            
            for (var i = 0; i < topics.length; i++){
                var giphyURL = response.data[i].images.fixed_height.url;
                console.log(giphyURL)
                $('#here_is_gif').attr('src', giphyURL);
                $('.rando_facts').append('<img src=' + giphyURL + '></img>');
            }
        }
        // .fail(function (err) {
        //     throw err;
        // }

    });


    $(".btn btn-primary btn-sm").on("click", function () {
        //http://umn.bootcampcontent.com/University-of-Minnesota-Boot-Camp/MINSTP201802FSF1-Class-Repository-FSF/blob/master/06-ajax/01-Activities/15-PausingGifs/Solved/pausing-gifs-solution.html
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

        //here is where I have the search function written 
        $("#searchBtn").on("click", function (event) {
        topics.push = $("#search").val().trim();
      
    });
});
});