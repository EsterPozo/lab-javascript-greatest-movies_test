// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const allDirectorsArr = moviesArray.map( function (movie) {
      return movie.director;
   })
   return allDirectorsArr;
}

console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/*function howManyMovies(moviesArray) {
   const stevenDrama = moviesArray.map(function (movie) {
      let newArray = [];
      if (movie.director === "Steven Spielberg") {
         for (let i=0; i<movie.genre.length; i++) {
            if (movie.genre[i] === "Drama") {
               newArray.push(movie);
            }
         }
      }
      return newArray;
   })
   return stevenDrama;
}*/
function howManyMovies(moviesArray) {
   let newArray = [];
   const stevenDrama = moviesArray.map(function (movie) {
      
       if (movie.director === "Steven Spielberg") {
          for (let i=0; i<movie.genre.length; i++) {
             if (movie.genre[i] === "Drama") {
                return movie;
             }
          }
       }
       
    })
    for (let i=0; i<stevenDrama.length; ++i) {
      if (stevenDrama[i] !== undefined) {
        newArray.push(stevenDrama[i]);
      }
    }
    return newArray.length;
 }
 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*function howManyMovies(moviesArray) {
   let newArray = [];
   const stevenDrama = moviesArray.map(function (movie) {
      
       if (movie.director === "Steven Spielberg") {
          for (let i=0; i<movie.genre.length; i++) {
             if (movie.genre[i] === "Drama") {
                return movie;
             }
          }
       }
       
    })
    for (let i=0; i<stevenDrama.length; ++i) {
      if (stevenDrama[i] !== undefined) {
        newArray.push(stevenDrama[i]);
      }
    }
    return newArray.length;
 }*/
 
 function scoresAverage(moviesArray) {
   const averageArray = moviesArray.map(function (movie) {
     return movie.score;
   })
   let sum = 0;
   let average = 0;
   for (let i = 0; i<averageArray.length; ++i) {
     sum += averageArray[i];
   }
   if (sum !== 0) {
     average = sum / averageArray.length;
   }
   return Number(average.toFixed(2));
 };

 
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
