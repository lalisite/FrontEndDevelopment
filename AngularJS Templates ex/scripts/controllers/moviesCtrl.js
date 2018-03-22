//@ts-check
app.controller("topMoviesController", function ($scope, $http,convert) {

    function Movie(tmdbMovie){
        this.title = tmdbMovie.title;
        this.runtime = convert.toPretty(tmdbMovie.runtime);
        this.imdbId = "https://www.imdb.com/title/ " + tmdbMovie.imdb_id;  
        this.imageUrl = "https://image.tmdb.org/t/p/w500" + tmdbMovie.poster_path;      
    }

    $scope.queryMovieText = "";
    $scope.searchMoviesResults = [];
    $scope.selectedMovies = [];

    //occures when entering text in the search
    $scope.searchMovieChange = function () {

        if ($scope.queryMovieText) {
            $http.get("https://api.themoviedb.org/3/search/movie?api_key=cab5301443e9e009c0098115d0c30df2&query=" + $scope.queryMovieText).then(
                function (response) {
                    //sunccess                    
                    $scope.searchMoviesResults = response.data.results;

                }, function (response) {
                    //error
                    alert("Error" + response);
                });

        } else {
            $scope.searchMoviesResults = [];
        }
    };

    $scope.addMovie = function(tmdbMovie){
        if(tmdbMovie){
            $http.get("https://api.themoviedb.org/3/movie/"+tmdbMovie.id+"?api_key=cab5301443e9e009c0098115d0c30df2").then(function(response){
                //sunccess
                $scope.selectedMovies.push(new Movie(response.data));
                $scope.searchMoviesResults = [];

            },function(response){
                //error
                alert("Error" + response);
            });
        }
    }

});