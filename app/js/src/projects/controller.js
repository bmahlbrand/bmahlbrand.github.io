var app = angular.module('ahlbrand.projects', []);

app.controller('projectsController', ['$scope', '$http', function($scope, $http) {
	
	$scope.projectList = null;
	$scope.currentIndex = 0;

	$http({
		
		method: 'GET', 
		url: 'js/src/projects/projects.json'

	}).then(function successCallback(response) {
		
		$scope.projectList = response.data;

		$scope.setProject();

	}, function errorCallback(response) {

	  	$scope.message = 'failed';

	});

	$scope.setProject = function() {

		$scope.projectName = $scope.projectList[$scope.currentIndex].title;
		$scope.projectDescription = $scope.projectList[$scope.currentIndex].description;
		$scope.projectLink = $scope.projectList[$scope.currentIndex].link;
		$scope.projectDate = $scope.projectList[$scope.currentIndex].dates;
	}

	$scope.prevProject = function() {
		
		if ($scope.currentIndex == 0) {
    		$scope.currentIndex = $scope.projectList.length - 1;
    	} else {
    		$scope.currentIndex--;
    	}

    	$scope.setProject();
	}

    $scope.nextProject = function() {
    	
    	if ($scope.currentIndex >= $scope.projectList.length - 1) {
    		$scope.currentIndex = 0;
    	} else {
    		$scope.currentIndex++;
    	}

    	$scope.setProject();
    }

}]);