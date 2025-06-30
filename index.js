

const moviesHTML = document.querySelector('.movie__search--list');
const userInput = document.querySelector('.input__movie--search')

async function movieSearch() {
    // wokring url https://omdbapi.com/?apikey=242fafd7&s=ice
    const movies = await fetch(`https://omdbapi.com/?apikey=242fafd7&s=${userInput}`);
    const moviesData = await movies.json();
    console.log(moviesData)
    moviesHTML.innerHTML = moviesData.Search.map((movie) => userHTML(movie)).join("");
}

movieSearch();

function showMovieInfo(userInput) {
    localStorage.setItem("id", userInput);
    window.location.href = `${window.location.origin}/movies.html`
   
}


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


