'use strict'
var apiKey = "qIg1dr99bQ5tXzJh616bdsVRKQw96ttv";
var i = 0;
var topics = ["political infighting", "fist fights", "Parliament", "Washington DC", "House of Cards", "Ladders", "Lobbyist", "Corruption", "Ethics"];
var url = "http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=qIg1dr99bQ5tXzJh616bdsVRKQw96ttv&limit=10;";
$(document).ready(function () {
    console.log("Run!");
    for (var i = 0; i < 1; i++) {
        $.ajax({

            url: "http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=qIg1dr99bQ5tXzJh616bdsVRKQw96ttv&limit=10;",
            type: "GET",
            success: function (response) {
                 
                for (var i = 0; i < topics.length; i++) {
                    var giphyURL = response.data[i].images.fixed_height.url;
                    var staticURL = response.data[i].images.fixed_height_still.url;
                    var imgSrc = ('img src=""');
                    var giphyRating = response.data[i].rating;
                    var giphyButton = $("<button>");
                    giphyButton.addClass("btn btn-primary btn-sm");
                    giphyButton.html("<p>" + topics[i] + "</p>");
                    $("#main").append(giphyButton);
                    $("#main").prepend(giphyRating);
                    console.log("Can this show up?")
                }
            }
        });
    }

    // .fail(function (err) {
    //     throw err;
    // }
    $(".jumbotron").on("click", ".btn.btn-primary.btn-sm",  function (event) {//this is what you use for dynamically created buttons
        console.log(event.currentTarget)// this would just print the button class attribute, but if you add the jquery around it, 
        //it will get the actual jquery object (the text in this case- which then allows you to apply the jquery methods)
        console.log(  $(event.currentTarget).find("p").text()   ); //this finds the html item inside of the dynamically created element (button in this case) we put the
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=" +$(event.currentTarget).find("p").text()+ "&api_key=qIg1dr99bQ5tXzJh616bdsVRKQw96ttv&limit=3;",
            type: "GET",
            success: function (response) {
                 for (var i = 0; i <= 2; i++) {
                    var giphyURL = response.data[i].images.fixed_height.url;
                    var staticURL = response.data[i].images.fixed_height_still.url;
                    console.log(giphyURL);
                    $('.rando_facts').append('<img src=' + staticURL + ' data-state="still" data-still="'+staticURL+'" data-animate="'+giphyURL+'"></img>');
                }

            }
        });
    });
    // .fail(function (err) {
    //     throw err;
    // }
    //here is where I have the add a giphy function written 
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
        let searchGiphy = $("#Add").val().trim();
        topics.push(searchGiphy);
        var giphyButton = $("<button>"); //   <button>giphy searc text</button>
        giphyButton.html("<p>" + searchGiphy + "</p>"); //   <button><p>giphy searc text</p></button>
        //giphyButton.text(giphyButton) //   <button>giphy searc text</button>

        giphyButton.addClass("btn btn-primary btn-sm");
        //giphyButton.html("<p>" + add + "</p>");
        $("#main").append(giphyButton);

    });


    $(".jumbotron").on("click", "img",  function (event) {
        //http://umn.bootcampcontent.com/University-of-Minnesota-Boot-Camp/MINSTP201802FSF1-Class-Repository-FSF/blob/master/06-ajax/01-Activities/15-PausingGifs/Solved/pausing-gifs-solution.html
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
         
        var state = $(this).attr("data-state");
        console.log(state);
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still valueZZZ
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
});



