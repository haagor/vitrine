'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/more.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/extra', {
        templateUrl: 'views/extra.html',
        controller: 'ExtraCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  })

    .filter('reverse', function() {
      return function(items) {
        return items.slice().reverse();
      };
    });

function menuBar(strBouton) {
  var navbar = document.getElementById("navbar");
  var listbar = navbar.getElementsByTagName("li");
  for (var i = 0; i < listbar.length; i++) {
    listbar[i].setAttribute("class", "");
  }
  var obj = document.getElementById(strBouton);
  obj.setAttribute("class", "active");
}

