

const moviesHTML = document.querySelector('.movie__search--list');
const userInput = document.querySelector('.input__movie--search');
const keyWord = document.querySelector('.search-by');
const sortMovies = document.querySelector('.sort__movies');

let arrayAPI = [];

async function movieSearch(query) {
    //const loading = document.querySelector('.loading');
    //const results = document.querySelector('.movie__search--list');
    // wokring url https://omdbapi.com/?apikey=242fafd7&s=i
  
   
    const  movies = await fetch(`https://omdbapi.com/?apikey=242fafd7&s=${query}`);
    const moviesData = await movies.json();
    console.log(moviesData.Search);
    return moviesData.Search || [];
   
};


/////////////////////////////////


//let clear = '';

async function movieResults() {
    
    const query = userInput.value.trim()
    
    if (!query) {
        return;
    }
    
   

   
      
      
      
    if (moviesHTML !== '') {
         moviesHTML.innerHTML = '';  
    }
       
    moviesHTML.classList += " movies__loading"; 
    
     
    
    const data = movieSearch(query);

//    if (moviesHTML.innerHTML === clear || moviesHTML.innerHMTL !== clear) {
//     arrayAPI = await data;

//    }
     arrayAPI = await data;
    moviesHTML.classList.remove('movies__loading');
         

   if (arrayAPI.length === 0) {
        moviesHTML.innerHTML = `<p> No Results Found</p>`;
        keyWord.innerHTML =  `<p class="key-word">No Results Found</p>`;
        sortMovies.innerHTML = '';
        return;
     }

    arrayAPI.length = 6;
    //console.log(data);
   

   

     keyWord.innerHTML = `<p class="key-word">Search Keyword "${query}"</p>`

   

     sortMovies.innerHTML = `<select id="filter" class="filter-options" onchange="movieSort(event)"> 
                                <option value="" disabled selected>Sort</option>
                                <option value="LATEST">Latest Release</option>
                                <option value="EARLIEST">Earliest Release</option>
                            </select>`
        
     
     renderMovies();
   
}


//////////////////////////////////////////


function userHTML(movie) {


    return `
    <div class="movie-card">
        
        <div class="movie-card__container">
            <div class="movie-poster">
                <img class="movie-poster--img" src="${movie.Poster}" alt="movie poster">
            </div>
            <div class="movie-poster__info">
                <h3 class="movie-title">${movie.Title}</h3>
                <h5 class="movie-year">${movie.Year}</h5>
                <p class="movie-theatre">IMAX Cinema</p>
                <p class="movie-theatre__location">Movie City, USA</p>
                <p class="movie-theatre--phone">(800)MOV-IE11</p>
            </div>
        </div>
    </div>`;
}

/////////////////////////////////////////

async function renderMovies(filter) {
     
        let moviesToRender = arrayAPI;

          rendered = await moviesToRender;
          console.log(rendered); 

     if (filter === "LATEST") {
        rendered.sort((a,b) => b.Year - a.Year);
     }
     else if (filter === "EARLIEST") {
        rendered.sort((a,b) => a.Year - b.Year);
     }
     
     const moviesHTMLString = rendered.map((movie) => userHTML(movie)).join("");

     
    
     moviesHTML.innerHTML = moviesHTMLString;
    
    
}

//////////////////////////////////////////////

function movieSort(event) {
   
      const  sortFilter = event.target.value;
        renderMovies(sortFilter);
}





