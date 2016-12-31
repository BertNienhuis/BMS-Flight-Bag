angular.module('myApp').config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
});

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/korea_frequences.html"
    })
    .when("/korea_frequences", {
        templateUrl : "templates/korea_frequences.html"
    })
    .when("/korea_map", {
        templateUrl : "templates/korea_map.html"
    })
    .when("/korea_airports", {
        templateUrl : "templates/korea_airports.html"
    });
});