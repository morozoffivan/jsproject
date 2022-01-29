"use strick";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотери?");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотери?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;


// do {
//     const a = prompt("Какой последний фильм?"),
//         b = prompt("Как его оцените?");
//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     }
        
// } while (i < 2);


function remeberMyFilms () {
for (let i = 0; i < 2; i++) {
    const a = prompt ("Какой последний фильм?"),
          b = prompt ("Как его оцените?");


    if (a != null && b !=null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies [a] = b;
        console.log ("done");
    } else {
        console.log("error");
        i--;
    }
}
}

remeberMyFilms ();

function detectedPersonalLevel () {
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
}
 
detectedPersonalLevel();


function showMyDB (hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function showYourGenres() {
    for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = +prompt (`Ваш любимый жанр под номером ${i}`);
}
}
showYourGenres();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
