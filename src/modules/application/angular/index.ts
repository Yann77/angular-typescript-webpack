import "angular";

angular.module("app.application", ['ngMaterial'])
  .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('action', 'content/icons/material/action.svg', 24)
    }]);