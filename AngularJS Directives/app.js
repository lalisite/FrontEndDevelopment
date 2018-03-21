var app = angular.module("actorApp", []);

app.controller("actorCtrl", function ($scope, $http) {

    function Actor(tmdbActorObject) {
        this.name = tmdbActorObject.name;
        this.birthday = new Date(tmdbActorObject.birthday);
        this.imageUrl = "https://image.tmdb.org/t/p/w500" + tmdbActorObject.profile_path;
        this.imdbUrl = "https://www.imdb.com/name/" + tmdbActorObject.imdb_id;
    };

    $scope.searchResults = [
        // {
        //     name: "Brad Pitt",
        //     id: "3333"
        // },
        // {
        //     name: "Gal Gadot",
        //     id: "4444"
        // }
    ];

    $scope.favActors = [];

    $scope.queryText = "";
    $scope.searchChange = function () {
        if ($scope.queryText) {

            $http.get('https://api.themoviedb.org/3/search/person?api_key=cab5301443e9e009c0098115d0c30df2&query=' + $scope.queryText).then(function (response) {
                $scope.searchResults = response.data.results;
            }, function (response) { });
        } else {
            $scope.searchResults = [];
        }
    };

    $scope.addActor = function (searchResult) {
        $http.get('https://api.themoviedb.org/3/person/' + searchResult.id + "?api_key=cab5301443e9e009c0098115d0c30df2")
            .then(function (response) {
                $scope.favActors.push(new Actor(response.data));
                $scope.queryText="";
                $scope.searchResults=[];
            }, function (response) {
                alert("Error " + response);
            });
    }

});