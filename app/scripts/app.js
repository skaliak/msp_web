'use strict';

/**
 * @ngdoc overview
 * @name mspWebApp
 * @description
 * # mspWebApp
 *
 * Main module of the application.
 */
angular
  .module('mspWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider, $resourceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/testing', {
        templateUrl: 'views/testing.html',
        controller: 'TestingController'
      })
      .when('/sightings', {
        templateUrl: 'views/sightings.html',
        controller: 'SightingsController'
      })
      .when('/addedit', {
        templateUrl: 'views/addEditMon.html',
        controller: 'EditMonsterController'
      })
      .otherwise({
        redirectTo: '/'
      });

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBdDrBuInnCwClHmUhvgEn8aXuSIGVyyyA',
        v: '3.17'
    });

    $resourceProvider.defaults.stripTrailingSlashes = false;
  });
