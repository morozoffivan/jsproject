const numberOfFilms = +prompt("Сколько фильмов вы уже посмотери?");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

do {
    const a = prompt("Какой последний фильм?"),
        b = prompt("Как его оцените?");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        i++;
    }
        
} while (i < 2);



// for (let i = 0; i < 2; i++) {
//     const a = prompt ("Какой последний фильм?"),
//           b = prompt ("Как его оцените?");


//     if (a != null && b !=null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies [a] = b;
//         console.log ("done");
//     } else {
//         console.log("error");
//         i--;
//     }

// }


if (personalMovieDB.count < 10) {
    alert ("Просмотренно довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert ("вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} 
else {
    alert ("Произошла ошибка");
}

console.log(personalMovieDB.count);