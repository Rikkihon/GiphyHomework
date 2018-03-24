'use strict'
var apiKey = "qIg1dr99bQ5tXzJh616bdsVRKQw96ttv";
//var url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YqIg1dr99bQ5tXzJh616bdsVRKQw96ttv;&limit=10";
var topics = ["political infighting", "fist fights", "Parliament", "Washington DC", "House of Cards", "Ladders", "Lobbyist", "Corruption", "Ethics" ];
var test = "sample";
let addPhrase = topics.push();
var i = 0;
$( document ).ready(function(){
$.ajax({

    url: "http://api.giphy.com/v1/gifs/search?q=" + topics[i]+ "&api_key=qIg1dr99bQ5tXzJh616bdsVRKQw96ttv&limit=10;",
    type: "GET",
    success: function(response) {

        for (var i = 0; i < topics.length; i++)
        var giphyURL = response.data[i].images.fixed_height.url;
        var giphyRating = response.data[i].images.giphyRating;
        console.log(response);
        console.log(giphyURL);
        console.log(giphyRating);

        $('#here_is_gif').attr('src', giphyURL);
        $('#here_is_gif2').attr('src', giphyURL);
        $('#here_is_gif3').attr('src', giphyURL);
        $('#here_is_gif4').attr('src', giphyURL);
        $('#here_is_gif5').attr('src', giphyURL);
        $('#here_is_gif5').attr('src', giphyURL);
        $('#here_is_gif5').attr('src', giphyURL);

        for (var i = 0; i <= topics.length; i++) {
            // Then dynamically generating buttons for each item in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            dynButtons(i);

        function dynButtons(i) {
            var giphyButton = $("<button>");
            // Adding a class to button
            giphyButton.addClass("btn btn-primary btn-sm");
            giphyButton.append('id', topics[i]);
            
            $(".info" + i).html(giphyButton);
            $(".input-group").html(giphyButton);
            $(".input-group").append(giphyButton);
            $("#trivia-answer" + i).html(answerButton);

    }


        function imgSrc(i) {
        var giphyImgSrc = $('#here_is_gif').attr('src', giphyURL);
        var giphyRating = $("<p>")
        Button.attr('id', giphyRating);
        
        $(".info" + i).html(giphyButton);
}
    }
    

}
});

// This waits for the page to load before calling our jQuery
//$( document ).ready(function(){

    // Part 1 - Collect User Input Using jQuery Click Listener note we use the class (.) of search_button
    //$('.search_button').on('click', function(){
      // Collect user by grabbing the input form's value via id (#)
      //var userInput = $('#form-value').val().trim();
      // Change the input to suit the API (ie change spaces to +)
      //userInput = userInput.replace(/ /g, "+");
      // Create the Giphy API URL
      //var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=qIg1dr99bQ5tXzJh616bdsVRKQw96ttv';
      // Part 2 - Use AJAX to call GIPHY API (note that the .done() function waits for the API to respond)
      //$.ajax({url: queryURL, method: 'GET'}).done(function(response){
        // This is the API response data. It's a JSON object of 25 gifs
        //console.log(response.data);
        // For simplicity, we will take the first gif (ie. at postion 0)
       // var giphyURL = response.data[0].images.fixed_height.url;
        //console.log(giphyURL)
        // Now you can pass that into your "here_is_gif" <img> tag using its id (#)
        //$('#here_is_gif').attr('src', giphyURL);
      //});

      // Part 3 - Clear the Gif using the reset_button id (#)
      $('#reset_button').on('click', function(){
        // Grab the img using the id and change the src to empty to remove the image
        $('#here_is_gif').attr("src",'');
      })


      // If using a jQuery click listner on a Submit button, you need to return false to prevent the default page refresh
     // return false;
    //})
    

  //});

 




$(".clearBtn").on("click", function (event) {
    $('.footer').clear();

});
});