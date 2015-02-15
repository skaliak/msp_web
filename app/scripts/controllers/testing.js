'use strict';

/**
 * @ngdoc function
 * @name mspWebApp.controller:TestingController
 * @description
 * # TestingController
 * Controller of the mspWebApp
 */
angular.module('mspWebApp')
  .controller('TestingController', function ($scope, $resource, $location) {

    var Monster = $resource('http://localhost:8080/api/v1/Monsters/:id');

    $scope.monsters = Monster.query();

    $scope.getSightings = function(m) {
      $scope.$parent.selected_mon = m;
      $location.path('/sightings');
    };

    $scope.edit = function(m) {
      if(m) {
        $scope.$parent.selected_mon = m;
      }
      $location.path('/addedit');
    };
  });
