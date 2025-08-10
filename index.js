

const moviesHTML = document.querySelector('.movie__search--list');
const userInput = document.querySelector('.input__movie--search');
const keyWord = document.querySelector('.search-by');
const sortMovies = document.querySelector('.sort__movies');
//const query = movieResults();

async function movieSearch(query) {
    //const loading = document.querySelector('.loading');
    //const results = document.querySelector('.movie__search--list');
    moviesHTML.classList += " movies__loading";
   
    
   
    // wokring url https://omdbapi.com/?apikey=242fafd7&s=ice
    const movies = await fetch(`https://omdbapi.com/?apikey=242fafd7&s=${query}`);
    const moviesData = await movies.json();
     moviesData.Search.length = 6;
    //console.log(moviesData.Search);
    moviesHTML.innerHTML = moviesData.Search.map((movie) => userHTML(movie)).join("");

     moviesHTML.classList.remove('movies__loading')

     keyWord.innerHTML = `<p class="key-word">Search Keyword "${query}"</p>`

        sortMovies.innerHTML = `<select id="filter" class="filter-options" onchange="movieSort(event)"> 
                                <option value="" disabled selected>Sort</option>
                                <option value="LATEST">Latest Release</option>
                                <option value="EARLIEST">Earliest Release</option>
                            </select>`

     

               return moviesData.Search;          
};


/////////////////////////////////


async function movieResults() {
    const query = userInput.value.trim()
    
    if (!query) {
        return;
    }
    else if (query) {
        movieSearch(query);
    }
    //console.log(movieSearch(userInput.value))
    //const search = await movieSearch(userInput.value);
    //console.log(search)
    // movieSearch(search);
   
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
    const query = userInput.value.trim();
            if (!query) {
                return;
            }
            else if (query) {
                movieSearch(query);
            }

        console.log(filter)
     arrayAPI = await movieSearch(query);
        console.log(arrayAPI)
     if (filter === "LATEST") {
        arrayAPI.sort((a,b) => b.Year - a.Year);
     }
     else if (filter === "EARLIEST") {
        arrayAPI.sort((a,b) => a.Year - b.Year);
     }

  


const moviesFilterResults = arrayAPI.map((movie) => userHTML(movie)).join("");
  /*  return `
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
        })
        .join("");*/

    moviesHTML.innerHTML = moviesFilterResults

}

//////////////////////////////////////////////

function movieSort(event) {
   
//    document.getElementById('filter').addEventListener('onchange', (event) => {
//         const sort = event.target.value;
        
//          movieSearch(event, sort);
//          return
        
//    });
        
        renderMovies(event.target.value);
}





