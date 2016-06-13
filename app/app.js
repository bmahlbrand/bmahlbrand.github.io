(function () {
'use strict';
var app = angular.module('ahlbrand', ['ngRoute', 'ahlbrand.projects', 'ahlbrand.research', 'ahlbrand.index']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/index', {
          templateUrl : 'js/src/index/index.html',
          controllerUrl : 'js/src/index/controller.js'
        })
        .when('/projects', {
          templateUrl : 'js/src/projects/index.html',
          controllerUrl : 'js/src/projects/controller.js'
        })
        .when('/research', {
          templateUrl : 'js/src/research/index.html',
          controllerUrl : 'js/src/research/controller.js'
        })
        .when('/blog', {
          templateUrl : 'js/src/blog/index.html',
          controllerUrl : 'js/src/blog/controller.js'
        })
        .otherwise({
            redirectTo: '/index'
        });
    
    $locationProvider.html5Mode(true);
});

// app.run(['$rootScope', function($scope) {
// }]);

})();
