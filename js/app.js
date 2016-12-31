var myApp = angular.module("myApp", ["ngRoute"])
	.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/korea_frequencies.html",
		controller: "appController",
		activeNav: "korea_frequencies"
    })
    .when("/korea_frequencies", {
        templateUrl : "templates/korea_frequencies.html",
		controller: "appController",
		activeNav: "korea_frequencies"
    })
    .when("/korea_map", {
        templateUrl : "templates/korea_map.html",
		controller: "appController",
		activeNav: "korea_map"
    })
    .when("/korea_charts", {
        templateUrl : "templates/korea_charts.html",
		controller: "appController",
		activeNav: "korea_charts"
    });
});

myApp.controller('appController', ['$scope', '$route', function($scope, $route) {
    $scope.route = $route;
}])