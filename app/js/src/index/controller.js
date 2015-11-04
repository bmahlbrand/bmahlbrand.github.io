var app = angular.module('ahlbrand.index', []);

app.controller('indexController', ['$scope', function($scope) {

    $scope.message = "Hi everybody!  I'm doctor nick!";
$scope.message = "I created this site with Node, Express, Angular, Bootstrap";
    // $scope.templateUrl = "js/src/projects/index.html"
}]);
