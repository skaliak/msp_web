'use strict';

/**
 * @ngdoc function
 * @name mspWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mspWebApp
 */
angular.module('mspWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
