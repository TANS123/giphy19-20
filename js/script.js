/* global $ */

console.log('hi');
$(".back").hide();
$('.search').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Awesomeness');
});
$('.search').click(function(){ 
var searchTerm = $('input').val();
var result = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY";
fetch(result)
.then(function(response) {
return response.json();
})
.then(function(data) {
  console.log(data.data.length);
  var rand = Math.floor(Math.random() * 25);
  var gif_url = data.data[rand].images.original.url;
  console.log(gif_url);
  $('body').append('<img src=' + gif_url + '>');
})
$(".search").hide();
$("input").hide();
$(".back").show();
});
$('.back').click(function(){
  $(".back").hide();
  $(".search").show();
  $("input").show();
  $("img").hide();
  $('h1').text('Giphy Project');
});


// .then(function(data) {
//   console.log(data.data[0]);
// })