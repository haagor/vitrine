'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/vitrine.json').
      success(function(data, status, headers, config) {
        $scope.info = data.vitrine.me;
        menuBar("about");
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });

