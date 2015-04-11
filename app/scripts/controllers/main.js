'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/vitrine.json').
      success(function(data, status, headers, config) {
        $scope.info = data.vitrine.me.profil;
        menuBar("init");
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });
