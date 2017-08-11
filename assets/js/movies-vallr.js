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
			$("#search").val(""); //la búsqueda por título no lleva filtro por catergoría, porque sólo lanza un sólo resultdo
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
					var title = ele.show_title;
					var year = ele.release_year;
					var category = ele.category;
					var duration = ele.runtime;
					var director = ele.director;
					$("#movie-area").append(`
						<div class="`+ category +`">
							<div class="row">
								<p><b>`+ title +`</b> `+ year +`|`+ category +`</p>
							</div>
							<div class="row">
								<p>+`+ duration +` `+ director +`</p>
							</div>
						</div>						

					`)			
				});	
			});
			req.send(null);
			console.log($("#search").val())
			$("#search").val("");
			$("#category-field").removeClass("hide");
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
					var title = ele.show_title;
					var year = ele.release_year;
					var category = ele.category;
					var duration = ele.runtime;
					var director = ele.director;
					$("#movie-area").append(`
						<div class="movie `+ category +`">
							<div class="row">
								<p><b>`+ title +`</b> `+ year +`|`+ category +`</p>
							</div>
							<div class="row">
								<p>+`+ duration +` `+ director +`</p>
							</div>
						</div>						

					`)
				});	
			});
			req.send(null);
			$("#category-field").removeClass("hide");
		}
	});

	$("#category").change(function(){
		var arr=[];
		$(".movies").each(function(){
			arr.push($(".movies"));
		});
		arr.forEach(function(){
			console.log("no")
		});
	});

});