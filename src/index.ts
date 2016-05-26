/// <reference path='../typings/index.d.ts' />

import './modules/application/index';
import Component from './decorators';
import 'angular';
import '@angular/router/angular1/angular_1_router';
import 'rx-angular';
import 'angular-material';

// load our default (non specific) css
import 'font-awesome/css/font-awesome.css';
import './styles/screen.scss';

// load specific components
import './modules/application/components/self-serve-app/self-serve.component';

angular.module('app', ['ngComponentRouter', 'rx', 'ngMaterial', 'app.application'])
    .value('$routerRootComponent', 'appComponent');

@Component('app', 'appComponent', {
    controllerAs: 'ctrl',
    template: `<div layout="row" layout-align="center">
                     <md-content layout="column" flex-gt-sm="50" flex="100">
                       <div layout="column" layout-align="center center" layout-padding class="acquisio-logo" flex></div>
                       <ng-outlet></ng-outlet>
                     </md-content>
                   </div>`,
        $routeConfig: [
            {path: '/join/:email', name: 'SelfServeComponent', component: 'selfServeComponent', useAsDefault: true}
        ]
    })
class app {}

angular.bootstrap(document, ['app'], {
    strictDi: true
});