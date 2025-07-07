

const moviesHTML = document.querySelector('.movie__search--list');
const userInput = document.querySelector('.input__movie--search')

async function movieSearch(movieQuery) {
    // wokring url https://omdbapi.com/?apikey=242fafd7&s=ice
    const movies = await fetch(`https://omdbapi.com/?apikey=242fafd7&s=${movieQuery}`);
    const moviesData = await movies.json();
    console.log(moviesData)
    moviesHTML.innerHTML = moviesData.Search.map((movie) => userHTML(movie)).join("");
}

function movieResults() {
    event.preventDefault();
   
    const spin = document.querySelector('.fa-spinner')
    const loading = document.querySelector('.loading');
    const results = document.querySelector('.movie__search--list');
    loading.classList += " .search__results";
    spin.classList += " .search__results"
    setTimeout(() => {
        loading.classList.remove('.loading');
        spin.classList.remove('.fa-spinner');
        results.classList += " .search__results";
    }, 3000);
     
    movieSearch(userInput.value)
}


/*function showMovieInfo(userInput) {
    localStorage.setItem("id", userInput);
    window.location.href = `${window.location.origin}/movies.html`
   
}*/


function userHTML(movie) {
    return `<div class="movie-card" )">
        <div class="movie-card__container">
            <div class="movie-poster"></div>
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


