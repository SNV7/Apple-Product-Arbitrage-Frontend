var app = angular.module('AppleArbitrageApp',['ngRoute', "ngResource", "ngMessages", "ui.bootstrap"]) //ngResouce allows use to ling front end to back end

app.config(function ($routeProvider, $locationProvider){
	$routeProvider.when('/', {
        controller: "HomeController",
        templateUrl: "views/home.html"
    });

	$locationProvider.html5Mode(true);
});