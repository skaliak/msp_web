'use strict';

/**
 * @ngdoc function
 * @name mspWebApp.controller:SightingsController
 * @description
 * # SightingsController
 * Controller of the mspWebApp
 */
angular.module('mspWebApp')
  .controller('SightingsController', function ($scope, $resource, uiGmapGoogleMapApi) {
    //$(".navbar-toggle").click();

    var Monster_Sightings = $resource('http://localhost:8080/api/v1/Monsters/:id/Sightings/', {id: '@pid'});

    var Sightings = $resource('http://localhost:8080/api/v1/Sightings/');

    var make_markers = function(data) {
      angular.forEach(data, function(i) {
        console.log(i);
        var marker_obj = {
          latitude: i.lat, longitude: i.lng,
          id: _.random(0, 1000),
          options: {
            title: i.parent_name,
            labelContent: i.parent_name
          }
        };
        $scope.markers.push(marker_obj);
      });
    };

    uiGmapGoogleMapApi.then(function(maps) {

      $scope.markers = [];

      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 10, control: {} };
      //$scope.map = { zoom: 8 };

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          $scope.map.center = {latitude: position.coords.latitude, longitude: position.coords.longitude};
        });
      } else {
        $scope.map.center = { latitude: 45, longitude: -73 };
      }

      if(angular.isDefined($scope.$parent.selected_mon)) {
        $scope.selected_mon = $scope.$parent.selected_mon;

        var encoded_key = $scope.selected_mon.encoded_key;
        Monster_Sightings.query({id: encoded_key}, make_markers);
      } else {
        console.log('no selected_mon');
        Sightings.query(make_markers);
      }

      $scope.report_center = function() {
        var center = $scope.map.center;
        center.id = _.random(0, 1000);
        console.log(center);
        var marker_obj = _.clone(center);
        $scope.markers.push(marker_obj);
      };

      $scope.newSighting = function() {
        var encoded_key = $scope.selected_mon.encoded_key;
        var ts = (new Date(Date.now())).toUTCString();
        var c = $scope.map.center;
        var loc = c.latitude.toString() + "," + c.longitude.toString();
        var new_sighting = new Monster_Sightings({pid: encoded_key, location: loc, timestamp: ts, notes: "some notes"});
        new_sighting.$save()
          .then(function(){
            alert('sighting added');
            $scope.report_center();
          })
          .catch(function(res){
            console.log(res);
          });
      };

    });
  });
