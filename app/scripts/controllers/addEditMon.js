'use strict';

/**
 * @ngdoc function
 * @name mspWebApp.controller:EditMonsterController
 * @description
 * # EditMonsterController
 * Controller of the mspWebApp
 */
angular.module('mspWebApp')
  .controller('EditMonsterController', function ($scope, $resource, $location) {

    var Monster = $resource('http://localhost:8080/api/v1/Monsters/:id');

    $scope.save_changes = function() {
      var m = new Monster($scope.newMon);
      //m.timestamp = (new Date(Date.now())).toUTCString();
      m.$save()
        .then(function(){
          $location.path('/monsters');
        })
        .catch(function(res){
          console.log(res);
        });
    };
  });
