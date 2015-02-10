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
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBdDrBuInnCwClHmUhvgEn8aXuSIGVyyyA',
        v: '3.17'
    });
  });
