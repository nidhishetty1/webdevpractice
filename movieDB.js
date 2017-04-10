//Each movie should have a title, rating and hasWatched properties. Iterate through the array and print out something taht looks like:
// You have watched "In Bruges" - 5 Stars
// You have not seen "Frozen" - 4.5 Stars
// You have watched "Mad Max Fury Road" - 5 Stars
// You have not seen "Les Miserables" - 3.5 Stars

var movies = [
    {title: "In Bruges", rating: 5, hasWatched: true },
    {title: "Frozen", rating: 4.5, hasWatched: false },
    {title: "Mad Max Fury Road", rating: 5, hasWatched: true },
    {title: "Les Miserables", rating: 3.5, hasWatched: false }
]

//Option 1
function dekho(array){
    for (var i = 0; i < array.length; i++) {
        if (array[i].hasWatched== true) {
            console.log( "You have watched \"" + array[i].title + "\" - " + array[i].rating + " stars");
        } else {
            console.log( "You have not watched \"" + array[i].title + "\" - " + array[i].rating + " stars");
        }
    }
}

//Option 2
movies.forEach(function(movie) {
    var result = "You have";
    if (movie.hasWatched==true) {
        result += " watched "
    } else {
        result += " not watched "
    }
    result += "\"" + movie.title + "\" - " + movie.rating + " stars"
    console.log(result);
})

//Option 3
function buildResult(movie) {
    var result = "You have";
    if (movie.hasWatched==true) {
        result += " watched "
    } else {
        result += " not watched "
    }
    result += "\"" + movie.title + "\" - " + movie.rating + " stars";
    return result;
}
function dikhao(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(buildResult(array[i]));
    }
}
