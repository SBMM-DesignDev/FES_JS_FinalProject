

const moviesHTML = document.querySelector('.movie__search--list');
const userInput = document.querySelector('.input__movie--search');
const keyWord = document.querySelector('.search-by');
const movieScreen = document.querySelector('.row__img');
const sortMovies = document.querySelector('.sort__movies');
const sortFunction = movieSort(event.target.value);
const movieQuery = movieResults();

async function movieSearch(sortFunction, movieQuery) {
   //movieScreen.classList.remove('.row__img');
    //const loading = document.querySelector('.loading');
    //const results = document.querySelector('.movie__search--list');
    moviesHTML.classList += " movies__loading";
   
   // if (sortFunction === "LATEST") {
       // moviesData.Search
   // }
   
    // wokring url https://omdbapi.com/?apikey=242fafd7&s=ice
    const movies = await fetch(`https://omdbapi.com/?apikey=242fafd7&s=${movieQuery}`);
    const moviesData = await movies.json();
   moviesData.Search.length = 6;
    console.log(moviesData);
    moviesHTML.innerHTML = moviesData.Search.map((movie) => userHTML(movie)).join("");

     moviesHTML.classList.remove('movies__loading')

     keyWord.innerHTML = `<p class="key-word">Search Keyword "${movieQuery}"</p>`

     sortMovies.innerHTML = `<select id="filter" onchange="movieSort(event)" >
                                <option value="" disabled selected>Sort</option>
                                <option value="LATEST">Latest Release</option>
                                <option value="EARLIEST">Earliest Release</option>
                            </select>`
}

function movieSort(event) {
    movieSearch(event.target.value)
   
}



function movieResults() {
    
     
    event.preventDefault();
    movieSearch(userInput.value)
}



/*function showMovieInfo(userInput) {
    localStorage.setItem("id", userInput);
    window.location.href = `${window.location.origin}/movies.html`
   
}*/


function userHTML(movie) {


    return `
    <div class="movie-card" )">
        
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


