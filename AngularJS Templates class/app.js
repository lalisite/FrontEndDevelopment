
var app = angular.module('templateDemo', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "homeCtrl"
        })
        .when("/cars", {
            templateUrl: "cars-table.html",
            controller: "carTableCtrl"
        }).otherwise({
            redirectTo: "/"
        });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
});
