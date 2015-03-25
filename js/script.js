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
		      	var totalMsg = 0;
		      	// Offsetting because index 0 is column string data
		      	for(i = 1; i < arr.length; i++) {
		      		var item = arr[i];
		      		totalMsg = totalMsg + item[1];
		      	}
		      	$scope.message_count = totalMsg;
		    }).
		    error(function(data, status, headers, config) {
		      console.log(data);
		    });
			
		});
		
	});

	myApp.controller('aboutController', function($scope, $http) {
         $scope.message = "About Page... Hello World!!! ";
         $scope.example = {
         	value: 1
         };
         $scope.getUserMessages = function () {
          $http.get('http://localhost:8080/messages/users/' + $scope.example.value).
		    	success(function(data, status, headers, config) {
		    		$scope.userMessages = data;
		    		console.log($scope.userMessages);
		    }).
		    error(function(data, status, headers, config) {
		      console.log(data);
		    });
        };
    });

	myApp.controller('contactController', function($scope) {
         $scope.message = "Contact us!!! Hello World!!!";
    });

	function MyCtrl($scope) {
	    angular.element(document).ready(function () {
	        drawRegionsMap();
	    });
	}