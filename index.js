



async function movieSearch() {
    // wokring url https://omdbapi.com/?apikey=242fafd7&s=ice
    const movies = await fetch('https://omdbapi.com/?apikey=242fafd7&s=ice');
    const moviesData = await movies.json();
    const moviesHTML = document.querySelector('.movie__search--list');
   console.log(moviesData)
   
     moviesHTML.innerHTML = Object.keys(moviesData).map(
        (movie) => `<div class="movie-card">
        <div class="movie-card__container">
            <div class="movie-poster"></div>
            <div class="movie-poster__info">
                <h3 class=${movie.title}></h3>
                <h5 class=${movie.year}></h5>
                <p class="movie-theatre">IMAX Cinema</p>
                <p class="movie-theatre__location">Movie City, USA</p>
                <p class="movie-theatre--phone">(800)MOV-IE11</p>
            </div>
        </div>
    </div>`
   
   .join('')
);
}

movieSearch();
