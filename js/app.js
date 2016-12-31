
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/korea_frequencies.html"
    })
    .when("/korea_frequencies", {
        templateUrl : "templates/korea_frequencies.html"
    })
    .when("/korea_map", {
        templateUrl : "templates/korea_map.html"
    })
    .when("/korea_airports", {
        templateUrl : "templates/korea_airports.html"
    });
});