'use strict';

/**
 * @ngdoc function
 * @name mspWebApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the mspWebApp
 */
angular.module('mspWebApp')
  .controller('MapCtrl', function ($scope, uiGmapGoogleMapApi) {
  	$scope.poo = 'stinky';
    
    uiGmapGoogleMapApi.then(function(maps) {
    	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    	console.log(typeof maps);
    });
  });