import angular from 'angular';

'use strict';
export const app = angular.module('ahlbrand', ['ui.router']);

// angular.bootstrap(document.getElementById('ahlbrand'), ['ahlbrand'], {debugInfoEnabled: true});

app.config(['$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider', '$compileProvider', '$stateProvider', 'ngSanitize',
  ($urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider, $compileProvider, $stateProvider) => {

      // Allow trailing slashes on URLs.
      $urlMatcherFactoryProvider.strictMode(false);

      // Allow cas-insentitive matching for URLS.
      $urlMatcherFactoryProvider.caseInsensitive(true);

      $locationProvider.html5Mode(true);
      $compileProvider.debugInfoEnabled(true);

      // Catch 404 errors.
      $urlRouterProvider.otherwise(($injector, $location) => {
          $injector.invoke(['$state', ($state) => {
              console.log('location: ', $location);
              $state.go('index');
          }]);
      });
  }]);