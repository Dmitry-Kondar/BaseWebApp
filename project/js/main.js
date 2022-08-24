function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
}

// function getweather(searchQurey) {
//   var url = "https://api.openwethermap.ogr/data/2.5/weather?q="+searchQurey+"&units=imperial&APPID="+apiKey;

//   $(".city").text("");
//   $(".temp").text("");
//   $(".error-message").text("");

//   $.ajax(url, {success: function(data) {
//     console.log(data);
//     $(".city").text(data.name);
//     $(".temp").text(data.main.temp);
//   }, error: function(error) {
//     $(".error-message").text("An error occured!");
//   }})
// }

// function searchWeather() {
//   var searchQurey = $(".search").val();
//   getweather(searchQurey);
// }