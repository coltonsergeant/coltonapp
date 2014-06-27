'use strict' ;

var app = angular.module('ColtonApp', ['ngRoute']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/home', {
  	templateUrl: '/static/views/home.html',
  	controller: HomeController
  });
  $routeProvider.when('/page1', {
  	templateUrl: '/static/views/page1.html',
  	controller: HomeControllerTwo
  });
}]);

function HomeController($scope, $http) {
	$scope.title = 'home';
  $scope.loadSomething = function(){
    $http.get('/api/data').then(function(response) {
      $scope.colors = response.data; });
  }
}
function HomeControllerTwo($scope) {
	$scope.title = 'page1';
}