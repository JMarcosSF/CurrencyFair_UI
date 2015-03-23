// script.js

     // Create the module and name it myApp
	var myApp = angular.module('myApp', []);
     
     // Create the controller and inject Angular's $scope
	myApp.controller('mainController', function($scope, $http) {
		$scope.message = "Transactions By Originating Country";

		$scope.$on('$viewContentLoaded', function(){
			//TODO CALL skybabble HERE TO LOAD MAP!!!!
//			$http.get('testCountryMessageCount.json').
//			$http.get('localhost:8080/messages/countries/messages/count').
//		    	success(function(data, status, headers, config) {
//		      	$scope.posts = data;
//		      	alert(data);
//		    }).
//		    error(function(data, status, headers, config) {
//		      alert("FAILED");
//		    });
			drawRegionsMap();
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