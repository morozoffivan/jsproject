const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотери?");



let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};
const a = prompt ("Какой последний фильм?"),
      b = prompt ("Как его оцените?"),
      c = prompt ("Какой последний фильм?"),
      d = prompt ("Как его оцените?");

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log (personalMovieDB);