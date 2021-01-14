// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo
// scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
// bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
// film trovato:
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto

let app = new Vue({
  el: "#root",
  data: {
	  mySearch: "",
	  movies:"",
	  series:"",
	  myApiKey:"7590ffcc8dd999cadeff1cfe7fcd8fc4"
  },
  methods: {
	clickSearch: function(){
		// Chiamata film
	  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.myApiKey}&language=it-US&query=${this.mySearch}`)
	  .then(response => {
		//console.log(response);
		  this.movies = response.data.results;
		  this.movies.forEach(element => {
			let vote = Math.ceil(element.vote_average / 2);
			// console.log(vote);
			element.vote_average = vote;
			if(element.original_language == "en"){
            element.original_language = "us";
          	}else if(element.original_language == "zh"){
            element.original_language = "cn";
          	}else if(element.original_language == "ko"){
            element.original_language = "kr";
         	 }else if(element.original_language == "vi"){
            element.original_language = "vn";
         	 }else if(element.original_language == "hu" || "et"){
            element.original_language = "eu";
          	}else if(element.original_language == "ja"){
            element.original_language = "jp";
         	 }else if(element.original_language == "da"){
            element.original_language = "dk";
			}  
		  })
		});
		// Chiamata serie tv
		axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${this.myApiKey}&language=it-US&query=${this.mySearch}`)
		.then(response => {
			this.series = response.data.results;
		  this.series.forEach(element => {
			let vote = Math.ceil(element.vote_average / 2);
			// console.log(vote);
			element.vote_average = vote;
			if(element.original_language == "en"){
            element.original_language = "us";
          	}else if(element.original_language == "zh"){
            element.original_language = "cn";
          	}else if(element.original_language == "ko"){
            element.original_language = "kr";
         	 }else if(element.original_language == "vi"){
            element.original_language = "vn";
         	 }else if(element.original_language == "hu" || "et"){
            element.original_language = "eu";
          	}else if(element.original_language == "ja"){
            element.original_language = "jp";
         	 }else if(element.original_language == "da"){
            element.original_language = "dk";
			}  
		  })
		});
	},
  }

});