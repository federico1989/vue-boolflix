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
	  myApiKey:"7590ffcc8dd999cadeff1cfe7fcd8fc4"
  },
  methods: {
	clickSearch: function(){
	  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.myApiKey}&language=it-US&query=${this.mySearch}`)
	  .then(response => {
		//console.log(response);
		  this.movies = response.data.results;
		  this.movies.forEach(element => {
			let vote = Math.ceil(element.vote_average / 2);
			// console.log(vote);
			element.vote_average = vote;
		  })

	  });
	},
  }

});