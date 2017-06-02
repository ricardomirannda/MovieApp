var formMovie = document.querySelector("#form-movie");

var movieName = document.querySelector(".movie-name");
var movieDescriptionArea = document.querySelector (".movie-description-area")

var movieAdd = document.querySelector("#movie-add");

var movieTitle = document.querySelector(".movie-title");
var movieDescription = document.querySelector(".movie-description");


var messageError = document.querySelector(".message-error");

var tableMovie = document.querySelector("#table-movie");


// Add Movie
movieAdd.addEventListener("click", function(){
	validateNameMovie();
});




// Validate Movie
function validateNameMovie(){
	if (movieName.value == "" && movieDescriptionArea.value == "") {
		messageError.style.display = 'block';		
	}
	
	if (movieName.value != "" && movieDescriptionArea.value != ""){
		messageError.style.display = 'none';	
		saveMovie();
		createTemplate();
	}  

}


// Save Movie
function saveMovie(){
	movieTitle.textContent = movieName.value;	
	movieDescription.textContent = movieDescriptionArea.value;
	movieName.focus();
	movieName.value = "";
	movieDescriptionArea.value = "";	
}


// Create Template
// function createTemplate(){
// 	var newCard = document.createElement('div');
// 	newCard.className = "card";
// 	newCard.textContent = movieTitle.textContent;
// 	document.body.appendChild(newCard);
// }


function getFormData(){
	movieTitle = formMovie.nome.value;	
	movieDescription = formMovie.descricao.value;	

	console.log(movieTitle);
	console.log(movieDescription);
}

var Movie = {
	name : formMovie.nome.value,
	// description :
}






// function createTemplate(){
// 	<div id="one">one</div>
// 	var d1 = document.querySelector('.movie-list .col');
// 	d1.insertAdjacentHTML('afterend', '	<div class="col s3 m3"><div class="card"><div class="card-image"><img src="assets/images/movies/sample-1.jpg"></div><div class="card-content"><span class="card-title movie-title"> '+movieTitle.textContent+' </span><p class="movie-description">'+movieDescription.textContent+'</p></div></div></div>');
// }

