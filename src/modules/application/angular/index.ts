import 'angular';

angular.module('app.application', ['ngMaterial', 'ngAnimate'])
  .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('action', 'content/icons/material/action.svg', 24)
    }]);