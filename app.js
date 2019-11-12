window.onload = function(){
	let sbtn = document.getElementById("search-btn").addEventListener("click");

    var httpRequest = new XMLHttpRequest();
	var url = "http://localhost:8080/superheroes.php";
	httpRequest.onreadystatechange = superHero;
	
	function superHero(){	
	if (httpRequest.readyState === XMLHttpRequest.DONE){
		if (httpRequest.status === 200) {
			var response = httpRequest.responseText;
			var result = document.querySelector('#result');
			result.innerHTML = response;
		}
		else{
			alert("There was a problem");
		}
	
	
	httpRequest.open("GET",url);
	httpRequest.send();
	}
}
]);

