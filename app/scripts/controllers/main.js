'use strict';

/**
 * @ngdoc function
 * @name mspWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mspWebApp
 */
angular.module('mspWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
