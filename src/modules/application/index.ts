import 'angular';
import '../../modules/core/index';

angular.module('app.application', ['ngMaterial', 'ngAnimate', 'app.core'])
  .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('action', 'content/icons/material/action.svg', 24)
    }]);