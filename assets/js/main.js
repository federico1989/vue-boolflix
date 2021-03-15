// Milestone 5 (Opzionale):
// Partendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno
// parte del cast aggiungendo alla nostra scheda Film / Serie SOLO i primi 5 restituiti
// dall’API con Nome e Cognome, e i generi associati al film con questo schema:
// “Genere 1, Genere 2, …”.

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
          	}else if(element.original_language == "zh" || element.original_language == "hu"){
			element.original_language = "cn";
			}else if(element.original_language == "ko"){
            element.original_language = "kr";
          	}else if(element.original_language == "hi"){
            element.original_language = "in";
          	}else if(element.original_language == "sv"){
            element.original_language = "se";
         	 }else if(element.original_language == "vi"){
            element.original_language = "vn";
         	 }else if(element.original_language == "et"){
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
			if(element.origin_country == "GB" && element.origin_country == "US"){
            element.original_language = "gb";
          	}else if(element.origin_country == "GB"){
			element.original_language = "gb";
			}else if(element.origin_country == "US"){
			element.original_language = "us";
			}else if(element.original_language == "en"){
            element.original_language = "gb";
          	}else if(element.original_language == "zh" || element.original_language == "hu"){
            element.original_language = "cn";
          	}else if(element.original_language == "ko"){
            element.original_language = "kr";
         	}else if(element.original_language == "hi"){
            element.original_language = "in";
          	}else if(element.original_language == "sv"){
            element.original_language = "se";
         	}else if(element.original_language == "vi"){
            element.original_language = "vn";
         	}else if(element.original_language == "et"){
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