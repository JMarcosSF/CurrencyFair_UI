// script.js

     // Create the module and name it myApp
	var myApp = angular.module('myApp', []);

	myApp.config(['$httpProvider', function ($httpProvider) {
  		$httpProvider.defaults.useXDomain = true;
	}]);
     
     // Create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope, $http) {
		$scope.message = "Transactions By Originating Country";

		$scope.$on('$viewContentLoaded', function(){
			var posts;
			$http.get('http://localhost:8080/messages/countries/messages/count').
		    	success(function(data, status, headers, config) {
		    	var arr = data;
		      	drawRegionsMap(arr);
		    }).
		    error(function(data, status, headers, config) {
		      console.log(data);
		    });
			
		});
		
	});

	myApp.controller('aboutController', function($scope) {
         $scope.message = "About Page... Hello World!!! ";
    });

	myApp.controller('contactController', function($scope) {
         $scope.message = "Contact us!!! Hello World!!!";
    });

	function MyCtrl($scope) {
	    angular.element(document).ready(function () {
	        drawRegionsMap();
	    });
	}