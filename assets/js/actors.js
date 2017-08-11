$(document).ready(function(){
	var req = new XMLHttpRequest();

	var URL = "https://netflixroulette.net/api/api.php?";
	var queryType = "actor=";
	var query = "John+Travolta";

	req.open('GET', URL + queryType + query, true);
	req.addEventListener("load", function() {
		var response = JSON.parse(req.responseText);

		var name = query.replace('+', ' ');
		var movies = Array.from(response);
		movies.forEach(function(e){
			$(".actor-movie").append('<p><i class="material-icons icon-movie">movie</i>' + e.show_title + '</p>')
		})
		var nameActor = '<h4>' + name + '</h4>';

		$(".actor-name").append(nameActor);

		

	  
	});
	req.send(null);
})

