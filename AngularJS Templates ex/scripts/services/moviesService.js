//@ts-check
app.factory("movieService",function($log,convert,$http,$q){

    function Movie(tmdbMovie){
        this.title = tmdbMovie.title;
        this.runtime = convert.toPretty(tmdbMovie.runtime);
        this.imdbId = "https://www.imdb.com/title/ " + tmdbMovie.imdb_id;  
        this.imageUrl = "https://image.tmdb.org/t/p/w500" + tmdbMovie.poster_path;      
    }

    var searchMoviesResults= [];
    //occures when entering text in the search
    function searchMovies(queryMovieText) {
        var async = $q.defer();

        if (queryMovieText) {
            $http.get("https://api.themoviedb.org/3/search/movie?api_key=cab5301443e9e009c0098115d0c30df2&query=" + queryMovieText).then(
                function (response) {
                    //sunccess                    
                    $log.debug(response.data);
                    searchMoviesResults.splice(0,searchMoviesResults.length);
                    for(var i=0;i<response.data.results.length;i++){
                        searchMoviesResults.push(response.data.results[i]);
                    }
                    async.resolve();

                }, function (response) {
                    //error
                    $log.error("Error " + response.data);
                    //alert("Error" + response);
                    async.reject();
                });

        } else {
            searchMoviesResults.splice(0,searchMoviesResults.length);
        }

        return async.promise;
    };

    var selectedMovies=[];

    function addMovie(tmdbMovie) {
        var async = $q.defer();

        if (tmdbMovie) {
            $http.get("https://api.themoviedb.org/3/movie/" + tmdbMovie.id + "?api_key=cab5301443e9e009c0098115d0c30df2").then(function (response) {
                //sunccess
                selectedMovies.push(new Movie(response.data));
                searchMoviesResults.splice(0,searchMoviesResults.length);
                async.resolve();

            }, function (response) {
                //error
                alert("Error" + response);
                async.reject();
            });
        }

        return async.promise;
    }
    
    return{        
        searchMovies : searchMovies,
        movies : searchMoviesResults,
        addMovie: addMovie,
        selectedMovies :  selectedMovies  
    }
});