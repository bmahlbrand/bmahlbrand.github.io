var app = angular.module('ahlbrand.blog', []);

app.controller('blogController', ['$scope', '$http', function($scope, $http) {
	
	$scope.posts = null;
	$scope.currentIndex = 0;

	$http({
		
		method: 'GET', 
		//url: 'js/src/blog/posts.json'
		url:'benjamin.ahlbrand.me:27017/blog/posts'

	}).then(function successCallback(response) {
		
		$scope.posts = response.data;

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
    	
    	if ($scope.currentIndex >= $scope.projectList.length) {
    		$scope.currentIndex = 0;
    	} else {
    		$scope.currentIndex++;
    	}

    	$scope.setProject();
    }

    $scope.comment = function() {

    }

    $scope.like = function() {

    }

    $scope.addPost = function(){
    	blog.post.createdOn = Date.now();
    	blog.post.comments = [];
    	blog.post.likes = 0;
    	blog.posts.unshift(this.post);
    	blog.tab = 0;
    	blog.post = {};
    }; 
}]);