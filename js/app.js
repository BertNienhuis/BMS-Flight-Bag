var myApp = angular.module("myApp", ["ngRoute"])
	.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/korea_frequencies.html",
		controller: "appController",
		activeNav: "korea_frequencies"
    })
	.when("/korea", {
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
    })
	.when("/pilotfaults", {
        templateUrl : "templates/pilotfaults.html",
		controller: "appController",
		activeNav: "pilotfaults"
    })
	.when("/emergencyprocedures", {
        templateUrl : "templates/emergencyprocedures.html",
		controller: "appController",
		activeNav: "emergencyprocedures"
    })
	.when("/emergencies", {
        templateUrl : "templates/emergencies.html",
		controller: "appController",
		activeNav: "emergencies"
    })
	.when("/checklistpdf", {
        templateUrl : "templates/checklist2.html",
		controller: "appController",
		activeNav: "checklistpdf"
    });
});

myApp.controller('appController', ['$scope', '$route', function($scope, $route) {
    $scope.route = $route;
}])