"use strict";

const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотери?");



let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt ("Какой последний фильм?"),
          b = prompt ("Как его оцените?");
          personalMovieDB.movies [a] = b;

    if (a != null && b != null && a != "" && b != "" && a.length < 50 ) {
        personalMovieDB.movies [a] = b;
    
    } else {
     i--;
    }
}


 if (personalMovieDB.count < 10) {
     alert("Просмотрено довольно мало фильмов");
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
     alert("Вы классический зритель");
 } else if (personalMovieDB.count > 30) {
     alert("Вы киноман");
 } else {
     alert("Произошла ошибка");
 }


console.log (personalMovieDB);