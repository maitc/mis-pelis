$(document).ready(function(){

	$("#parameter").change(function(){
		if(($("#parameter").val())==1){
			var req = new XMLHttpRequest();
			var URL = "https://netflixroulette.net/api/api.php?";
			var queryType = "title=";
			var director = $("#search").val();
			req.open('GET', URL + queryType + director, true);
			req.addEventListener("load", function() {
				var response = JSON.parse(req.responseText);
				console.log(response.show_title);
				console.log(response.release_year);
				console.log(response.category);
				console.log(response.runtime);
				console.log(response.director);
			});
			req.send(null);
			$("#search").val("");			
		}
		else if(($("#parameter").val())==2){
			var req = new XMLHttpRequest();
			var URL = "https://netflixroulette.net/api/api.php?";
			var queryType = "actor=";
			var director = $("#search").val();
			req.open('GET', URL + queryType + director, true);
			req.addEventListener("load", function() {
				var response = JSON.parse(req.responseText);
				console.log(response);
				response.forEach(function(ele){
					console.log(ele);
					var titulo = ele.show_title;
					var anio = ele.release_year;
					var categoria = ele.category;
					var duracion = ele.runtime;
					var director = ele.director;
				});	
			});
			req.send(null);
			console.log($("#search").val())
			$("#search").val("");
		}
		else if(($("#parameter").val())==3){			
			var req = new XMLHttpRequest();
			var URL = "https://netflixroulette.net/api/api.php?";
			var queryType = "director=";
			var director = $("#search").val();
			req.open('GET', URL + queryType + director, true);
			req.addEventListener("load", function() {
				var response = JSON.parse(req.responseText);
				console.log(response);
				response.forEach(function(ele){
					console.log(ele);
					var titulo = ele.show_title;
					var anio = ele.release_year;
					var categoria = ele.category;
					var duracion = ele.runtime;
					var director = ele.director;
				});	
			});
			req.send(null);
			console.log($("#search").val())
			$("#search").val("");			
		}
	});

});