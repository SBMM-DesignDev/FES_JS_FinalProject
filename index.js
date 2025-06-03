
async function movieSearch() {
const movies = await fetch('https://omdbapi.com/?apikey=242fafd7&=s');
const moviesData = await movies.json();
console.log(moviesData);
}

movieSearch();