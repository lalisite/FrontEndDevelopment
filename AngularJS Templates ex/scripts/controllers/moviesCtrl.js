//@ts-check
app.controller("topMoviesController", function ($scope, $http, movieService) {

    $scope.queryMovieText = "";
    $scope.searchMoviesResults = [];
    $scope.selectedMovies = [];

    //occures when entering text in the search
    $scope.searchMovieChange = function () {
        movieService.searchMovies($scope.queryMovieText).then(function () {
            //success           
            $scope.searchMoviesResults = movieService.movies;
        }, function () {
            //error
        });        
    };

    $scope.addMovie = function (tmdbMovie) {
        movieService.addMovie(tmdbMovie).then(function(){
            $scope.selectedMovies = movieService.selectedMovies;
            $scope.queryMovieText="";
        },function(){
            alert("Error");
        });        
    }

});