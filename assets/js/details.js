/*MAI*/

$(document).ready(function(){
    $(".button-collapse").sideNav();


    var req = new XMLHttpRequest();

	var URL = "https://netflixroulette.net/api/api.php?";
	var queryType = "title=";
	var query = "pulp%20fiction";

	req.open('GET', URL + queryType + query, true);
	req.addEventListener("load", function() {
		var response = JSON.parse(req.responseText);

		//transormando en array cast.
		var actores = response.show_cast;
		var arr = actores.split(',');
		arr.forEach(function(e, f){
			var contador = f + 1;
			$(".details-starring").append('<p class="details-actors" id="actor-' + contador + '">' + e + '</p>');
		})
		
		//append de datos
		var imgMovie = '<img src="' + response.poster + '" class="imagen-movie">';
		var rating = '<p>Rating: ' + response.rating + '</p>';
		var titleMovie = '<h6 id="title-movie">' + response.show_title  + '<span>' + response.category + '</span></h6>';
		var summaryMovie = '<p>' + response.summary + '</p>';
		var genresMovie = '<p>Genres: ' + response.category + '</p>';
		var directorMovie = '<p>Director: ' + response.director + '</p>';

	  	$(".img-movie").append(imgMovie);
	  	$(".details-rating").append(rating);
	  	$(".details-title").append(titleMovie);
	  	$(".details-summary").append(summaryMovie);
	  	$(".details-genres").append(genresMovie);
	  	$(".details-director").append(directorMovie);


	  	$(".details-actors").click(function(){
	  		window.location.href = "actors.html";
	  	})

	  
	});
	req.send(null);

});
